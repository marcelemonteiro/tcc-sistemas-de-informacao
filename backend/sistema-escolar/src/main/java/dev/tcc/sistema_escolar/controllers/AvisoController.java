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

import dev.tcc.sistema_escolar.domain.aviso.Aviso;
import dev.tcc.sistema_escolar.dto.CreateAvisoDTO;
import dev.tcc.sistema_escolar.services.AvisoService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/aviso")
public class AvisoController {
    @Autowired
    private AvisoService avisoService;

    @GetMapping("/todos")
    ResponseEntity<List<Aviso>> listAvisos() {
        var avisos = avisoService.listAll();
        return ResponseEntity.ok(avisos);
    }

    @GetMapping("{id}")
    ResponseEntity<Aviso> getAviso(@PathVariable("id") String id) {
        var aviso = avisoService.get(id);
        if (aviso == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(aviso);
    }

    @PostMapping
    ResponseEntity<Aviso> createAviso(@RequestBody @Valid CreateAvisoDTO aviso) {
        var avisos = avisoService.create(aviso);
        return ResponseEntity.ok(avisos);
    }

    @PutMapping("{id}")
    ResponseEntity<Aviso> updateAviso(@PathVariable("id") String id, @RequestBody CreateAvisoDTO aviso) {
        var avisoAtualizado = avisoService.update(id, aviso);
        if (avisoAtualizado == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(avisoAtualizado);
    }

    @DeleteMapping("{id}")
    ResponseEntity<List<Aviso>> deleteAviso(@PathVariable("id") String id) {
        var aviso = avisoService.delete(id);
        return ResponseEntity.ok(aviso);
    }
}
