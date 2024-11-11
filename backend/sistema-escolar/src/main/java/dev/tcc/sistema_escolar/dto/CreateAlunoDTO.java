package dev.tcc.sistema_escolar.dto;

public record CreateAlunoDTO(String usuario, String nome, String cpf, String dataNascimento, String matricula,
                String serieAno, String turma, String email, String telefone) {

}
