package it.main.biblioteca.controller;

import it.main.biblioteca.service.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/library")
public class LibraryController {

    @Autowired
    private LibraryService libraryService;

    @PostMapping("/{userId}/delivery/{bookId}")
    public ResponseEntity<String> bookDelivery(@PathVariable Long userId, @PathVariable Long bookId) {
        boolean added = libraryService.bookDelivery(userId, bookId);
        if(added) {
            return ResponseEntity.ok("Book added to user successfully.");
        } else {
            return ResponseEntity.badRequest().body("Could not add book to user.");
        }
    }

    @DeleteMapping("/{userId}/withdraw/{bookId}")
    public ResponseEntity<String> bookWithdraw(
            @PathVariable Long userId,
            @PathVariable Long bookId,
            @RequestParam boolean isAccepted
    ) {
        if(!libraryService.bookAccepted(isAccepted)) {
            return ResponseEntity.badRequest().body("Book not accepted.");
        }
        boolean removed = libraryService.bookWithdraw(userId, bookId);
        if(removed) {
            return ResponseEntity.ok("Book removed from user successfully.");
        } else {
            return ResponseEntity.badRequest().body("Could not remove book from user.");
        }
    }

}
