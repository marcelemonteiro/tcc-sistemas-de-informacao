export interface Exam {
  id: number;
  title: string;
  description: string;
  type: string;
  dateStart: string;
  dateEnd: string;
  idDisciplina: number;
  finished?: boolean;
}
