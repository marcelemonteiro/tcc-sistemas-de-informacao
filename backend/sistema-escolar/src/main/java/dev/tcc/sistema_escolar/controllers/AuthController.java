package dev.tcc.sistema_escolar.controllers;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.tcc.sistema_escolar.domain.aluno.Aluno;
import dev.tcc.sistema_escolar.domain.user.User;
import dev.tcc.sistema_escolar.dto.LoginRequestDTO;
import dev.tcc.sistema_escolar.dto.LoginResponseDTO;
import dev.tcc.sistema_escolar.dto.RegisterRequestDTO;
import dev.tcc.sistema_escolar.dto.RegisterResponseDTO;
import dev.tcc.sistema_escolar.infra.security.TokenService;
import dev.tcc.sistema_escolar.repositories.AlunoRepository;
import dev.tcc.sistema_escolar.repositories.UserRepository;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserRepository repository;
    private final AlunoRepository alunoRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO body) {
        User user = this.repository.findByEmail(body.email()).orElseThrow(() -> new RuntimeException("User not found"));

        if (passwordEncoder.matches(body.password(), user.getPassword())) {
            String token = this.tokenService.generateToken(user);
            Aluno aluno = this.alunoRepository.findByUsuarioId(user.getId())
                    .orElseThrow(() -> new RuntimeException("User not found in Aluno"));
            return ResponseEntity.ok(new LoginResponseDTO(token, aluno));
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponseDTO> register(@RequestBody RegisterRequestDTO body) {
        Optional<User> user = this.repository.findByEmail(body.email());

        if (user.isEmpty()) {
            User newUser = new User();
            newUser.setPassword(passwordEncoder.encode(body.password()));
            newUser.setEmail(body.email());
            newUser.setRole(body.role());
            this.repository.save(newUser);

            String token = this.tokenService.generateToken(newUser);
            return ResponseEntity.ok(new RegisterResponseDTO(token));
        }
        return ResponseEntity.badRequest().build();
    }
}
