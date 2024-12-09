package dev.tcc.sistema_escolar.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import dev.tcc.sistema_escolar.domain.user.User;
import dev.tcc.sistema_escolar.dto.UpdateUserPasswordDTO;
import dev.tcc.sistema_escolar.repositories.UserRepository;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;

    @GetMapping
    public ResponseEntity<String> getUser() {
        return ResponseEntity.ok("sucesso!");
    }

    @PutMapping()
    public User updateUserPassword(@RequestBody UpdateUserPasswordDTO userPassword) {
        return this.repository.findByEmail(userPassword.userEmail()).map(user -> {
            user.setPassword(passwordEncoder.encode(userPassword.password()));
            user.setEmail(user.getEmail());
            user.setRole(user.getRole());
            return this.repository.save(user);
        }).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @PutMapping("{id}")
    public User updateUser(@RequestBody UpdateUserPasswordDTO updatedUser) {
        return this.repository.findByEmail(updatedUser.userEmail()).map(user -> {
            user.setPassword(passwordEncoder.encode(updatedUser.password()));
            user.setEmail(updatedUser.userEmail());
            return this.repository.save(user);
        }).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") String id) {
        this.repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}