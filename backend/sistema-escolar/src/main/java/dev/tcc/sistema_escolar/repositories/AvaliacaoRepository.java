package dev.tcc.sistema_escolar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.tcc.sistema_escolar.domain.avaliacao.Avaliacao;

public interface AvaliacaoRepository extends JpaRepository<Avaliacao, String> {

}
