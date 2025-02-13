package it.main.biblioteca.service;

import it.main.biblioteca.model.Book;
import it.main.biblioteca.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

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
}