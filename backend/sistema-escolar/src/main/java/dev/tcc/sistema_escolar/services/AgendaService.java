package dev.tcc.sistema_escolar.services;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.tcc.sistema_escolar.domain.agenda.Agenda;
import dev.tcc.sistema_escolar.dto.AgendaDTO;
import dev.tcc.sistema_escolar.repositories.AgendaRepository;
import dev.tcc.sistema_escolar.repositories.DisciplinaRepository;

@Service
public class AgendaService {
    private AgendaRepository agendaRepository;
    private DisciplinaRepository disciplinaRepository;

    public AgendaService(AgendaRepository agendaRepository, DisciplinaRepository disciplinaRepository) {
        this.agendaRepository = agendaRepository;
        this.disciplinaRepository = disciplinaRepository;
    }

    public Agenda createAgenda(AgendaDTO agenda) {
        var disciplina = this.disciplinaRepository.findById(agenda.disciplina())
                .orElseThrow(() -> new RuntimeException("Disciplina in Agenda not found"));

        Agenda novaAgenda = new Agenda();
        novaAgenda.setDisciplina(disciplina);
        novaAgenda.setDiaSemana(agenda.diaSemana());
        novaAgenda.setHorarioInicial(agenda.horarioInicial());
        novaAgenda.setHorarioFinal(agenda.horarioFinal());

        return this.agendaRepository.save(novaAgenda);
    }

    public Agenda updateAgenda(String id, AgendaDTO agendaAtualizada) {
        var disciplina = this.disciplinaRepository.findById(agendaAtualizada.disciplina())
                .orElseThrow(() -> new RuntimeException("Disciplina in Agenda not found"));

        return this.agendaRepository.findById(id).map(agenda -> {
            agenda.setDisciplina(disciplina);
            agenda.setDiaSemana(agendaAtualizada.diaSemana());
            agenda.setHorarioInicial(agendaAtualizada.horarioInicial());
            agenda.setHorarioFinal(agendaAtualizada.horarioFinal());

            return this.agendaRepository.save(agenda);
        }).orElseGet(() -> {
            return this.createAgenda(agendaAtualizada);
        });
    }

    public Agenda getAgenda(String id) {
        return this.agendaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Disciplina in Agenda not found"));
    }

    public List<Agenda> listAgendas() {
        return this.agendaRepository.findAll();
    }

    public void deleteAgenda(String id) {
        this.agendaRepository.deleteById(id);
    }

}