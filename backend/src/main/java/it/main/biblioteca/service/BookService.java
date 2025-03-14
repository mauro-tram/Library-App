package it.main.biblioteca.service;

import it.main.biblioteca.model.Book;
import it.main.biblioteca.model.User;
import it.main.biblioteca.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    // CRUD
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<Book> getBookById(Long id) {
        return bookRepository.findById(id);
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public Optional<Book> updateBook(Long id, Book updatedBook) {
        return bookRepository.findById(id).map(existingBook -> {
           existingBook.setTitle(updatedBook.getTitle());
           existingBook.setAuthor(updatedBook.getAuthor());
           existingBook.setAvailable(updatedBook.isAvailable());
           existingBook.setQty(updatedBook.getQty());
           return bookRepository.save(existingBook);
        });
    }

    public boolean deleteBook(Long id) {
        if(bookRepository.existsById(id)) {
            bookRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Other methods
    public List<User> getUsersByBookId(Long id) {
        return bookRepository.findById(id)
                .map(Book::getUsers)
                .orElseThrow(() -> new RuntimeException("Libro non trovato con ID: " + id));
    }
}