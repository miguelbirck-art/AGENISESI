package com.senai.infoa.agenisesi.models;

public class Turma {
    
    protected int id;
    private String serie;
    private String numSala;
    private String numTurma;

    public Turma (){}

    public Turma(int id, String serie, String numSala, String numTurma) {
        this.id = id;
        this.serie = serie;
        this.numSala = numSala;
        this.numTurma = numTurma;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSerie() {
        return serie;
    }

    public void setSerie(String serie) {
        this.serie = serie;
    }

    public String getNumSala() {
        return numSala;
    }

    public void setNumSala(String numSala) {
        this.numSala = numSala;
    }

    public String getNumTurma() {
        return numTurma;
    }

    public void setNumTurma(String numTurma) {
        this.numTurma = numTurma;
    }

}
