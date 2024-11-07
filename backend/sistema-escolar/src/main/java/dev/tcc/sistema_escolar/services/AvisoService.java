package dev.tcc.sistema_escolar.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import dev.tcc.sistema_escolar.domain.aviso.Aviso;
import dev.tcc.sistema_escolar.domain.user.User;
import dev.tcc.sistema_escolar.dto.CreateAvisoDTO;
import dev.tcc.sistema_escolar.repositories.AvisoRepository;
import dev.tcc.sistema_escolar.repositories.UserRepository;

@Service
public class AvisoService {
    private AvisoRepository avisoRepository;
    private UserRepository userRepository;

    public AvisoService(AvisoRepository avisoRepository, UserRepository userRepository) {
        this.avisoRepository = avisoRepository;
        this.userRepository = userRepository;
    }

    public List<Aviso> create(CreateAvisoDTO aviso) {
        User remetente = this.userRepository.findById(aviso.remetente())
                .orElseThrow(() -> new RuntimeException("Remetente not found"));

        User destinatario = this.userRepository.findById(aviso.destinatario())
                .orElseThrow(() -> new RuntimeException("Destinatario not found"));

        Aviso novoAviso = new Aviso();
        novoAviso.setRemetente(remetente);
        novoAviso.setDestinatario(destinatario);
        novoAviso.setTitulo(aviso.titulo());
        novoAviso.setConteudo(aviso.conteudo());
        novoAviso.setConteudo(aviso.dataEnvio());
        novoAviso.setConteudo(aviso.statusLeitura());

        avisoRepository.save(novoAviso);

        return listAll();
    }

    public List<Aviso> listAll() {
        // TODO: Ordenar pela data de envio
        return avisoRepository.findAll();
    }

    public Aviso get(String id) {
        Optional<Aviso> aviso = avisoRepository.findById(id);

        if (!aviso.isPresent()) {
            throw new RuntimeException("Aviso não encontrado");
        }

        return aviso.get();
    }

    public Aviso update(String id, Aviso avisoAtualizado) {
        Optional<Aviso> aviso = avisoRepository.findById(id);

        if (!aviso.isPresent()) {
            throw new RuntimeException("Aviso não encontrado");
        }

        Aviso novoAviso = aviso.get();

        BeanUtils.copyProperties(avisoAtualizado, novoAviso, "id");

        Aviso avisoSalvo = avisoRepository.save(novoAviso);
        return avisoSalvo;
    }

    public List<Aviso> delete(String id) {
        avisoRepository.deleteById(id);
        return listAll();
    }
}
