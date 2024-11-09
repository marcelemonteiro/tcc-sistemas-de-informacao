package dev.tcc.sistema_escolar.services;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.tcc.sistema_escolar.domain.aluno.Aluno;
import dev.tcc.sistema_escolar.domain.turma.Turma;
import dev.tcc.sistema_escolar.repositories.AlunoRepository;
import dev.tcc.sistema_escolar.repositories.TurmaRepository;

@Service
public class TurmaService {
    private TurmaRepository turmaRepository;
    private AlunoRepository alunoRepository;

    public TurmaService(TurmaRepository turmaRepository, AlunoRepository alunoRepository) {
        this.turmaRepository = turmaRepository;
        this.alunoRepository = alunoRepository;
    }

    public Turma create(Turma turma) {
        return this.turmaRepository.save(turma);
    }

    public Turma update(String id, Turma turmaAtualizada) {
        return this.turmaRepository.findById(id).map(turma -> {
            turma.setNome(turmaAtualizada.getNome());
            turma.setSerieAno(turmaAtualizada.getSerieAno());
            turma.setTurno(turmaAtualizada.getTurno());
            return this.turmaRepository.save(turma);
        }).orElseGet(() -> {
            return this.create(turmaAtualizada);
        });
    }

    public Turma get(String id) {
        return this.turmaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Turma not found"));
    }

    public List<Turma> listAll() {
        return this.turmaRepository.findAll();
    }

    public List<Turma> delete(String id) {
        Turma turma = this.turmaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Turma not found"));

        for (Aluno aluno : turma.getAlunos()) {
            aluno.setTurma(null);
        }
        alunoRepository.saveAll(turma.getAlunos());

        this.turmaRepository.deleteById(id);
        return this.listAll();
    }
}
