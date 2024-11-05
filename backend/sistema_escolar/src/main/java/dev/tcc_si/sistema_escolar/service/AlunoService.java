package dev.tcc_si.sistema_escolar.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import dev.tcc_si.sistema_escolar.entity.Aluno;
import dev.tcc_si.sistema_escolar.repository.AlunoRepository;

@Service
public class AlunoService {
    private AlunoRepository alunoRepository;

    public AlunoService(AlunoRepository alunoRepository) {
        this.alunoRepository = alunoRepository;
    }

    public List<Aluno> create(Aluno aluno) {
        alunoRepository.save(aluno);
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
