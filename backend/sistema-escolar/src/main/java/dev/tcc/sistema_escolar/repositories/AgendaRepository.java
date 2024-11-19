package dev.tcc.sistema_escolar.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.tcc.sistema_escolar.domain.agenda.Agenda;

public interface AgendaRepository extends JpaRepository<Agenda, String> {
    List<Agenda> findAllByTurmaId(String turmaId);
}
