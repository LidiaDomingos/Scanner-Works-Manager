package br.edu.insper.desagil.backend.endpoint;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.edu.insper.desagil.backend.BackendTest;
import br.edu.insper.desagil.backend.core.Produto;
import br.edu.insper.desagil.backend.httpserver.EndpointTest;
import br.edu.insper.desagil.backend.httpserver.Result;

class ProdutoEndpointTest extends EndpointTest<Produto> {
	
	@BeforeEach
	public void setUp() {
		start(BackendTest.URL, "/produto");
		deleteList();
	}
	
	@Test
	public void test() {
		Produto produto;
		produto = new Produto();
		
		produto.setId("MadeiraW200L60");
		produto.setLocal("Edificio Matilda");
		produto.setUsuario("user1");
		produto.setDateScan("2021-11-25");         //VER COMO ESCREVE
		produto.setTimeScan("15:30");              //VER
		produto.setLastDate("2021-10-10");
		produto.setLastTime("10:00");
		produto.setNome("Pedaco de madeira");
		produto.setMovimentacao("NAO");
		produto.setQuantidade("1");
		produto.setStatus("EM USO");
		produto.setObservacao("Testando BD.");
		
		post(produto);
		produto = get("id=MadeiraW200L60");
		
		assertEquals("MadeiraW200L60", produto.getId());
		assertEquals("Edificio Matilda", produto.getLocal());
		assertEquals("user1", produto.getUsuario());
		assertEquals("2021-11-25", produto.getDateScan());
		assertEquals("15:30", produto.getTimeScan());
		assertEquals("2021-10-10", produto.getLastDate());
		assertEquals("10:00", produto.getLastTime());
		assertEquals("Pedaco de madeira", produto.getNome());
		assertEquals("NAO", produto.getMovimentacao());
		assertEquals("1", produto.getQuantidade());
		assertEquals("EM USO", produto.getStatus());
		assertEquals("Testando BD.", produto.getObservacao());
	}
	
	@AfterEach
	public void tearDown() {
		stop();
	}

}
