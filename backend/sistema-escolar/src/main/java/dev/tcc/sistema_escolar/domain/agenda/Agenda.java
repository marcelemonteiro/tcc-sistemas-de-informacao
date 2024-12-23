package dev.tcc.sistema_escolar.domain.agenda;

import com.fasterxml.jackson.annotation.JsonIgnore;

import dev.tcc.sistema_escolar.domain.disciplina.Disciplina;
import dev.tcc.sistema_escolar.domain.turma.Turma;
import jakarta.persistence.Column;
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
@Table(name = "agendas")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Agenda {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @ManyToOne
    @JoinColumn(name = "disciplina_id", nullable = false)
    private Disciplina disciplina;

    @ManyToOne
    @JoinColumn(name = "turma_id", nullable = false)
    @JsonIgnore
    private Turma turma;

    @Column(name = "dia_semana")
    private String diaSemana;

    @Column(name = "horario_inicial")
    private String horarioInicial;

    @Column(name = "horario_final")
    private String horarioFinal;
}
