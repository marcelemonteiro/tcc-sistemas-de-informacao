import { Disciplina } from '../../interfaces/Disciplina.model';
import { Matricula } from '../../interfaces/Matricula.model';
import { Turma } from '../../interfaces/Turma.model';

export interface User {
  id: string;
  nome: string;
  cpf: string;
  dataNascimento: string;
  matricula: Matricula;
  serieAno: string;
  turma?: Turma;
  endereco: {
    id: string;
    cep: string,
    numero: string,
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string,
    complemento?: string 
  };
  email?: string;
  telefone: string;
  role?: string;
  disciplinas?: Disciplina[];
  usuario: {
    id: string;
    role: string;
    email: string;
  };
}
