package dev.tcc.sistema_escolar.dto;

public record CreateAvisoDTO(String remetente, String destinatario, String titulo, String conteudo, String dataEnvio,
        String statusLeitura) {

}
