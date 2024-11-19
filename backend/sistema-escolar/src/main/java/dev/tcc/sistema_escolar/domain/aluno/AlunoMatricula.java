package dev.tcc.sistema_escolar.domain.aluno;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "matriculas")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AlunoMatricula {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String data;

    private AlunoMatriculaStatus status;

    @OneToOne(mappedBy = "matricula")
    @JsonIgnore
    private Aluno aluno;
}
