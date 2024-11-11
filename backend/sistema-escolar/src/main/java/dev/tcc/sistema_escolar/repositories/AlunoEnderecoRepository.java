package dev.tcc.sistema_escolar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.tcc.sistema_escolar.domain.aluno.AlunoEndereco;

public interface AlunoEnderecoRepository extends JpaRepository<AlunoEndereco, String> {

}