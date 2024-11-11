package dev.tcc.sistema_escolar.services;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.tcc.sistema_escolar.domain.frequencia.Frequencia;
import dev.tcc.sistema_escolar.dto.FrequenciaDTO;
import dev.tcc.sistema_escolar.repositories.AlunoRepository;
import dev.tcc.sistema_escolar.repositories.DisciplinaRepository;
import dev.tcc.sistema_escolar.repositories.FrequenciaRepository;

@Service
public class FrequenciaService {
    private FrequenciaRepository frequenciaRepository;
    private DisciplinaRepository disciplinaRepository;
    private AlunoRepository alunoRepository;

    public FrequenciaService(FrequenciaRepository frequenciaRepository, DisciplinaRepository disciplinaRepository,
            AlunoRepository alunoRepository) {
        this.frequenciaRepository = frequenciaRepository;
        this.disciplinaRepository = disciplinaRepository;
        this.alunoRepository = alunoRepository;
    }

    public Frequencia createFrequencia(FrequenciaDTO frequencia) {
        var disciplina = this.disciplinaRepository.findById(frequencia.disciplina())
                .orElseThrow(() -> new RuntimeException("Disciplina in Frequencia not found"));

        var aluno = this.alunoRepository.findById(frequencia.aluno())
                .orElseThrow(() -> new RuntimeException("Aluno in Frequencia not found"));

        Frequencia novaFrequencia = new Frequencia();
        novaFrequencia.setDisciplina(disciplina);
        novaFrequencia.setAluno(aluno);
        novaFrequencia.setPresente(frequencia.presente());
        novaFrequencia.setData(frequencia.data());
        novaFrequencia.setHorario(frequencia.horario());

        return this.frequenciaRepository.save(novaFrequencia);
    }

    public Frequencia updateFrequencia(String id, FrequenciaDTO frequenciaAtualizada) {
        var disciplina = this.disciplinaRepository.findById(frequenciaAtualizada.disciplina())
                .orElseThrow(() -> new RuntimeException("Disciplina in Frequencia not found"));

        var aluno = this.alunoRepository.findById(frequenciaAtualizada.aluno())
                .orElseThrow(() -> new RuntimeException("Aluno in Frequencia not found"));

        return this.frequenciaRepository.findById(id).map(frequencia -> {
            frequencia.setDisciplina(disciplina);
            frequencia.setAluno(aluno);
            frequencia.setPresente(frequenciaAtualizada.presente());
            frequencia.setData(frequenciaAtualizada.data());
            frequencia.setHorario(frequenciaAtualizada.horario());
            return this.frequenciaRepository.save(frequencia);
        }).orElseGet(() -> {
            return this.createFrequencia(frequenciaAtualizada);
        });
    }

    public Frequencia getFrequencia(String id) {
        return this.frequenciaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Frequencia not found"));
    }

    public List<Frequencia> listFrequencias() {
        return this.frequenciaRepository.findAll();
    }

    public void deleteFrequencia(String id) {
        this.frequenciaRepository.deleteById(id);
    }
}
