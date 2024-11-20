import { Exam } from '../components/exam/exam.model';

export interface ExamResult {
  id: string;
  avaliacao: Exam;
  resultado: number;
}
