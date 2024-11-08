package dev.tcc.sistema_escolar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.tcc.sistema_escolar.domain.turma.Turma;

public interface TurmaRepository extends JpaRepository<Turma, String> {

}
