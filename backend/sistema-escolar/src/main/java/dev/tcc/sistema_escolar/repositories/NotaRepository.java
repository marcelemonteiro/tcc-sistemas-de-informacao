package dev.tcc.sistema_escolar.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.tcc.sistema_escolar.domain.nota.Nota;

public interface NotaRepository extends JpaRepository<Nota, String> {
    List<Nota> findByAlunoId(String AlunoId);
}
