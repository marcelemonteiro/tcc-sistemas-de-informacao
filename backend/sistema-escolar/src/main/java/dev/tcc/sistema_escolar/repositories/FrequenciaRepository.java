package dev.tcc.sistema_escolar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.tcc.sistema_escolar.domain.frequencia.Frequencia;

public interface FrequenciaRepository extends JpaRepository<Frequencia, String> {

}
