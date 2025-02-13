package it.main.biblioteca.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Libro {

    @Id
    private Long id;
    private String title;
    private String author;
    private boolean available;
    private int qty;

    public Long getId() {
        return id;
    }

    public Libro setId(Long id) {
        this.id = id;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public Libro setTitle(String title) {
        this.title = title;
        return this;
    }

    public String getAuthor() {
        return author;
    }

    public Libro setAuthor(String author) {
        this.author = author;
        return this;
    }

    public boolean isAvailable() {
        return available;
    }

    public Libro setAvailable(boolean available) {
        this.available = available;
        return this;
    }

    public int getQty() {
        return qty;
    }

    public Libro setQty(int qty) {
        this.qty = qty;
        return this;
    }
}