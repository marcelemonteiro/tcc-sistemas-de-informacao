package dev.tcc.sistema_escolar.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.tcc.sistema_escolar.domain.turma.Turma;
import dev.tcc.sistema_escolar.services.TurmaService;

@RestController
@RequestMapping("/turma")
public class TurmaController {
    private TurmaService turmaService;

    public TurmaController(TurmaService turmaService) {
        this.turmaService = turmaService;
    }

    @PostMapping
    public ResponseEntity<Turma> createTurma(@RequestBody Turma turma) {
        var novaTurma = this.turmaService.create(turma);
        return ResponseEntity.ok(novaTurma);
    }

    @PutMapping("{id}")
    public ResponseEntity<Turma> updateTurma(@PathVariable("id") String id, @RequestBody Turma turma) {
        var turmaAtualizada = this.turmaService.update(id, turma);
        return ResponseEntity.ok(turmaAtualizada);
    }

    @GetMapping("{id}")
    public ResponseEntity<Turma> getTurma(@PathVariable("id") String id) {
        var turma = this.turmaService.get(id);
        return ResponseEntity.ok(turma);
    }

    @GetMapping("/todos")
    public ResponseEntity<List<Turma>> getAllTurmas() {
        var turmas = this.turmaService.listAll();
        return ResponseEntity.ok(turmas);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<List<Turma>> deleteTurma(@PathVariable("id") String id) {
        var turmasRestantes = this.turmaService.delete(id);
        return ResponseEntity.ok(turmasRestantes);
    }
}
