package dev.tcc.sistema_escolar.domain.professor;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import dev.tcc.sistema_escolar.domain.disciplina.Disciplina;
import dev.tcc.sistema_escolar.domain.user.User;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "professores")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Professor {
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

    // TODO: retirar, já tem em user
    private String email;

    private String telefone;

    @OneToMany(mappedBy = "professor", cascade = { CascadeType.PERSIST,
            CascadeType.MERGE })
    @JsonIgnoreProperties("professor")
    private List<Disciplina> disciplinas;

}
