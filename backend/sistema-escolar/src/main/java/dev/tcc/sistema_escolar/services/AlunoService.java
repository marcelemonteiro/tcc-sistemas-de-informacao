package dev.tcc.sistema_escolar.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import dev.tcc.sistema_escolar.domain.aluno.Aluno;
import dev.tcc.sistema_escolar.domain.aluno.AlunoEndereco;
import dev.tcc.sistema_escolar.domain.turma.Turma;
import dev.tcc.sistema_escolar.domain.user.User;
import dev.tcc.sistema_escolar.dto.CreateAlunoDTO;
import dev.tcc.sistema_escolar.repositories.AlunoEnderecoRepository;
import dev.tcc.sistema_escolar.repositories.AlunoRepository;
import dev.tcc.sistema_escolar.repositories.TurmaRepository;
import dev.tcc.sistema_escolar.repositories.UserRepository;

@Service
public class AlunoService {
    private AlunoRepository alunoRepository;
    private AlunoEnderecoRepository alunoEnderecoRepository;
    private UserRepository userRepository;
    private TurmaRepository turmaRepository;

    public AlunoService(AlunoRepository alunoRepository, AlunoEnderecoRepository alunoEnderecoRepository,
            UserRepository userRepository,
            TurmaRepository turmaRepository) {
        this.alunoRepository = alunoRepository;
        this.alunoEnderecoRepository = alunoEnderecoRepository;
        this.userRepository = userRepository;
        this.turmaRepository = turmaRepository;
    }

    public Aluno create(CreateAlunoDTO aluno) {
        User usuario = this.userRepository.findById(aluno.usuario())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Turma turma = this.turmaRepository.findById(aluno.turma())
                .orElseThrow(() -> new RuntimeException("Turma in user not found"));

        Aluno novoAluno = new Aluno();
        novoAluno.setUsuario(usuario);
        novoAluno.setNome(aluno.nome());
        novoAluno.setCpf(aluno.cpf());
        novoAluno.setDataNascimento(aluno.dataNascimento());
        novoAluno.setMatricula(aluno.matricula());
        novoAluno.setSerieAno(aluno.serieAno());
        novoAluno.setTurma(turma);
        novoAluno.setEmail(aluno.email());
        novoAluno.setTelefone(aluno.telefone());

        return alunoRepository.save(novoAluno);
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

    public Aluno update(String id, CreateAlunoDTO alunoAtualizado) {
        User usuario = this.userRepository.findById(alunoAtualizado.usuario())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Turma turma = this.turmaRepository.findById(alunoAtualizado.turma())
                .orElseThrow(() -> new RuntimeException("Turma in user not found"));

        return alunoRepository.findById(id).map(aluno -> {
            aluno.setUsuario(usuario);
            aluno.setNome(alunoAtualizado.nome());
            aluno.setCpf(alunoAtualizado.cpf());
            aluno.setDataNascimento(alunoAtualizado.dataNascimento());
            aluno.setMatricula(alunoAtualizado.matricula());
            aluno.setSerieAno(alunoAtualizado.serieAno());
            aluno.setTurma(turma);
            aluno.setEmail(alunoAtualizado.email());
            aluno.setTelefone(alunoAtualizado.telefone());
            return alunoRepository.save(aluno);
        }).orElseGet(() -> {
            return this.create(alunoAtualizado);
        });
    }

    public List<Aluno> delete(String id) {
        alunoRepository.deleteById(id);
        return list();
    }

    public AlunoEndereco salvarEndereco(String alunoId, AlunoEndereco endereco) {
        Aluno aluno = this.alunoRepository.findById(alunoId)
                .orElseThrow(() -> new RuntimeException("Aluno in AlunoEndereco not found"));
        aluno.setEndereco(endereco);
        endereco.setAluno(aluno);
        alunoRepository.save(aluno);

        return endereco;
    }
}
