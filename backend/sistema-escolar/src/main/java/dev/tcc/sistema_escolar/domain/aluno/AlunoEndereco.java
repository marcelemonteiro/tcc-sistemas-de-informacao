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
@Table(name = "alunos_endereco")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AlunoEndereco {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String cep;
    private String numero;
    private String logradouro;
    private String bairro;
    private String cidade;
    private String estado;
    private String complemento;

    @OneToOne(mappedBy = "endereco")
    @JsonIgnore
    private Aluno aluno;

}
