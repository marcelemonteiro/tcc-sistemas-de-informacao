package dev.tcc_si.sistema_escolar.entity.usuario;

public enum TipoUsuario {
    ADMIN("admin"),
    PROF("professor"),
    USUARIO("usuario");

    private String tipo;

    TipoUsuario(String tipo) {
        this.tipo = tipo;
    }

    public String getTipo() {
        return tipo;
    }
}
