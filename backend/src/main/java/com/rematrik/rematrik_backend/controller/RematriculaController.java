package com.rematrik.rematrik_backend.controller;

import com.rematrik.rematrik_backend.model.Aluno;
import com.rematrik.rematrik_backend.service.RematriculaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class RematriculaController {

    @Autowired
    private RematriculaService rematriculaService;

    // DTO (Data Transfer Object) para receber os dados do frontend
    public static class RematriculaRequest {
        public Aluno aluno;
        public List<Long> disciplinaIds;
    }

    @PostMapping("/rematricula")
    public ResponseEntity<Aluno> criarRematricula(@RequestBody RematriculaRequest request) {
        Aluno alunoSalvo = rematriculaService.salvarRematricula(request.aluno, request.disciplinaIds);
        return ResponseEntity.ok(alunoSalvo);
    }
}