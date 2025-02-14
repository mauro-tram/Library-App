package it.main.biblioteca.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String author;

    private boolean available;
    private int qty;

    @ManyToMany(mappedBy = "loanBooks")
    private Set<User> users = new HashSet<>();

    // Methods
    public boolean borrowBook() {
        if(qty > 0) {
            qty--;
            available = qty > 0;
            return true;
        }
        return false;
    }

    public void returnBook() {
        qty++;
        available = true;
    }
}