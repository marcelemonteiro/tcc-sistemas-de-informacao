import { Professor } from './Professor.model';
import { Turma } from './Turma.model';

export interface Disciplina {
  id: string;
  nome: string;
  professor: Professor;
  turma: Turma;
}
