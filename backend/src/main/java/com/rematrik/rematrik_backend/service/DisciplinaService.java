package com.rematrik.rematrik_backend.service;

import com.rematrik.rematrik_backend.model.ComponenteCurricular;
import com.rematrik.rematrik_backend.model.Curso;
import com.rematrik.rematrik_backend.repository.ComponenteCurricularRepository;
import com.rematrik.rematrik_backend.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DisciplinaService {

    @Autowired
    private ComponenteCurricularRepository componenteCurricularRepository;

    @Autowired
    private CursoRepository cursoRepository;

    // Método para buscar todos os cursos (para o frontend saber os IDs)
    public List<Curso> getTodosOsCursos() {
        return cursoRepository.findAll();
    }

    // Método que busca as disciplinas com base no ID do curso e no período
    public List<ComponenteCurricular> getDisciplinasPorCursoEPeriodo(Long cursoId, int periodo) {
        // Usa o método que criámos no repositório para buscar todas as disciplinas
        // de um curso que sejam de um período menor ou igual ao informado.
        return componenteCurricularRepository.findByCursoIdAndPeriodoLessThanEqual(cursoId, periodo);
    }
}