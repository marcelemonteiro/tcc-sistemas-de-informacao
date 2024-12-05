package dev.tcc.sistema_escolar.services;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.tcc.sistema_escolar.domain.avaliacao.Avaliacao;
import dev.tcc.sistema_escolar.domain.avaliacao.AvaliacaoStatus;
import dev.tcc.sistema_escolar.dto.AvaliacaoDTO;
import dev.tcc.sistema_escolar.repositories.AvaliacaoRepository;
import dev.tcc.sistema_escolar.repositories.DisciplinaRepository;
import dev.tcc.sistema_escolar.repositories.TurmaRepository;

@Service
public class AvaliacaoService {
    private AvaliacaoRepository avaliacaoRepository;
    private DisciplinaRepository disciplinaRepository;
    private TurmaRepository turmaRepository;

    public AvaliacaoService(AvaliacaoRepository avaliacaoRepository, DisciplinaRepository disciplinaRepository,
            TurmaRepository turmaRepository) {
        this.avaliacaoRepository = avaliacaoRepository;
        this.disciplinaRepository = disciplinaRepository;
        this.turmaRepository = turmaRepository;
    }

    public Avaliacao createAvaliacao(AvaliacaoDTO avaliacao) {
        var disciplina = this.disciplinaRepository.findById(avaliacao.disciplina())
                .orElseThrow(() -> new RuntimeException("Disciplina in Avaliacao not found"));

        var turma = this.turmaRepository.findById(avaliacao.turma())
                .orElseThrow(() -> new RuntimeException("Turma in Avaliacao not found"));

        AvaliacaoStatus status = AvaliacaoStatus.valueOf(avaliacao.status());

        Avaliacao novaAvaliacao = new Avaliacao();
        novaAvaliacao.setTitulo(avaliacao.titulo());
        novaAvaliacao.setDescricao(avaliacao.descricao());
        novaAvaliacao.setDataInicio(avaliacao.dataInicio());
        novaAvaliacao.setDataTermino(avaliacao.dataTermino());
        novaAvaliacao.setStatus(status);
        novaAvaliacao.setDisciplina(disciplina);
        novaAvaliacao.setTurma(turma);

        return this.avaliacaoRepository.save(novaAvaliacao);
    }

    public Avaliacao updateAvaliacao(String id, AvaliacaoDTO avaliacaoAtualizada) {
        var disciplina = this.disciplinaRepository.findById(avaliacaoAtualizada.disciplina())
                .orElseThrow(() -> new RuntimeException("Disciplina in Avaliacao not found"));

        var turma = this.turmaRepository.findById(avaliacaoAtualizada.turma())
                .orElseThrow(() -> new RuntimeException("Turma in Avaliacao not found"));

        AvaliacaoStatus status = AvaliacaoStatus.valueOf(avaliacaoAtualizada.status());

        return avaliacaoRepository.findById(id).map(avaliacao -> {
            avaliacao.setTitulo(avaliacaoAtualizada.titulo());
            avaliacao.setDescricao(avaliacaoAtualizada.descricao());
            avaliacao.setDataInicio(avaliacaoAtualizada.dataInicio());
            avaliacao.setDataTermino(avaliacaoAtualizada.dataTermino());
            avaliacao.setStatus(status);
            avaliacao.setDisciplina(disciplina);
            avaliacao.setTurma(turma);

            return this.avaliacaoRepository.save(avaliacao);
        }).orElseGet(() -> {
            return this.createAvaliacao(avaliacaoAtualizada);
        });
    }

    public Avaliacao getAvaliacao(String id) {
        return this.avaliacaoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Avaliacao not found"));
    }

    public List<Avaliacao> listAvaliacoes() {
        return this.avaliacaoRepository.findAll();
    }

    public List<Avaliacao> listAvaliacoesByTurma(String turmaId) {
        return this.avaliacaoRepository.findByTurmaId(turmaId);
    }

    public List<Avaliacao> listAvaliacoesByProfessor(String professorId) {
        return this.avaliacaoRepository.findByProfessorId(professorId);
    }

    public void deleteAvaliacao(String id) {
        this.avaliacaoRepository.deleteById(id);
    }
}
