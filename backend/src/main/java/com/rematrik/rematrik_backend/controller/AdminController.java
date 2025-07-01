package com.rematrik.rematrik_backend.controller;

import com.rematrik.rematrik_backend.model.Aluno;
import com.rematrik.rematrik_backend.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AlunoRepository alunoRepository;

    @GetMapping("/requisicoes")
    public List<Aluno> getRequisicoesPorStatus(@RequestParam String status) {
        return alunoRepository.findByStatus(status);
    }

    @GetMapping("/requisicao/{id}")
    public ResponseEntity<Aluno> getRequisicaoPorId(@PathVariable Long id) {
        return alunoRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/requisicao/{id}")
    public ResponseEntity<Aluno> updateRequisicao(@PathVariable Long id, @RequestBody Aluno alunoDetails) {
        return alunoRepository.findById(id)
                .map(aluno -> {
                    aluno.setNome(alunoDetails.getNome());
                    aluno.setMatricula(alunoDetails.getMatricula());
                    aluno.setAnoSemestre(alunoDetails.getAnoSemestre());
                    aluno.setEmail(alunoDetails.getEmail());
                    Aluno updatedAluno = alunoRepository.save(aluno);
                    return ResponseEntity.ok(updatedAluno);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/requisicao/{id}/status")
    public ResponseEntity<Aluno> updateRequisicaoStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> payload) {

        String newStatus = payload.get("status");
        if (newStatus == null || newStatus.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        return alunoRepository.findById(id)
                .map(aluno -> {
                    aluno.setStatus(newStatus);
                    Aluno updatedAluno = alunoRepository.save(aluno);
                    return ResponseEntity.ok(updatedAluno);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}