import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Exam } from '../components/exam/exam.model';
import { ExamResult } from '../interfaces/ExamResult.model';

type ExamRequest = {
  titulo: string;
  descricao: string;
  dataInicio: string;
  dataTermino: string;
  status: string;
  disciplina: string;
  turma: string;
};

type ExamResulRequest = {
  avaliacao: string;
  aluno: string;
  resultado: number;
};

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  getExamListByClass(classId: string) {
    return this.http.get<Exam[]>(
      `http://localhost:8080/avaliacao/todos/turma/${classId}`,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      },
    );
  }

  getExamListByProfessor(professorId: string) {
    return this.http.get<Exam[]>(
      `http://localhost:8080/avaliacao/todos/professor/${professorId}`,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      },
    );
  }

  getExamResultListByStudent(studentId: string) {
    return this.http.get<ExamResult[]>(
      `http://localhost:8080/nota/todos/aluno/${studentId}`,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      },
    );
  }

  postExamResult(nota: ExamResulRequest) {
    return this.http.post(`http://localhost:8080/nota`, nota, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }

  updateExamResult(id: string, nota: ExamResulRequest) {
    return this.http.put(`http://localhost:8080/nota/${id}`, nota, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }

  getExam(id: string) {
    return this.http.get<Exam>(`http://localhost:8080/avaliacao/${id}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }

  deleteExam(id: string) {
    return this.http.delete(`http://localhost:8080/avaliacao/${id}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }

  updateExam(id: string, exam: ExamRequest) {
    return this.http.put(`http://localhost:8080/avaliacao/${id}`, exam, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }

  createExam(exam: ExamRequest) {
    return this.http.post(`http://localhost:8080/avaliacao`, exam, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }
}
