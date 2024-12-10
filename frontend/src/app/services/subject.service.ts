import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Disciplina } from '../interfaces/Disciplina.model';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  getSubjectByClass(classId: string) {
    return this.http.get<Disciplina[]>(
      `http://localhost:8080/disciplina/todos/turma/${classId}`,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      },
    );
  }

  getSubject(id: string) {
    return this.http.get<Disciplina>(`http://localhost:8080/disciplina/${id}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }

  getAllSubjects() {
    return this.http.get<Disciplina[]>(
      `http://localhost:8080/disciplina/todos`,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      },
    );
  }
}
