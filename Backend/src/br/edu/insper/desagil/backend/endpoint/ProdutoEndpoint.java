package br.edu.insper.desagil.backend.endpoint;

import java.util.List;

import br.edu.insper.desagil.backend.core.Produto;
import br.edu.insper.desagil.backend.dao.ProdutoDAO;
import br.edu.insper.desagil.backend.httpserver.Args;
import br.edu.insper.desagil.backend.httpserver.Endpoint;
import br.edu.insper.desagil.backend.httpserver.Result;

public class ProdutoEndpoint extends Endpoint<Produto>{
	
	private ProdutoDAO dao;
	
	public ProdutoEndpoint() {
		super("/produto");
		dao = new ProdutoDAO();
	}
	
	@Override
	public Produto get(Args args){
		String key = args.get("id");
		return dao.retrieve(key);
	}
	
	@Override
	public List<Produto> getList(Args args){
		return dao.retrieveAll();
	}
	
	@Override
	public Result post(Args args, Produto produto) {
		dao.create(produto);			
		return new Result();
	}
	
	@Override
	public Result put(Args args, Produto produto) {
		dao.update(produto);
		return new Result();
	}
	
	@Override 
	public Result delete(Args args){
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
