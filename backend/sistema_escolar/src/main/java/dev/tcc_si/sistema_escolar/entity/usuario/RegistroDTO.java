package dev.tcc_si.sistema_escolar.entity.usuario;

public record RegistroDTO(String usuario, String senha, TipoUsuario tipoUsuario) {

    public String usuario() {
        return usuario;
    }

    public String senha() {
        return senha;
    }

    public TipoUsuario tipoUsuario() {
        return tipoUsuario;
    }

}
