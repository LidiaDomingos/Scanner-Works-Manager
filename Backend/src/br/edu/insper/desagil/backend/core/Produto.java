package br.edu.insper.desagil.backend.core;

import java.util.Date;

import br.edu.insper.desagil.backend.database.firestore.FirestoreObject;


public class Produto extends FirestoreObject {
	
	private String id;
	private String local;
	private String usuario;
	private Date dateScan;
	//private String timeScan;
	private Date lastDate;
	//private String lastTime;
	private String nome;
	private String quantidadeE;
	private String quantidadeM;
	private String status;
	private String movimentacao;
	private String destino;
	private String observacao;
	
	public Produto() {
		
	}
	
	
	
	public String getDestino() {
		return destino;
	}

	public void setDestino(String destino) {
		this.destino = destino;
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

	public Date getDateScan() {
		return dateScan;
	}

	public void setDateScan(Date dateScan) {
		this.dateScan = dateScan;
	}

	//public String getTimeScan() {
	//	return timeScan;
	//}

	//public void setTimeScan(String timeScan) {
	//	this.timeScan = timeScan;
	//}

	public Date getLastDate() {
		return lastDate;
	}

	public void setLastDate(Date lastDate) {
		this.lastDate = lastDate;
	}

	//public String getLastTime() {
	//	return lastTime;
	//}

	//public void setLastTime(String lastTime) {
	//	this.lastTime = lastTime;
	//}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getQuantidadeE() {
		return quantidadeE;
	}

	public void setQuantidadeE(String quantidade) {
		this.quantidadeE = quantidade;
	}
	
	public String getQuantidadeM() {
		return quantidadeM;
	}

	public void setQuantidadeM(String quantidade) {
		this.quantidadeM = quantidade;
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
