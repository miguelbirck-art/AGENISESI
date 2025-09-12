package com.senai.infoa.agenisesi.models;

public class Materia {
    
    protected int id;
    private String nome;
    private String professor;
    private boolean Obrigatorio;

    public Materia (){}

    public Materia(int id, String nome, String professor, boolean obrigatorio) {
        this.id = id;
        this.nome = nome;
        this.professor = professor;
        Obrigatorio = obrigatorio;
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

    public String getProfessor() {
        return professor;
    }

    public void setProfessor(String professor) {
        this.professor = professor;
    }

    public boolean isObrigatorio() {
        return Obrigatorio;
    }

    public void setObrigatorio(boolean obrigatorio) {
        Obrigatorio = obrigatorio;
    }

}
