package br.com.alura.forum.repository;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
class UsuarioRepositoryTest {

	@Autowired
	private UsuarioRepository repository;

	@Test
	public void deveraCarregarUsuariosEVerificarID() {
		Assert.assertEquals(1L, repository.findByEmail("aluno@email.com").get().getId().longValue());
		Assert.assertEquals(2L, repository.findByEmail("moderador@email.com").get().getId().longValue());
	}
}
