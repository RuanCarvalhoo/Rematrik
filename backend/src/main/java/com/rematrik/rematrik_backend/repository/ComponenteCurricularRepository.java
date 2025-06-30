package com.rematrik.rematrik_backend.repository;

import com.rematrik.rematrik_backend.model.ComponenteCurricular;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ComponenteCurricularRepository extends JpaRepository<ComponenteCurricular, Long> {
    List<ComponenteCurricular> findByCursoIdAndPeriodoLessThanEqual(Long cursoId, int periodo);
}