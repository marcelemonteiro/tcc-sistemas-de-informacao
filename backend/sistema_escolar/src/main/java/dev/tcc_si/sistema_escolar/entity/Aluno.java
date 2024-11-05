package dev.tcc_si.sistema_escolar.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "tb_alunos")
public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @NotBlank
    private String nome;
    @NotBlank
    private String cpf;
    @NotBlank
    @Column(name = "data_nascimento")
    private String dataNascimento;
    @NotBlank
    private String matricula; // TODO: Adicionar chave estrangeira para tabela matriculas
    @NotBlank
    @Column(name = "serie_ano")
    private String serieAno;
    @NotBlank
    @Column(name = "turma_id")
    private String turmaId; // TODO: Adicionar chave estrangeira para tabela turmas
    private String endereco;
    private String email;
    private String telefone;

    public Aluno() {
    }

    public Aluno(@NotBlank String nome, @NotBlank String cpf, @NotBlank String dataNascimento,
            @NotBlank String matricula, @NotBlank String serieAno, @NotBlank String turmaId, String endereco,
            String email, String telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.matricula = matricula;
        this.serieAno = serieAno;
        this.turmaId = turmaId;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public String getSerieAno() {
        return serieAno;
    }

    public void setSerieAno(String serieAno) {
        this.serieAno = serieAno;
    }

    public String getTurmaId() {
        return turmaId;
    }

    public void setTurmaId(String turmaId) {
        this.turmaId = turmaId;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

}
