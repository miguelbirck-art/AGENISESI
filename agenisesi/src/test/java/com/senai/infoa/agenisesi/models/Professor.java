package com.senai.infoa.agenisesi.models;

public class Professor {
    
    protected int id;
    protected String nome;
    private int cpf;
    private String senha;

    public Professor(){}

    public Professor(int id, String nome, int cpf, String senha) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
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

    public int getCpf() {
        return cpf;
    }

    public void setCpf(int cpf) {
        this.cpf = cpf;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    
}
