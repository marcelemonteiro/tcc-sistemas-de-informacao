import { Disciplina } from '../../interfaces/Disciplina.model';

export interface Exam {
  id: string;
  titulo: string;
  descricao: string;
  dataInicio: string;
  dataTermino: string;
  status: string;
  disciplina: Disciplina;
  resultado?: number;
  notas: any;
}
