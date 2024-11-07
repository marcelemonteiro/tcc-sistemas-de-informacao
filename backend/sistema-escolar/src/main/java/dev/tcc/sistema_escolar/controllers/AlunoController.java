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

import dev.tcc.sistema_escolar.domain.aluno.Aluno;
import dev.tcc.sistema_escolar.dto.CreateAlunoDTO;
import dev.tcc.sistema_escolar.services.AlunoService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/aluno")
public class AlunoController {
    @Autowired
    private AlunoService alunoService;

    @GetMapping("/todos")
    ResponseEntity<List<Aluno>> listAlunos() {
        var alunos = alunoService.list();
        return ResponseEntity.ok(alunos);
    }

    @GetMapping("{id}")
    ResponseEntity<Aluno> getAluno(@PathVariable("id") String id) {
        var aluno = alunoService.get(id);
        if (aluno == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(aluno);
    }

    @PostMapping
    ResponseEntity<List<Aluno>> createAluno(@RequestBody @Valid CreateAlunoDTO aluno) {
        var alunos = alunoService.create(aluno);
        return ResponseEntity.ok(alunos);
    }

    @PutMapping("{id}")
    ResponseEntity<Aluno> updateAluno(@PathVariable("id") String id, @RequestBody Aluno aluno) {
        var alunoSalvo = alunoService.update(id, aluno);
        if (alunoSalvo == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(alunoSalvo);
    }

    @DeleteMapping("{id}")
    ResponseEntity<List<Aluno>> deleteAluno(@PathVariable("id") String id) {
        var alunos = alunoService.delete(id);
        return ResponseEntity.ok(alunos);
    }
}
