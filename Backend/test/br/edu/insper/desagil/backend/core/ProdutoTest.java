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
	void testComMovimentacao() {

		produto.setId("key0101MAta");
		produto.setLocal("Armazém 01");
		produto.setUsuario("User01");
		produto.setDateScan("2021-12-15T20:32:14.828Z");        
		produto.setTimeScan("2021-12-15T20:32:14.828Z");              
		produto.setLastDate("2021-12-11T15:45:18.828Z");
		produto.setLastTime("2021-12-11T15:45:18.828Z");
		produto.setNome("Madeira Mogno");
		produto.setQuantidadeE("358");
		produto.setMovimentacao("SIM");
		produto.setQuantidadeM("10");
		produto.setStatus("EM USO");
		produto.setTipo("MATERIAL");
		produto.setDestino("Armazém 03");
		produto.setObservacao("Será utilizada na obra para criação de balcões.");

		assertEquals("key0101MAta", produto.getId());
		assertEquals("Armazém 01", produto.getLocal());
		assertEquals("User01", produto.getUsuario());
		assertEquals("2021-12-15T20:32:14.828Z", produto.getDateScan());
		assertEquals("2021-12-15T20:32:14.828Z", produto.getTimeScan());
		assertEquals("2021-12-11T15:45:18.828Z", produto.getLastDate());
		assertEquals("2021-12-11T15:45:18.828Z", produto.getLastTime());
		assertEquals("Madeira Mogno", produto.getNome());
		assertEquals("358", produto.getQuantidadeE());
		assertEquals("SIM", produto.getMovimentacao());
		assertEquals("10", produto.getQuantidadeM());
		assertEquals("EM USO", produto.getStatus());
		assertEquals("MATERIAL", produto.getTipo());
		assertEquals("Armazém 03", produto.getDestino());
		assertEquals("Será utilizada na obra para criação de balcões.", produto.getObservacao());
	}
	
	@Test
	void testSemMovimentacao() {

		produto.setId("key0102FUco");
		produto.setLocal("Armazém 02");
		produto.setUsuario("User02");
		produto.setDateScan("2021-12-16T18:32:17.828Z");        
		produto.setTimeScan("2021-12-16T18:32:17.828Z");              
		produto.setLastDate("2021-12-09T07:45:18.828Z");
		produto.setLastTime("2021-12-09T07:45:18.828Z");
		produto.setNome("Furadeira de Coluna ");
		produto.setQuantidadeE("5");
		produto.setMovimentacao("NAO");
		produto.setQuantidadeM("");
		produto.setTipo("FERRAMENTA");
		produto.setDestino("");
		produto.setObservacao("Indicada para perfurações que necessitam ser precisas.");
		
		assertEquals("key0102FUco", produto.getId());
		assertEquals("Armazém 02", produto.getLocal());
		assertEquals("User02", produto.getUsuario());
		assertEquals("2021-12-16T18:32:17.828Z", produto.getDateScan());
		assertEquals("2021-12-16T18:32:17.828Z", produto.getTimeScan());
		assertEquals("2021-12-09T07:45:18.828Z", produto.getLastDate());
		assertEquals("2021-12-09T07:45:18.828Z", produto.getLastTime());
		assertEquals("Furadeira de Coluna", produto.getNome());
		assertEquals("5", produto.getQuantidadeE());
		assertEquals("NAO", produto.getMovimentacao());
		assertEquals("", produto.getQuantidadeM());
		assertEquals("EM USO", produto.getStatus());
		assertEquals("FERRAMENTA", produto.getTipo());
		assertEquals("", produto.getDestino());
		assertEquals("Indicada para perfurações que necessitam ser precisas.", produto.getObservacao());
	}
}
