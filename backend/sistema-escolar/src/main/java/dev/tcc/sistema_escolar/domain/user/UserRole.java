package dev.tcc.sistema_escolar.domain.user;

public enum UserRole {
    ADMIN("admin"),
    PROFESSOR("prof"),
    ALUNO("aluno"),
    USUARIO("usuario");

    private String role;

    private UserRole(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }

}
