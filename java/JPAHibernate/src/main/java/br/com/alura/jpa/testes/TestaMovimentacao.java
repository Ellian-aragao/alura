package br.com.alura.jpa.testes;

import java.time.LocalDateTime;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import br.com.alura.jpa.modelo.Conta;
import br.com.alura.jpa.modelo.Movimentacao;
import br.com.alura.jpa.modelo.TipoMovimentacao;

public class TestaMovimentacao {
	public static void main(String[] args) {
		
		Conta c = new Conta();
		c.setTitular("Ribesvaldo");
		c.setNumero(123432);
		c.setAgencia(12345125);
		c.setSaldo(300.0);
		Movimentacao mov = new Movimentacao();
		mov.setData(LocalDateTime.now());
		mov.setDescricao("Churrascaria");
		mov.setTipoMovimentacao(TipoMovimentacao.SAIDA);
		mov.setConta(c);
		
		
		
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("contas");
		EntityManager em = emf.createEntityManager();
		
		
		em.getTransaction().begin();
		em.persist(c);
		em.persist(mov);
		em.getTransaction().commit();
		
		em.close();
		emf.close();
	}
}
