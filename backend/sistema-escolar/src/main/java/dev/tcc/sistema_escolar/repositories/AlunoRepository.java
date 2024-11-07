package dev.tcc.sistema_escolar.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.tcc.sistema_escolar.domain.aluno.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, String> {
    Optional<Aluno> findByUsuarioId(String usuarioId);
}