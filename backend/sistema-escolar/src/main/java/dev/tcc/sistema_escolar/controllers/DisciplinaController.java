package dev.tcc.sistema_escolar.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.tcc.sistema_escolar.domain.disciplina.Disciplina;
import dev.tcc.sistema_escolar.dto.DisciplinaDTO;
import dev.tcc.sistema_escolar.services.DisciplinaService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/disciplina")
public class DisciplinaController {
    private DisciplinaService disciplinaService;

    public DisciplinaController(DisciplinaService disciplinaService) {
        this.disciplinaService = disciplinaService;
    }

    @PostMapping
    public ResponseEntity<Disciplina> createDisciplina(@RequestBody DisciplinaDTO disciplina) {
        var novaDisciplina = this.disciplinaService.create(disciplina);
        return ResponseEntity.ok(novaDisciplina);
    }

    @PutMapping("{id}")
    public ResponseEntity<Disciplina> updateDisciplina(@PathVariable("id") String id,
            @RequestBody DisciplinaDTO disciplina) {
        var disciplinaAtualizada = this.disciplinaService.update(id, disciplina);
        return ResponseEntity.ok(disciplinaAtualizada);
    }

    @GetMapping("{id}")
    public ResponseEntity<Disciplina> getDisciplina(@PathVariable("id") String id) {
        var disciplina = this.disciplinaService.get(id);
        return ResponseEntity.ok(disciplina);
    }

    @GetMapping("/todos")
    public ResponseEntity<List<Disciplina>> getAllDisciplinas() {
        var disciplinas = this.disciplinaService.listAll();
        return ResponseEntity.ok(disciplinas);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<List<Disciplina>> deleteDisciplina(@PathVariable("id") String id) {
        var disciplinasRestantes = this.disciplinaService.delete(id);
        return ResponseEntity.ok(disciplinasRestantes);
    }
}
