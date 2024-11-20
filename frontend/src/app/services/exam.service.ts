import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Exam } from '../components/exam/exam.model';
import { ExamResult } from '../interfaces/ExamResult.model';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  getExamListByClass(classId: string) {
    return this.http.get<Exam[]>(
      `http://localhost:8080/avaliacao/todos/turma/${classId}`,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      }
    );
  }

  getExamResultListByStudent(studentId: string) {
    return this.http.get<ExamResult[]>(
      `http://localhost:8080/nota/todos/aluno/${studentId}`,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      }
    );
  }

  getExam(id: string) {
    return this.http.get<Exam>(
      `http://localhost:8080/avaliacao/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      }
    );
  }
}
