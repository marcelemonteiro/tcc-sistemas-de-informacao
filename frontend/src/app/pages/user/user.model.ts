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
  endereco: string;
  email: string;
  telefone: string;
  role?: string;
  usuario: {
    id: string;
    role: string;
  };
}
