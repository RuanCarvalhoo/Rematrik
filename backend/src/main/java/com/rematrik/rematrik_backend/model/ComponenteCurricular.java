package com.rematrik.rematrik_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "componentes_curriculares")
public class ComponenteCurricular {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int periodo;
    private String codigoComponente;
    private String nomeComponente;

    @ManyToOne
    @JoinColumn(name = "curso_id")

    private Curso curso;

     public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getPeriodo() {
        return periodo;
    }

    public void setPeriodo(int periodo) {
        this.periodo = periodo;
    }

    public String getCodigoComponente() {
        return codigoComponente;
    }

    public void setCodigoComponente(String codigoComponente) {
        this.codigoComponente = codigoComponente;
    }

    public String getNomeComponente() {
        return nomeComponente;
    }

    public void setNomeComponente(String nomeComponente) {
        this.nomeComponente = nomeComponente;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }
}