package dev.tcc_si.sistema_escolar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import dev.tcc_si.sistema_escolar.entity.usuario.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {
    UserDetails findByUsuario(String usuario);
}
