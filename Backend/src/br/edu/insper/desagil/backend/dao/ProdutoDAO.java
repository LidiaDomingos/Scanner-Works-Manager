package br.edu.insper.desagil.backend.dao;

import br.edu.insper.desagil.backend.core.Produto;
import br.edu.insper.desagil.backend.database.firestore.FirestoreDAO;

public class ProdutoDAO extends FirestoreDAO<Produto>{
	
	public ProdutoDAO() {
		super("produtos");
	}
}
