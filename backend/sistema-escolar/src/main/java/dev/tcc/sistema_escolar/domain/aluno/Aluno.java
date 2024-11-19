package dev.tcc.sistema_escolar.domain.aluno;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import dev.tcc.sistema_escolar.domain.turma.Turma;
import dev.tcc.sistema_escolar.domain.user.User;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "alunos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private User usuario;

    private String nome;

    private String cpf;

    @Column(name = "data_nascimento")
    private String dataNascimento;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "numero_matricula", referencedColumnName = "id")
    private String matricula;

    @Column(name = "serie_ano")
    private String serieAno;

    @ManyToOne
    @JoinColumn(name = "turma_id")
    @JsonIgnoreProperties({ "alunos" })
    private Turma turma;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private AlunoEndereco endereco;

    private String email;

    private String telefone;
}
