package dev.tcc.sistema_escolar.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import dev.tcc.sistema_escolar.domain.professor.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, String> {
    @Query("SELECT p FROM Professor p WHERE p.id = :id OR p.usuario.id = :usuarioId")
    Optional<Professor> findByIdOrUsuarioId(@Param("id") String id, @Param("usuarioId") String usuarioId);
}
