package dev.tcc.sistema_escolar.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.tcc.sistema_escolar.domain.avaliacao.Avaliacao;
import dev.tcc.sistema_escolar.dto.AvaliacaoDTO;
import dev.tcc.sistema_escolar.services.AvaliacaoService;

@RestController
@RequestMapping("/avaliacao")
public class AvaliacaoController {
    @Autowired
    AvaliacaoService avaliacaoService;

    @PostMapping
    public ResponseEntity<Avaliacao> create(@RequestBody AvaliacaoDTO avaliacao) {
        var novaAvaliacao = this.avaliacaoService.createAvaliacao(avaliacao);
        return ResponseEntity.ok(novaAvaliacao);
    }

    @PutMapping("{id}")
    public ResponseEntity<Avaliacao> update(@PathVariable("id") String id,
            @RequestBody AvaliacaoDTO avaliacaoAtualizada) {
        var avaliacao = this.avaliacaoService.updateAvaliacao(id, avaliacaoAtualizada);
        return ResponseEntity.ok(avaliacao);
    }

    @GetMapping("{id}")
    public ResponseEntity<Avaliacao> get(@PathVariable("id") String id) {
        var avaliacao = this.avaliacaoService.getAvaliacao(id);
        return ResponseEntity.ok(avaliacao);
    }

    @GetMapping("/todos")
    public ResponseEntity<List<Avaliacao>> listAll() {
        var avaliacoes = this.avaliacaoService.listAvaliacoes();
        return ResponseEntity.ok(avaliacoes);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Avaliacao> delete(@PathVariable("id") String id) {
        this.avaliacaoService.deleteAvaliacao(id);
        return ResponseEntity.ok().build();
    }
}
