package dev.tcc.sistema_escolar.domain.turma;

import java.util.List;

import dev.tcc.sistema_escolar.domain.aluno.Aluno;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "turmas")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Turma {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String nome;
    @Column(name = "serie_ano")
    private String serieAno;
    private Turno turno;
    @OneToMany(mappedBy = "turma", cascade = { CascadeType.PERSIST, CascadeType.MERGE })
    private List<Aluno> alunos;
}
