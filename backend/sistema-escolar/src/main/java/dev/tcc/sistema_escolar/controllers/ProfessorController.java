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

import dev.tcc.sistema_escolar.domain.professor.Professor;
import dev.tcc.sistema_escolar.dto.CreateProfDTO;
import dev.tcc.sistema_escolar.services.ProfessorService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/professor")
public class ProfessorController {
    @Autowired
    private ProfessorService professorService;

    @GetMapping("/todos")
    ResponseEntity<List<Professor>> listProfessores() {
        var professores = professorService.list();
        return ResponseEntity.ok(professores);
    }

    @GetMapping("{id}")
    ResponseEntity<Professor> getProfessor(@PathVariable("id") String id) {
        var professor = professorService.get(id);
        if (professor == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(professor);
    }

    @PostMapping
    ResponseEntity<Professor> createProfessor(@RequestBody @Valid CreateProfDTO professor) {
        var professores = professorService.create(professor);
        return ResponseEntity.ok(professores);
    }

    @PutMapping("{id}")
    ResponseEntity<Professor> updateProfessor(@PathVariable("id") String id, @RequestBody CreateProfDTO professor) {
        var professorSalvo = professorService.update(id, professor);
        if (professorSalvo == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(professorSalvo);
    }

    @DeleteMapping("{id}")
    ResponseEntity<List<Professor>> deleteProfessor(@PathVariable("id") String id) {
        var professores = professorService.delete(id);
        return ResponseEntity.ok(professores);
    }
}
