package it.main.biblioteca.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users") // renamed to avoid PostgreSQL conflicts
@JsonIgnoreProperties({"max_BOOKS"})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToMany
    @JoinTable(
            name = "user_books",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "book_id")
    )
    private Set<Book> loanBooks = new HashSet<>();

    @Transient
    private final int MAX_BOOKS = 3;

    public boolean addBook(Book book) {
        if(loanBooks.size() < MAX_BOOKS && book.isAvailable() && book.borrowBook()) {
            loanBooks.add(book);
            return true;
        }
        return false;
    }

    public boolean removeBook(Book book) {
        if(loanBooks.remove(book)) {
            book.returnBook();
            return true;
        }
        return false;
    }

}
