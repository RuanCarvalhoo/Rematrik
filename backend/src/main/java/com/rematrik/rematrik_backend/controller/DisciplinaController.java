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

    // Endpoint para o frontend buscar a lista de todos os cursos
    @GetMapping("/cursos")
    public List<Curso> getCursos() {
        return disciplinaService.getTodosOsCursos();
    }

    // Endpoint para buscar as disciplinas
    // Exemplo de como chamar: /api/disciplinas?cursoId=1&periodo=3
    @GetMapping("/disciplinas")
    public List<ComponenteCurricular> getDisciplinas(
            @RequestParam Long cursoId,
            @RequestParam int periodo) {
        return disciplinaService.getDisciplinasPorCursoEPeriodo(cursoId, periodo);
    }
}