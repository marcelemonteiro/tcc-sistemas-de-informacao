package dev.tcc.sistema_escolar.domain.disciplina;

import dev.tcc.sistema_escolar.domain.professor.Professor;
import dev.tcc.sistema_escolar.domain.turma.Turma;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
}
