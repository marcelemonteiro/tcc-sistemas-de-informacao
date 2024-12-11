import { Disciplina } from './Disciplina.model';

export interface Calendar {
  id?: string;
  diaSemana: string;
  horarioInicial: string;
  horarioFinal: string;
  disciplina: Disciplina;
}
