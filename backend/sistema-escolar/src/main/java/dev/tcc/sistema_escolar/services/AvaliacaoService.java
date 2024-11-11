package dev.tcc.sistema_escolar.services;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.tcc.sistema_escolar.domain.avaliacao.Avaliacao;
import dev.tcc.sistema_escolar.dto.AvaliacaoDTO;
import dev.tcc.sistema_escolar.repositories.AvaliacaoRepository;
import dev.tcc.sistema_escolar.repositories.DisciplinaRepository;

@Service
public class AvaliacaoService {
    private AvaliacaoRepository avaliacaoRepository;
    private DisciplinaRepository disciplinaRepository;

    public AvaliacaoService(AvaliacaoRepository avaliacaoRepository, DisciplinaRepository disciplinaRepository) {
        this.avaliacaoRepository = avaliacaoRepository;
        this.disciplinaRepository = disciplinaRepository;
    }

    public Avaliacao createAvaliacao(AvaliacaoDTO avaliacao) {
        var disciplina = this.disciplinaRepository.findById(avaliacao.disciplina())
                .orElseThrow(() -> new RuntimeException("Disciplina in Avaliacao not found"));

        Avaliacao novaAvaliacao = new Avaliacao();
        novaAvaliacao.setTitulo(avaliacao.titulo());
        novaAvaliacao.setDescricao(avaliacao.descricao());
        novaAvaliacao.setDataInicio(avaliacao.dataInicio());
        novaAvaliacao.setDataTermino(avaliacao.dataTermino());
        novaAvaliacao.setDisciplina(disciplina);

        return this.avaliacaoRepository.save(novaAvaliacao);
    }

    public Avaliacao updateAvaliacao(String id, AvaliacaoDTO avaliacaoAtualizada) {
        var disciplina = this.disciplinaRepository.findById(avaliacaoAtualizada.disciplina())
                .orElseThrow(() -> new RuntimeException("Disciplina in Avaliacao not found"));

        return avaliacaoRepository.findById(id).map(avaliacao -> {
            avaliacao.setTitulo(avaliacaoAtualizada.titulo());
            avaliacao.setDescricao(avaliacaoAtualizada.descricao());
            avaliacao.setDataInicio(avaliacaoAtualizada.dataInicio());
            avaliacao.setDataTermino(avaliacaoAtualizada.dataTermino());
            avaliacao.setDisciplina(disciplina);

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

    public void deleteAvaliacao(String id) {
        this.avaliacaoRepository.deleteById(id);
    }
}
