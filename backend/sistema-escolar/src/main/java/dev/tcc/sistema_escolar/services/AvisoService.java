package dev.tcc.sistema_escolar.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;

import dev.tcc.sistema_escolar.domain.aluno.Aluno;
import dev.tcc.sistema_escolar.domain.aviso.Aviso;
import dev.tcc.sistema_escolar.domain.aviso.AvisoStatus;
import dev.tcc.sistema_escolar.domain.professor.Professor;
import dev.tcc.sistema_escolar.dto.CreateAvisoDTO;
import dev.tcc.sistema_escolar.repositories.AlunoRepository;
import dev.tcc.sistema_escolar.repositories.AvisoRepository;
import dev.tcc.sistema_escolar.repositories.ProfessorRepository;

@Service
public class AvisoService {
    private AvisoRepository avisoRepository;
    private AlunoRepository alunoRepository;
    private ProfessorRepository professorRepository;

    public AvisoService(AvisoRepository avisoRepository,
            AlunoRepository alunoRepository,
            ProfessorRepository professorRepository) {
        this.avisoRepository = avisoRepository;
        this.alunoRepository = alunoRepository;
        this.professorRepository = professorRepository;
    }

    public Aviso create(CreateAvisoDTO aviso) {
        Aluno aluno = this.alunoRepository.findById(aviso.aluno())
                .orElseThrow(() -> new RuntimeException("Aluno not found"));

        Professor professor = this.professorRepository.findById(aviso.professor())
                .orElseThrow(() -> new RuntimeException("Destinatario not found"));

        Aviso novoAviso = new Aviso();
        novoAviso.setAluno(aluno);
        novoAviso.setProfessor(professor);
        novoAviso.setTitulo(aviso.titulo());
        novoAviso.setConteudo(aviso.conteudo());
        novoAviso.setDataEnvio(aviso.dataEnvio());
        AvisoStatus statusLeitura = AvisoStatus.valueOf(aviso.statusLeitura());
        novoAviso.setStatusLeitura(statusLeitura);
        return avisoRepository.save(novoAviso);
    }

    public List<Aviso> listAll() {
        // TODO: Ordenar pela data de envio
        return avisoRepository.findAll();
    }

    public List<Aviso> listAllByAluno(String userId) {
        return avisoRepository.findByAlunoId(userId);
    }

    public List<Aviso> listAllByProfessor(String userId) {
        return avisoRepository.findByProfessorId(userId);
    }

    public Aviso get(String id) {
        Optional<Aviso> aviso = avisoRepository.findById(id);

        if (!aviso.isPresent()) {
            throw new RuntimeException("Aviso não encontrado");
        }

        return aviso.get();
    }

    public Aviso update(String id, CreateAvisoDTO avisoAtualizado) {
        Aluno aluno = this.alunoRepository.findById(avisoAtualizado.aluno())
                .orElseThrow(() -> new RuntimeException("Aluno not found"));

        Professor professor = this.professorRepository.findById(avisoAtualizado.professor())
                .orElseThrow(() -> new RuntimeException("Destinatario not found"));

        return avisoRepository.findById(id).map(aviso -> {
            aviso.setAluno(aluno);
            aviso.setProfessor(professor);
            aviso.setTitulo(avisoAtualizado.titulo());
            aviso.setConteudo(avisoAtualizado.conteudo());
            aviso.setDataEnvio(avisoAtualizado.dataEnvio());
            AvisoStatus statusLeitura = AvisoStatus.valueOf(avisoAtualizado.statusLeitura());
            System.out.println(statusLeitura);
            System.out.println(avisoAtualizado.statusLeitura());
            aviso.setStatusLeitura(statusLeitura);
            return avisoRepository.save(aviso);
        }).orElseGet(() -> {
            return this.create(avisoAtualizado);
        });
    }

    public Map<String, String> delete(String id) {
        if (avisoRepository.existsById(id)) {
            avisoRepository.deleteById(id);
            return Map.of("deletado", id);
        } else {
            throw new RuntimeException("Aviso not found");
        }
    }
}
