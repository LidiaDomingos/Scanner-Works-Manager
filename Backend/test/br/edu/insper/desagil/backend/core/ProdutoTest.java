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

}
