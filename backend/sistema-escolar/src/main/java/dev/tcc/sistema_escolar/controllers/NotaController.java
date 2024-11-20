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

import dev.tcc.sistema_escolar.domain.nota.Nota;
import dev.tcc.sistema_escolar.dto.NotaDTO;
import dev.tcc.sistema_escolar.services.NotaService;

@RestController
@RequestMapping("/nota")
public class NotaController {
    @Autowired
    private NotaService notaService;

    @PostMapping
    public ResponseEntity<Nota> create(@RequestBody NotaDTO nota) {
        var novaNota = this.notaService.createNota(nota);
        return ResponseEntity.ok(novaNota);
    }

    @PutMapping("{id}")
    public ResponseEntity<Nota> update(@PathVariable("id") String id, @RequestBody NotaDTO notaAtualizada) {
        var nota = this.notaService.updateNote(id, notaAtualizada);
        return ResponseEntity.ok(nota);
    }

    @GetMapping("{id}")
    public ResponseEntity<Nota> get(@PathVariable("id") String id) {
        var nota = this.notaService.getNota(id);
        return ResponseEntity.ok(nota);
    }

    @GetMapping("/todos")
    public ResponseEntity<List<Nota>> listAll() {
        var notas = this.notaService.listNotas();
        return ResponseEntity.ok(notas);
    }

    @GetMapping("/todos/aluno/{alunoId}")
    public ResponseEntity<List<Nota>> listAllByAluno(@PathVariable("alunoId") String alunoId) {
        var notas = this.notaService.listNotasByAluno(alunoId);
        return ResponseEntity.ok(notas);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Nota> listAll(@PathVariable("id") String id) {
        this.notaService.deleteNota(id);
        return ResponseEntity.ok().build();
    }
}
