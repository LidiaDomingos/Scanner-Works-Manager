package br.edu.insper.desagil.backend.dao;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import br.edu.insper.desagil.backend.Backend;
import br.edu.insper.desagil.backend.core.Produto;
import br.edu.insper.desagil.backend.database.firestore.Firestore;

class ProdutoDAOTest {

	private static String name;
	
	private ProdutoDAO dao;
	
	@BeforeAll
	public static void setUpClass() {
		name = Firestore.start(Backend.CREDENTIALS_TEST);
	}
	
	@BeforeEach
	void setUp() {
		dao = new ProdutoDAO();
		dao.deleteAll();
	}
	
	@Test
	void verificaConstrucao() {
		Produto produto;
		
		produto = new Produto();
		
		produto.setId("key0102FUco");
		produto.setLocal("Armazém 02");
		produto.setUsuario("User02");
		produto.setDateScan("2021-12-16T18:32:17.828Z");        
		produto.setTimeScan("2021-12-16T18:32:17.828Z");              
		produto.setLastDate("2021-12-09T07:45:18.828Z");
		produto.setLastTime("2021-12-09T07:45:18.828Z");
		produto.setNome("Furadeira de Coluna");
		produto.setQuantidadeE("5");
		produto.setMovimentacao("NAO");
		produto.setQuantidadeM("");
		produto.setStatus("USO");
		produto.setTipo("FERRAMENTA");
		produto.setDestino("");
		produto.setObservacao("Indicada para perfurações que necessitam ser precisas.");
		
		
		dao.create(produto);
		String key = produto.getId();
		assertTrue(dao.exists(key));
		
		produto = dao.retrieve(key);
		
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
		assertEquals("USO", produto.getStatus());
		assertEquals("FERRAMENTA", produto.getTipo());
		assertEquals("", produto.getDestino());
		assertEquals("Indicada para perfurações que necessitam ser precisas.", produto.getObservacao());
		
		dao.delete(key);
		assertFalse(dao.exists(key));
		
	}
	
	@AfterAll
	public static void tearDownClass() {
		Firestore.stop(name);
	}

}
