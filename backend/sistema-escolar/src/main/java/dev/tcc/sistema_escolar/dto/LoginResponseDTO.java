package dev.tcc.sistema_escolar.dto;

import java.util.Optional;

import dev.tcc.sistema_escolar.domain.aluno.Aluno;
import dev.tcc.sistema_escolar.domain.professor.Professor;

public record LoginResponseDTO(String token, Optional<Aluno> aluno, Optional<Professor> professor) {
}