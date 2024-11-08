package dev.tcc.sistema_escolar.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import dev.tcc.sistema_escolar.domain.professor.Professor;
import dev.tcc.sistema_escolar.domain.user.User;
import dev.tcc.sistema_escolar.dto.CreateProfDTO;
import dev.tcc.sistema_escolar.repositories.ProfessorRepository;
import dev.tcc.sistema_escolar.repositories.UserRepository;

@Service
public class ProfessorService {
    private ProfessorRepository professorRepository;
    private UserRepository userRepository;

    public ProfessorService(ProfessorRepository professorRepository, UserRepository userRepository) {
        this.professorRepository = professorRepository;
        this.userRepository = userRepository;
    }

    public Professor create(CreateProfDTO professor) {
        User usuario = this.userRepository.findById(professor.usuario())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Professor novoProf = new Professor();
        novoProf.setUsuario(usuario);
        novoProf.setNome(professor.nome());
        novoProf.setCpf(professor.cpf());
        novoProf.setDataNascimento(professor.dataNascimento());
        novoProf.setEmail(professor.email());
        novoProf.setTelefone(professor.telefone());

        return professorRepository.save(novoProf);
    }

    public List<Professor> list() {
        return professorRepository.findAll();
    }

    public Professor get(String id) {
        Optional<Professor> profExistente = professorRepository.findById(id);

        if (!profExistente.isPresent()) {
            throw new RuntimeException("Usuário não encontrado");
        }

        return profExistente.get();
    }

    public Professor update(String id, CreateProfDTO profAtualizado) {
        User usuario = this.userRepository.findById(profAtualizado.usuario())
                .orElseThrow(() -> new RuntimeException("User not found"));

        return professorRepository.findById(id).map(professor -> {
            professor.setUsuario(usuario);
            professor.setNome(profAtualizado.nome());
            professor.setCpf(profAtualizado.cpf());
            professor.setDataNascimento(profAtualizado.dataNascimento());
            professor.setEmail(profAtualizado.email());
            professor.setTelefone(profAtualizado.telefone());
            return professorRepository.save(professor);
        }).orElseGet(() -> {
            return this.create(profAtualizado);
        });
    }

    public List<Professor> delete(String id) {
        professorRepository.deleteById(id);
        return list();
    }
}
