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

import dev.tcc.sistema_escolar.domain.frequencia.Frequencia;
import dev.tcc.sistema_escolar.dto.FrequenciaDTO;
import dev.tcc.sistema_escolar.services.FrequenciaService;

@RestController
@RequestMapping("/frequencia")
public class FrequenciaController {
    @Autowired
    private FrequenciaService frequenciaService;

    @PostMapping
    public ResponseEntity<Frequencia> create(@RequestBody FrequenciaDTO frequencia) {
        var novaFrequencia = this.frequenciaService.createFrequencia(frequencia);
        return ResponseEntity.ok(novaFrequencia);
    }

    @PutMapping("{id}")
    public ResponseEntity<Frequencia> update(@PathVariable("id") String id,
            @RequestBody FrequenciaDTO frequenciaAtualizada) {
        var frequencia = this.frequenciaService.updateFrequencia(id, frequenciaAtualizada);
        return ResponseEntity.ok(frequencia);
    }

    @GetMapping("{id}")
    public ResponseEntity<Frequencia> get(@PathVariable("id") String id) {
        var frequencia = this.frequenciaService.getFrequencia(id);
        return ResponseEntity.ok(frequencia);
    }

    @GetMapping("/todos")
    public ResponseEntity<List<Frequencia>> listAll() {
        var frequencias = this.frequenciaService.listFrequencias();
        return ResponseEntity.ok(frequencias);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Frequencia> delete(@PathVariable("id") String id) {
        this.frequenciaService.deleteFrequencia(id);
        return ResponseEntity.ok().build();
    }
}
