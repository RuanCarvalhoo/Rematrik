package com.rematrik.rematrik_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore; // Importar @JsonIgnore
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "cursos")
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeCurso;
    private String codigoCurso;

    @OneToMany(mappedBy = "curso", fetch = FetchType.EAGER)
    @JsonIgnore 
    private List<ComponenteCurricular> componentes;

   
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