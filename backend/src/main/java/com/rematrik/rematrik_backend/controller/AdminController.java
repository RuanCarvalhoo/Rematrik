package com.rematrik.rematrik_backend.controller;

import com.rematrik.rematrik_backend.model.Aluno;
import com.rematrik.rematrik_backend.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AlunoRepository alunoRepository;

    // Endpoint para listar requisições por status (pendente, analise, concluida)
    @GetMapping("/requisicoes")
    public List<Aluno> getRequisicoesPorStatus(@RequestParam String status) {
        return alunoRepository.findByStatus(status);
    }

    // Endpoint para buscar uma requisição específica por ID
    @GetMapping("/requisicao/{id}")
    public ResponseEntity<Aluno> getRequisicaoPorId(@PathVariable Long id) {
        return alunoRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}