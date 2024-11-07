package dev.tcc.sistema_escolar.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import dev.tcc.sistema_escolar.domain.aluno.Aluno;
import dev.tcc.sistema_escolar.domain.user.User;
import dev.tcc.sistema_escolar.dto.CreateAlunoDTO;
import dev.tcc.sistema_escolar.repositories.AlunoRepository;
import dev.tcc.sistema_escolar.repositories.UserRepository;

@Service
public class AlunoService {
    private AlunoRepository alunoRepository;
    private UserRepository userRepository;

    public AlunoService(AlunoRepository alunoRepository, UserRepository userRepository) {
        this.alunoRepository = alunoRepository;
        this.userRepository = userRepository;
    }

    public List<Aluno> create(CreateAlunoDTO aluno) {
        User usuario = this.userRepository.findById(aluno.usuario())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Aluno novoAluno = new Aluno();
        novoAluno.setUsuario(usuario);
        novoAluno.setNome(aluno.nome());
        novoAluno.setCpf(aluno.cpf());
        novoAluno.setDataNascimento(aluno.dataNascimento());
        novoAluno.setMatricula(aluno.matricula());
        novoAluno.setSerieAno(aluno.serieAno());
        novoAluno.setTurmaId(aluno.turmaId());
        novoAluno.setEndereco(aluno.endereco());
        novoAluno.setEmail(aluno.email());
        novoAluno.setTelefone(aluno.telefone());

        alunoRepository.save(novoAluno);
        return list();
    }

    public List<Aluno> list() {
        return alunoRepository.findAll();
    }

    public Aluno get(String id) {
        Optional<Aluno> alunoExistente = alunoRepository.findById(id);

        if (!alunoExistente.isPresent()) {
            throw new RuntimeException("Usuário não encontrado");
        }

        return alunoExistente.get();
    }

    public Aluno update(String id, Aluno alunoAtualizado) {
        Optional<Aluno> alunoExistente = alunoRepository.findById(id);

        if (alunoExistente.isPresent()) {
            Aluno aluno = alunoExistente.get();

            BeanUtils.copyProperties(alunoAtualizado, aluno, "id");

            Aluno alunoSalvo = alunoRepository.save(aluno);
            return alunoSalvo;
        } else {
            throw new RuntimeException("Usuário não encontrado");
        }
    }

    public List<Aluno> delete(String id) {
        alunoRepository.deleteById(id);
        return list();
    }
}
