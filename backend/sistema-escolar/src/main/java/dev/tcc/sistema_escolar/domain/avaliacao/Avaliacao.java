package dev.tcc.sistema_escolar.domain.avaliacao;

import com.fasterxml.jackson.annotation.JsonIgnore;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import dev.tcc.sistema_escolar.domain.disciplina.Disciplina;
import dev.tcc.sistema_escolar.domain.nota.Nota;
import dev.tcc.sistema_escolar.domain.professor.Professor;
import dev.tcc.sistema_escolar.domain.turma.Turma;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

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

    @ManyToOne
    @JoinColumn(name = "professor_id", nullable = false)
    @JsonIgnore
    private Professor professor;

    @OneToMany(mappedBy = "avaliacao")
    @JsonIgnoreProperties({ "avaliacao" })
    private List<Nota> notas;
}
