package dev.tcc.sistema_escolar.domain.aviso;

public enum AvisoStatus {
    LIDO("lido"),
    NAO_LIDO("nao_lido");

    private String status;

    private AvisoStatus(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }
}
