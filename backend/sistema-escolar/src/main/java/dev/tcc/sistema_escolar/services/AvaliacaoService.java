package dev.tcc.sistema_escolar.services;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.tcc.sistema_escolar.domain.avaliacao.Avaliacao;
import dev.tcc.sistema_escolar.repositories.AvaliacaoRepository;

@Service
public class AvaliacaoService {
    private AvaliacaoRepository avaliacaoRepository;

    public AvaliacaoService(AvaliacaoRepository avaliacaoRepository) {
        this.avaliacaoRepository = avaliacaoRepository;
    }

    public Avaliacao createAvaliacao(Avaliacao avaliacao) {
        return this.avaliacaoRepository.save(avaliacao);
    }

    public Avaliacao updateAvaliacao(String id, Avaliacao avaliacaoAtualizada) {
        return avaliacaoRepository.findById(id).map(avaliacao -> {
            avaliacao.setTitulo(avaliacaoAtualizada.getTitulo());
            avaliacao.setDescricao(avaliacaoAtualizada.getDescricao());
            avaliacao.setDataInicio(avaliacaoAtualizada.getDataInicio());
            avaliacao.setDataTermino(avaliacaoAtualizada.getDataTermino());

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
