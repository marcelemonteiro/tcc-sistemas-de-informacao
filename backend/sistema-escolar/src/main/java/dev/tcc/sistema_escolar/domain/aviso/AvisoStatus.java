package dev.tcc.sistema_escolar.domain.aviso;

public enum AvisoStatus {
    LIDO,
    NAO_LIDO;

    public static boolean validar(String status) {
        try {
            return AvisoStatus.valueOf(status) != null;
        } catch (Exception e) {
            return false;
        }
    }
}
