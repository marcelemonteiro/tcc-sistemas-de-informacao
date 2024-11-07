package dev.tcc.sistema_escolar.dto;

import dev.tcc.sistema_escolar.domain.aluno.Aluno;

public record LoginResponseDTO(String token, Aluno aluno) {
}