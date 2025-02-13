package it.main.biblioteca.service;

import it.main.biblioteca.model.Libro;
import it.main.biblioteca.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LibroService {

    @Autowired
    private LibroRepository libroRepository;

    public Libro aggiungiLibro(Libro libro) {
        return libroRepository.save(libro);
    }
}