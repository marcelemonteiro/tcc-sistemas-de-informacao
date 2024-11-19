package dev.tcc.sistema_escolar.dto;

import dev.tcc.sistema_escolar.domain.aluno.AlunoMatricula;

public record CreateAlunoDTO(String usuario, String nome, String cpf, String dataNascimento,
        AlunoMatricula matricula,
        String serieAno, String turma, String email, String telefone) {

}
