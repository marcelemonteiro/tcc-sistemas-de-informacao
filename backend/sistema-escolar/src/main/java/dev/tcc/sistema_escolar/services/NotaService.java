package dev.tcc.sistema_escolar.services;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.tcc.sistema_escolar.domain.nota.Nota;
import dev.tcc.sistema_escolar.dto.NotaDTO;
import dev.tcc.sistema_escolar.repositories.AlunoRepository;
import dev.tcc.sistema_escolar.repositories.AvaliacaoRepository;
import dev.tcc.sistema_escolar.repositories.NotaRepository;

@Service
public class NotaService {
    private NotaRepository notaRepository;
    private AvaliacaoRepository avaliacaoRepository;
    private AlunoRepository alunoRepository;

    public NotaService(NotaRepository notaRepository, AvaliacaoRepository avaliacaoRepository,
            AlunoRepository alunoRepository) {
        this.notaRepository = notaRepository;
        this.avaliacaoRepository = avaliacaoRepository;
        this.alunoRepository = alunoRepository;
    }

    public Nota createNota(NotaDTO nota) {
        var avaliacao = this.avaliacaoRepository.findById(nota.avaliacao())
                .orElseThrow(() -> new RuntimeException("Avaliacao in Nota not found"));

        var aluno = this.alunoRepository.findById(nota.aluno())
                .orElseThrow(() -> new RuntimeException("Aluno in Nota not found"));

        Nota novaNota = new Nota();
        novaNota.setAvaliacao(avaliacao);
        novaNota.setAluno(aluno);
        novaNota.setResultado(nota.resultado());

        return this.notaRepository.save(novaNota);
    }

    public Nota updateNote(String id, NotaDTO notaAtualizada) {
        var avaliacao = this.avaliacaoRepository.findById(notaAtualizada.avaliacao())
                .orElseThrow(() -> new RuntimeException("Avaliacao in Nota not found"));

        var aluno = this.alunoRepository.findById(notaAtualizada.aluno())
                .orElseThrow(() -> new RuntimeException("Aluno in Nota not found"));

        return this.notaRepository.findById(id).map(nota -> {
            nota.setAvaliacao(avaliacao);
            nota.setAluno(aluno);
            nota.setResultado(notaAtualizada.resultado());

            return this.notaRepository.save(nota);
        }).orElseGet(() -> {
            return this.createNota(notaAtualizada);
        });
    }

    public Nota getNota(String id) {
        return this.notaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Nota not found"));
    }

    public List<Nota> listNotas() {
        return this.notaRepository.findAll();
    }

    public List<Nota> listNotasByAluno(String alunoId) {
        return this.notaRepository.findByAlunoId(alunoId);
    }

    public void deleteNota(String id) {
        this.notaRepository.deleteById(id);
    }
}
