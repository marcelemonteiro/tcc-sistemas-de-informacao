package dev.tcc_si.sistema_escolar.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import dev.tcc_si.sistema_escolar.entity.usuario.Usuario;
import dev.tcc_si.sistema_escolar.repository.UsuarioRepository;

public class AuthorizationService implements UserDetailsService {
    private UsuarioRepository usuarioRepository;

    public AuthorizationService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return usuarioRepository.findByUsuario(username);
    }

    public List<Usuario> create(Usuario usuario) {
        usuarioRepository.save(usuario);
        return list();
    }

    public List<Usuario> list() {
        return usuarioRepository.findAll();
    }
}
