package dev.tcc.sistema_escolar.dto;

import dev.tcc.sistema_escolar.domain.user.User;

public record RegisterResponseDTO(String token, User user) {
}