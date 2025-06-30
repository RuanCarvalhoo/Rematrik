package com.rematrik.rematrik_backend.model;

import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name = "alunos")
public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String matricula;
    private String anoSemestre;
    private String email;
    private String cpf;
    private String status;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "aluno_disciplinas",
        joinColumns = @JoinColumn(name = "aluno_id"),
        inverseJoinColumns = @JoinColumn(name = "disciplina_id")
    )
    private Set<ComponenteCurricular> disciplinas;

    // Getters e Setters
     public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public String getAnoSemestre() {
        return anoSemestre;
    }

    public void setAnoSemestre(String anoSemestre) {
        this.anoSemestre = anoSemestre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Set<ComponenteCurricular> getDisciplinas() {
        return disciplinas;
    }

    public void setDisciplinas(Set<ComponenteCurricular> disciplinas) {
        this.disciplinas = disciplinas;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}