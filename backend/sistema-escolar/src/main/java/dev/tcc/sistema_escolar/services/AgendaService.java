package dev.tcc.sistema_escolar.services;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.tcc.sistema_escolar.domain.agenda.Agenda;
import dev.tcc.sistema_escolar.dto.AgendaDTO;
import dev.tcc.sistema_escolar.repositories.AgendaRepository;
import dev.tcc.sistema_escolar.repositories.DisciplinaRepository;
import dev.tcc.sistema_escolar.repositories.TurmaRepository;

@Service
public class AgendaService {
    private AgendaRepository agendaRepository;
    private DisciplinaRepository disciplinaRepository;
    private TurmaRepository turmaRepository;

    public AgendaService(AgendaRepository agendaRepository, DisciplinaRepository disciplinaRepository,
            TurmaRepository turmaRepository) {
        this.agendaRepository = agendaRepository;
        this.disciplinaRepository = disciplinaRepository;
        this.turmaRepository = turmaRepository;
    }

    public Agenda createAgenda(AgendaDTO agenda) {
        var disciplina = this.disciplinaRepository.findById(agenda.disciplina())
                .orElseThrow(() -> new RuntimeException("Disciplina in Agenda not found"));

        var turma = this.turmaRepository.findById(agenda.turma())
                .orElseThrow(() -> new RuntimeException("Turma in Agenda not found"));

        Agenda novaAgenda = new Agenda();
        novaAgenda.setDisciplina(disciplina);
        novaAgenda.setTurma(turma);
        novaAgenda.setDiaSemana(agenda.diaSemana());
        novaAgenda.setHorarioInicial(agenda.horarioInicial());
        novaAgenda.setHorarioFinal(agenda.horarioFinal());

        return this.agendaRepository.save(novaAgenda);
    }

    public Agenda updateAgenda(String id, AgendaDTO agendaAtualizada) {
        var disciplina = this.disciplinaRepository.findById(agendaAtualizada.disciplina())
                .orElseThrow(() -> new RuntimeException("Disciplina in Agenda not found"));

        var turma = this.turmaRepository.findById(agendaAtualizada.turma())
                .orElseThrow(() -> new RuntimeException("Turma in Agenda not found"));

        return this.agendaRepository.findById(id).map(agenda -> {
            agenda.setDisciplina(disciplina);
            agenda.setTurma(turma);
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
        // TODO: Ordenar por horário
        return this.agendaRepository.findAll();
    }

    public List<Agenda> listAgendasByTurma(String turmaId) {
        // TODO: Ordenar por horário
        return this.agendaRepository.findAllByTurmaId(turmaId);
    }

    public void deleteAgenda(String id) {
        this.agendaRepository.deleteById(id);
    }

}
