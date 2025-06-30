package com.rematrik.rematrik_backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference; // Certifique-se de que este import está presente
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "cursos")
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // A anotação @JsonManagedReference foi REMOVIDA daqui

    private String nomeCurso;
    private String codigoCurso;

    @OneToMany(mappedBy = "curso", fetch = FetchType.EAGER) // Adicionei EAGER para garantir que os componentes sejam carregados
    @JsonManagedReference // A anotação foi MOVIDA para cá
    private List<ComponenteCurricular> componentes;

    // Getters e Setters (permanecem os mesmos)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeCurso() {
        return nomeCurso;
    }

    public void setNomeCurso(String nomeCurso) {
        this.nomeCurso = nomeCurso;
    }

    public String getCodigoCurso() {
        return codigoCurso;
    }

    public void setCodigoCurso(String codigoCurso) {
        this.codigoCurso = codigoCurso;
    }

    public List<ComponenteCurricular> getComponentes() {
        return componentes;
    }

    public void setComponentes(List<ComponenteCurricular> componentes) {
        this.componentes = componentes;
    }
}