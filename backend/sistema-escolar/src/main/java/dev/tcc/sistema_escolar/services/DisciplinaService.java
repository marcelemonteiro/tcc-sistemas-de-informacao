package dev.tcc.sistema_escolar.services;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.tcc.sistema_escolar.domain.disciplina.Disciplina;
import dev.tcc.sistema_escolar.domain.professor.Professor;
import dev.tcc.sistema_escolar.domain.turma.Turma;
import dev.tcc.sistema_escolar.dto.DisciplinaDTO;
import dev.tcc.sistema_escolar.repositories.DisciplinaRepository;
import dev.tcc.sistema_escolar.repositories.ProfessorRepository;
import dev.tcc.sistema_escolar.repositories.TurmaRepository;

@Service
public class DisciplinaService {
    private DisciplinaRepository disciplinaRepository;
    public TurmaRepository turmaRepository;
    public ProfessorRepository professorRepository;

    public DisciplinaService(DisciplinaRepository disciplinaRepository, TurmaRepository turmaRepository,
            ProfessorRepository professorRepository) {
        this.disciplinaRepository = disciplinaRepository;
        this.turmaRepository = turmaRepository;
        this.professorRepository = professorRepository;
    }

    public Disciplina create(DisciplinaDTO disciplina) {
        Turma turma = this.turmaRepository.findById(disciplina.turma())
                .orElseThrow(() -> new RuntimeException("Turma not found"));
        Professor professor = this.professorRepository.findById(disciplina.professor())
                .orElseThrow(() -> new RuntimeException("Professor not found"));

        Disciplina novaDisciplina = new Disciplina();
        novaDisciplina.setNome(disciplina.nome());
        novaDisciplina.setTurma(turma);
        novaDisciplina.setProfessor(professor);

        return this.disciplinaRepository.save(novaDisciplina);
    }

    public Disciplina update(String id, DisciplinaDTO disciplinaAtualizada) {
        Turma turma = this.turmaRepository.findById(disciplinaAtualizada.turma())
                .orElseThrow(() -> new RuntimeException("Turma not found"));
        Professor professor = this.professorRepository.findById(disciplinaAtualizada.professor())
                .orElseThrow(() -> new RuntimeException("Professor not found"));

        return this.disciplinaRepository.findById(id).map(disciplina -> {
            disciplina.setNome(disciplinaAtualizada.nome());
            disciplina.setTurma(turma);
            disciplina.setProfessor(professor);
            return this.disciplinaRepository.save(disciplina);
        }).orElseGet(() -> {
            return this.create(disciplinaAtualizada);
        });
    }

    public Disciplina get(String id) {
        return this.disciplinaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Disciplina not found"));
    }

    public List<Disciplina> listAll() {
        return disciplinaRepository.findAll();
    }

    public List<Disciplina> listAllByTurma(String turmaId) {
        return disciplinaRepository.findByTurmaId(turmaId);
    }

    public List<Disciplina> delete(String id) {
        this.disciplinaRepository.deleteById(id);
        return this.listAll();
    }

}
