package br.edu.insper.desagil.backend.core;

import br.edu.insper.desagil.backend.database.firestore.FirestoreObject;

public class Item extends FirestoreObject{
	private int id;
	private String local;
	private String status;
	private boolean movimentacao;
	
	@Override
	public String key() {
		return String.valueOf(id);
	}
	
	public void setId(int id) {
		this.id = id;
	}


	public String getLocal() {
		return local;
	}
	public void setLocal(String local) {
		this.local = local;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public boolean isMovimentacao() {
		return movimentacao;
	}
	public void setMovimentacao(boolean movimentacao) {
		this.movimentacao = movimentacao;
	}
	public int getId() {
		return id;
	}
}
