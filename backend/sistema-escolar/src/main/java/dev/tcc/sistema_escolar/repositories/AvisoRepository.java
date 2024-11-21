package dev.tcc.sistema_escolar.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.tcc.sistema_escolar.domain.aviso.Aviso;

public interface AvisoRepository extends JpaRepository<Aviso, String> {
    List<Aviso> findByAlunoId(String alunoId);

    List<Aviso> findByProfessorId(String professorId);
}
