package dev.tcc.sistema_escolar.domain.aluno;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    @Enumerated(EnumType.STRING)
    private AlunoMatriculaStatus status;
}
