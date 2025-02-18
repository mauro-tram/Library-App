package it.main.biblioteca.service;

import it.main.biblioteca.model.Book;
import it.main.biblioteca.model.User;
import it.main.biblioteca.repository.BookRepository;
import it.main.biblioteca.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LibraryService {

    private final UserRepository userRepository;
    private final BookRepository bookRepository;

    // Constructor
    public LibraryService(UserRepository userRepository, BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        this.userRepository = userRepository;
    }

    public boolean bookDelivery(Long userId, Long bookId) {
        Optional<User> userOpt = userRepository.findById(userId);
        Optional<Book> bookOpt = bookRepository.findById(bookId);

        if(userOpt.isPresent() && bookOpt.isPresent()) {
            User user = userOpt.get();
            Book book = bookOpt.get();

            if (user.getLoanBooks().size() < user.getMAX_BOOKS() && book.isAvailable()) {
                user.getLoanBooks().add(book);
                book.borrowBook();
                userRepository.save(user);
                bookRepository.save(book);
                return true;
            }
        }
        return false;
    }

    public boolean bookWithdraw(Long userId, Long bookId) {
        Optional<User> userOpt = userRepository.findById(userId);
        Optional<Book> bookOpt = bookRepository.findById(bookId);

        if(userOpt.isPresent() && bookOpt.isPresent()) {
            User user = userOpt.get();
            Book book = bookOpt.get();

            if (user.getLoanBooks().contains(book)) {
                user.getLoanBooks().remove(book);
                book.returnBook();
                userRepository.save(user);
                bookRepository.save(book);
                return true;
            }
        }
        return false;
    }

    public boolean bookAccepted(boolean isAccepted) {
        return isAccepted;
    }

}
