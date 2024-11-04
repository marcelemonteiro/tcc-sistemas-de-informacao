package dev.tcc.sistema_escolar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import dev.tcc.sistema_escolar.model.user.User;

public interface UserRepository extends JpaRepository<User, String> {
    UserDetails findByLogin(String login);
}
