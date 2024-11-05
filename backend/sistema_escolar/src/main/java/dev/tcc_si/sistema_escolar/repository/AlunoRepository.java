package dev.tcc_si.sistema_escolar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.tcc_si.sistema_escolar.entity.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, String> {

}
