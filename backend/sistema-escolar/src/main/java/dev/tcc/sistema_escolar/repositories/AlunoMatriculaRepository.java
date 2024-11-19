package dev.tcc.sistema_escolar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.tcc.sistema_escolar.domain.aluno.AlunoMatricula;

public interface AlunoMatriculaRepository extends JpaRepository<AlunoMatricula, String> {

}
