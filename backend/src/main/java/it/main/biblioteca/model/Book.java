package it.main.biblioteca.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
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
    @JsonIgnore
    private List<User> users = new ArrayList<>();

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