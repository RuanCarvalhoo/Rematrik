package com.rematrik.rematrik_backend.controller;

import com.rematrik.rematrik_backend.model.ComponenteCurricular;
import com.rematrik.rematrik_backend.model.Curso;
import com.rematrik.rematrik_backend.service.DisciplinaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class DisciplinaController {

    @Autowired
    private DisciplinaService disciplinaService;


    @GetMapping("/cursos")
    public List<Curso> getCursos() {
        return disciplinaService.getTodosOsCursos();
    }


    @GetMapping("/disciplinas")
    public List<ComponenteCurricular> getDisciplinas(
            @RequestParam Long cursoId,
            @RequestParam int periodo) {
        return disciplinaService.getDisciplinasPorCursoEPeriodo(cursoId, periodo);
    }
}