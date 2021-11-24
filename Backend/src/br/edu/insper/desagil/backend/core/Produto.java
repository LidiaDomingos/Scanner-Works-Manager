package br.edu.insper.desagil.backend.core;

import br.edu.insper.desagil.backend.database.firestore.FirestoreObject;


public class Produto extends FirestoreObject {
	
	private String id;
	private String local;
	private String usuario;
	private String dateScan;
	private String timeScan;
	private String lastDate;
	private String lastTime;
	private String nome;
	private String quantidade;
	private String status;
	private String movimentacao;
	private String observacao;
	
	public Produto() {
		
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getLocal() {
		return local;
	}

	public void setLocal(String local) {
		this.local = local;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getDateScan() {
		return dateScan;
	}

	public void setDateScan(String dateScan) {
		this.dateScan = dateScan;
	}

	public String getTimeScan() {
		return timeScan;
	}

	public void setTimeScan(String timeScan) {
		this.timeScan = timeScan;
	}

	public String getLastDate() {
		return lastDate;
	}

	public void setLastDate(String lastDate) {
		this.lastDate = lastDate;
	}

	public String getLastTime() {
		return lastTime;
	}

	public void setLastTime(String lastTime) {
		this.lastTime = lastTime;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(String quantidade) {
		this.quantidade = quantidade;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMovimentacao() {
		return movimentacao;
	}

	public void setMovimentacao(String movimentacao) {
		this.movimentacao = movimentacao;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacoes) {
		this.observacao = observacoes;
	}

	@Override
	public String key() {
		return id;
	}
	
}
