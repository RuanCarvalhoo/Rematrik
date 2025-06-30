package com.rematrik.rematrik_backend.service;

import com.rematrik.rematrik_backend.model.Aluno;
import com.rematrik.rematrik_backend.model.ComponenteCurricular;
import com.rematrik.rematrik_backend.repository.AlunoRepository;
import com.rematrik.rematrik_backend.repository.ComponenteCurricularRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Service
public class RematriculaService {

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private ComponenteCurricularRepository componenteCurricularRepository;

    public Aluno salvarRematricula(Aluno aluno, List<Long> disciplinaIds) {
        // Busca todos os componentes curriculares com base nos IDs recebidos
        List<ComponenteCurricular> componentes = componenteCurricularRepository.findAllById(disciplinaIds);
        aluno.setDisciplinas(new HashSet<>(componentes));
        
        // Faz com que todo aluno novo va para requisições pendentes
        aluno.setStatus("pendente");

        // Salva o aluno no banco de dados com as disciplinas associadas
        return alunoRepository.save(aluno);
    }
}