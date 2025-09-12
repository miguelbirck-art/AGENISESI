package com.senai.infoa.agenisesi.models;

import java.time.LocalDate;

public class Atividade {
    
    protected int id;
    private String nome;
    private String descricao;
    private LocalDate data;
    private String materia;
    private String professor;
    private String turma;

    public Atividade (){}

    public Atividade(int id, String nome, String descricao, LocalDate data, String materia, String professor,
            String turma) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.materia = materia;
        this.professor = professor;
        this.turma = turma;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getMateria() {
        return materia;
    }

    public void setMateria(String materia) {
        this.materia = materia;
    }

    public String getProfessor() {
        return professor;
    }

    public void setProfessor(String professor) {
        this.professor = professor;
    }

    public String getTurma() {
        return turma;
    }

    public void setTurma(String turma) {
        this.turma = turma;
    }

}
