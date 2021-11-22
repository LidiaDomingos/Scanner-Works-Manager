package br.edu.insper.desagil.backend.endpoint;

import java.util.List;

import br.edu.insper.desagil.backend.core.Item;
import br.edu.insper.desagil.backend.dao.ItemDAO;
import br.edu.insper.desagil.backend.httpserver.Args;
import br.edu.insper.desagil.backend.httpserver.Endpoint;
import br.edu.insper.desagil.backend.httpserver.Result;

public class ItemEndPoint extends Endpoint<Item> {
	private ItemDAO dao;

	public ItemEndPoint() {
		super("/item");
		dao = new ItemDAO();
	}
	
	@Override
	public Item get(Args args) {
		String key = args.get("id");
		return dao.retrieve(key);
	}

	@Override
	public List<Item> getList(Args args) {
		return dao.retrieveAll();
	}

	@Override
	public Result post(Args args, Item item) {
		dao.create(item);
		return new Result();
	}

	@Override
	public Result put(Args args, Item item) {
		dao.update(item);
		return new Result();
	}

	@Override
	public Result delete(Args args) {
		String key = args.get("id");
		dao.delete(key);
		return new Result();
	}

	@Override
	public Result deleteList(Args args) {
		dao.deleteAll();
		return new Result();
	}
}
