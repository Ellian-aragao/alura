package br.com.alura.forum.repository;

import java.util.List;
import java.util.stream.Collectors;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import br.com.alura.forum.controller.dto.TopicoDto;
import br.com.alura.forum.modelo.Topico;

@RunWith(SpringRunner.class)
@DataJpaTest
class TopicoRepositoryTest {

	@Autowired
	private TopicoRepository repository;

	@Test
	public void encontraCursoPeloNomeDoCurso() {
		List<TopicoDto> topicoDto = repository.findByCursoNome("Spring Boot", null).get().map(TopicoDto::new)
				.collect(Collectors.toList());

		Assert.assertEquals(1L, topicoDto.get(0).getId().longValue());
		Assert.assertEquals(2L, topicoDto.get(1).getId().longValue());
	}
	
	@Test
	public void recebeListaDeCursos() {
		List<Topico> topicos = repository.findAll();
		
		Assert.assertEquals(3, topicos.size());
		Assert.assertEquals("Dúvida", topicos.get(0).getTitulo());
		Assert.assertEquals("Dúvida 2", topicos.get(1).getTitulo());
		Assert.assertEquals("Dúvida 3", topicos.get(2).getTitulo());
	}

}
