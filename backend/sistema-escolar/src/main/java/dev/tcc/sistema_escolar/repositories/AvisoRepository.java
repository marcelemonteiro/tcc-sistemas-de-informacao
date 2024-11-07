package dev.tcc.sistema_escolar.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.tcc.sistema_escolar.domain.aviso.Aviso;

public interface AvisoRepository extends JpaRepository<Aviso, String> {

}
