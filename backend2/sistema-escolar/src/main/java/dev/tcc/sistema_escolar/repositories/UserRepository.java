package dev.tcc.sistema_escolar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.tcc.sistema_escolar.domain.user.User;

public interface UserRepository extends JpaRepository<User, String> {

}
