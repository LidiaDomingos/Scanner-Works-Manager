package br.edu.insper.desagil.backend.core;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ProdutoTest {
	
	private Produto produto;
	
	@BeforeEach
	void setUp() {
		produto = new Produto();
	}
	
	@Test
	void test() {
		produto.setId("key2005WSmd");
		produto.setLocal("Edificio Matilda");
		produto.setUsuario("user1");
		//produto.setDateScan("2021-11-25");         //VER COMO ESCREVE
		//produto.setTimeScan("15:30");              //VER
		//produto.setLastDate("2021-10-10");
		//produto.setLastTime("10:00");
		produto.setNome("Pedaco de madeira");
		produto.setMovimentacao("NAO");
		produto.setQuantidadeE("10");
		produto.setQuantidadeM("0");
		produto.setDestino("");
		produto.setStatus("EM USO");
		produto.setObservacao("Testando BD.");
		
		assertEquals("key2005WSmd", produto.getId());
		assertEquals("Edificio Matilda", produto.getLocal());
		assertEquals("user1", produto.getUsuario());
		//assertEquals("2021-11-25", produto.getDateScan());
		//assertEquals("15:30", produto.getTimeScan());
		//assertEquals("2021-10-10", produto.getLastDate());
		//assertEquals("10:00", produto.getLastTime());
		assertEquals("Pedaco de madeira", produto.getNome());
		assertEquals("NAO", produto.getMovimentacao());
		assertEquals("10", produto.getQuantidadeE());
		assertEquals("0", produto.getQuantidadeM());
		assertEquals("", produto.getDestino());
		assertEquals("EM USO", produto.getStatus());
		assertEquals("Testando BD.", produto.getObservacao());
	}

}
