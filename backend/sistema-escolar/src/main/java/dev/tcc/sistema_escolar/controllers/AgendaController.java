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

import dev.tcc.sistema_escolar.domain.agenda.Agenda;
import dev.tcc.sistema_escolar.dto.AgendaDTO;
import dev.tcc.sistema_escolar.services.AgendaService;

@RestController
@RequestMapping("/agenda")
public class AgendaController {
    @Autowired
    private AgendaService agendaService;

    @PostMapping
    public ResponseEntity<Agenda> create(@RequestBody AgendaDTO agenda) {
        var novaAgenda = this.agendaService.createAgenda(agenda);
        return ResponseEntity.ok(novaAgenda);
    }

    @PutMapping("{id}")
    public ResponseEntity<Agenda> update(@PathVariable("id") String id, @RequestBody AgendaDTO agendaAtualizada) {
        var agenda = this.agendaService.updateAgenda(id, agendaAtualizada);
        return ResponseEntity.ok(agenda);
    }

    @GetMapping("{id}")
    public ResponseEntity<Agenda> get(@PathVariable("id") String id) {
        var agenda = this.agendaService.getAgenda(id);
        return ResponseEntity.ok(agenda);
    }

    @GetMapping("/todos")
    public ResponseEntity<List<Agenda>> listAll() {
        var agendas = this.agendaService.listAgendas();
        return ResponseEntity.ok(agendas);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Agenda> delete(@PathVariable("id") String id) {
        this.agendaService.deleteAgenda(id);
        return ResponseEntity.ok().build();
    }
}
