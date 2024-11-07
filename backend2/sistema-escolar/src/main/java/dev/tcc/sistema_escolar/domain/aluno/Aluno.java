package dev.tcc.sistema_escolar.domain.aluno;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private String nome;
    private String cpf;
    @Column(name = "data_nascimento")
    private String dataNascimento;
    private String matricula; // TODO: Adicionar chave estrangeira para tabela matriculas
    @Column(name = "serie_ano")
    private String serieAno;
    @Column(name = "turma_id")
    private String turmaId; // TODO: Adicionar chave estrangeira para tabela turmas
    private String endereco;
    private String email;
    private String telefone;
}
