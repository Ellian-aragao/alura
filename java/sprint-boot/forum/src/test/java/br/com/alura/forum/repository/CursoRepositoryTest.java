package br.com.alura.forum.repository;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import br.com.alura.forum.modelo.Curso;

@RunWith(SpringRunner.class)
@DataJpaTest
public class CursoRepositoryTest {

	@Autowired
	private CursoRepository repository;
	
	@Test
	public void deveriaCarregarUmCursoAoBuscarPeloNome() {
		String curso = "HTML 5";
		Curso cursoObj = repository.findByNome(curso);
		Assert.assertNotNull(cursoObj);
		Assert.assertEquals(curso, cursoObj.getNome());
	}
}
