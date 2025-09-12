package com.senai.infoa.agenisesi.models;

public class Boletim {
    
    protected int id;
    protected String materia;
    protected String trimestre;
    protected int mediaFinal;
    protected int recuperacao;
    protected String aluno;

    public Boletim (){}

    public Boletim(int id, String materia, String trimestre, int mediaFinal, int recuperacao, String aluno) {
        this.id = id;
        this.materia = materia;
        this.trimestre = trimestre;
        this.mediaFinal = mediaFinal;
        this.recuperacao = recuperacao;
        this.aluno = aluno;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMateria() {
        return materia;
    }

    public void setMateria(String materia) {
        this.materia = materia;
    }

    public String getTrimestre() {
        return trimestre;
    }

    public void setTrimestre(String trimestre) {
        this.trimestre = trimestre;
    }

    public int getMediaFinal() {
        return mediaFinal;
    }

    public void setMediaFinal(int mediaFinal) {
        this.mediaFinal = mediaFinal;
    }

    public int getRecuperacao() {
        return recuperacao;
    }

    public void setRecuperacao(int recuperacao) {
        this.recuperacao = recuperacao;
    }

    public String getAluno() {
        return aluno;
    }

    public void setAluno(String aluno) {
        this.aluno = aluno;
    }

}
