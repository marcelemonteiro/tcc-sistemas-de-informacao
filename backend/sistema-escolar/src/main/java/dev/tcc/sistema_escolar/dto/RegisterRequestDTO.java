package dev.tcc.sistema_escolar.dto;

import dev.tcc.sistema_escolar.domain.user.UserRole;

public record RegisterRequestDTO(String email, String password, UserRole role) {
}