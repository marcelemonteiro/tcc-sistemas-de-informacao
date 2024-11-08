package dev.tcc.sistema_escolar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.tcc.sistema_escolar.domain.professor.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, String> {

}
