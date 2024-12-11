package dev.tcc.sistema_escolar.domain.disciplina;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import dev.tcc.sistema_escolar.domain.agenda.Agenda;
import dev.tcc.sistema_escolar.domain.professor.Professor;
import dev.tcc.sistema_escolar.domain.turma.Turma;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "disciplinas")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Disciplina {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String nome;
    @ManyToOne
    @JoinColumn(name = "turma_id", nullable = false)
    private Turma turma;
    @ManyToOne
    @JoinColumn(name = "professor_id", nullable = false)
    private Professor professor;
    @OneToMany(mappedBy = "disciplina", cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties({"disciplina", "turma"})
    private List<Agenda> agendas;
}
