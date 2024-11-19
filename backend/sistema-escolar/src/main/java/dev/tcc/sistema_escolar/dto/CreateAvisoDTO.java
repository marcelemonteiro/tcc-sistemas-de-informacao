package dev.tcc.sistema_escolar.dto;

public record CreateAvisoDTO(String professor, String aluno, String titulo, String conteudo, String dataEnvio,
                String statusLeitura) {

}
