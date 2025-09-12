package com.senai.infoa.agenisesi.models;

public class Aluno {
    protected int id;
    private String nome;
    private String pet;
    private String senha;
    protected String turma;

    public Aluno() {}

    public Aluno(int id, String nome, String pet, String senha, String turma) {
        this.id = id;
        this.nome = nome;
        this.pet = pet;
        this.senha = senha;
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

    public String getPet() {
        return pet;
    }

    public void setPet(String pet) {
        this.pet = pet;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getTurma() {
        return turma;
    }

    public void setTurma(String turma) {
        this.turma = turma;
    }

}
