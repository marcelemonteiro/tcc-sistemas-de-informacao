package dev.tcc.sistema_escolar.dto;

public record AvaliacaoDTO(String titulo, String descricao, String dataInicio, String dataTermino,
                String status, String disciplina, String turma, String professor) {

}
