package br.edu.insper.desagil.backend.dao;


import br.edu.insper.desagil.backend.core.Item;
import br.edu.insper.desagil.backend.database.firestore.FirestoreDAO;

public class ItemDAO extends FirestoreDAO<Item> {
	public ItemDAO() {
		super("itens");
	}
}
