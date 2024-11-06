package dev.tcc_si.sistema_escolar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.tcc_si.sistema_escolar.entity.usuario.AuthenticationDTO;
import dev.tcc_si.sistema_escolar.entity.usuario.LoginResponseDTO;
import dev.tcc_si.sistema_escolar.entity.usuario.RegistroDTO;
import dev.tcc_si.sistema_escolar.entity.usuario.Usuario;
import dev.tcc_si.sistema_escolar.infra.security.TokenService;
import dev.tcc_si.sistema_escolar.repository.UsuarioRepository;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody AuthenticationDTO body) {
        Usuario usuario = (Usuario) this.usuarioRepository.findByUsuario(body.usuario());

        if (passwordEncoder.matches(body.senha(), usuario.getPassword())) {
            String token = this.tokenService.generateToken(usuario);
            return ResponseEntity.ok(new LoginResponseDTO(token));
        }

        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/registro")
    public ResponseEntity<String> register(@RequestBody RegistroDTO data) {
        if (this.usuarioRepository.findByUsuario(data.usuario()) != null) {
            return ResponseEntity.badRequest().build();
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.senha());
        Usuario novoUsuario = new Usuario(data.usuario(), encryptedPassword, data.tipoUsuario());

        this.usuarioRepository.save(novoUsuario);

        return ResponseEntity.ok().build();
    }
}
