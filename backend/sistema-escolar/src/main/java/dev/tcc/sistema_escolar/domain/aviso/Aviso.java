package dev.tcc.sistema_escolar.domain.aviso;

import dev.tcc.sistema_escolar.domain.user.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "avisos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Aviso {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @ManyToOne
    @JoinColumn(name = "remetente_id", nullable = false)
    private User remetente;
    @ManyToOne
    @JoinColumn(name = "destinatario_id", nullable = false)
    private User destinatario;
    private String titulo;
    private String conteudo;
    @Column(name = "data_envio")
    private String dataEnvio;
    @Column(name = "status_leitura")
    private AvisoStatus statusLeitura;
}
