package dev.tcc.sistema_escolar.domain.avaliacao;

import com.fasterxml.jackson.annotation.JsonIgnore;

import dev.tcc.sistema_escolar.domain.disciplina.Disciplina;
import dev.tcc.sistema_escolar.domain.turma.Turma;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "avaliacoes")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Avaliacao {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String titulo;
    private String descricao;

    @Column(name = "data_inicio")
    private String dataInicio;

    @Column(name = "data_termino")
    private String dataTermino;

    @Enumerated(EnumType.STRING)
    private AvaliacaoStatus status;

    @ManyToOne
    @JoinColumn(name = "disciplina_id", nullable = false)
    private Disciplina disciplina;

    @ManyToOne
    @JoinColumn(name = "turma_id", nullable = false)
    @JsonIgnore
    private Turma turma;
}
