package dev.tcc.sistema_escolar.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.tcc.sistema_escolar.domain.disciplina.Disciplina;

public interface DisciplinaRepository extends JpaRepository<Disciplina, String> {
    List<Disciplina> findByTurmaId(String turmaId);
    List<Disciplina> findByProfessorId(String professorId);
}
