import { User } from '../pages/user/user.model';

export interface Turma {
  id: string;
  nome: string;
  serieAno: string;
  turno: string;
  alunos: User[];
}
