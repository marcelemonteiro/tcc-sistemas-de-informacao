package dev.tcc.sistema_escolar.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.tcc.sistema_escolar.domain.aluno.AlunoEndereco;
import dev.tcc.sistema_escolar.services.AlunoService;

@RestController
@RequestMapping("/aluno/{alunoId}/endereco")
public class AlunoEnderecoController {
    @Autowired
    private AlunoService alunoService;

    @PostMapping
    public ResponseEntity<AlunoEndereco> adicionarEndereco(@PathVariable("alunoId") String alunoId,
            @RequestBody AlunoEndereco endereco) {
        AlunoEndereco novoEndereco = alunoService.salvarEndereco(alunoId, endereco);
        return ResponseEntity.ok(novoEndereco);
    }
}
