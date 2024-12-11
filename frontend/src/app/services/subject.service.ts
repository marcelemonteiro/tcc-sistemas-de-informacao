import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Disciplina } from '../interfaces/Disciplina.model';

type DisciplinaRequest = {
  nome: string;
  professor: string;
  turma: string;
};

type AgendaRequest = {
  disciplina: string;
  turma: string;
  diaSemana: string;
  horarioInicial: string;
  horarioFinal: string;
};

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

  createSubject(disciplina: DisciplinaRequest) {
    return this.http.post<Disciplina>(
      `http://localhost:8080/disciplina`,
      disciplina,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      },
    );
  }

  updateSubject(id: string, disciplina: DisciplinaRequest) {
    return this.http.put(`http://localhost:8080/disciplina/${id}`, disciplina, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }

  deleteSubject(id: string) {
    return this.http.delete(`http://localhost:8080/disciplina/${id}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }

  createSubjectSchedule(agenda: AgendaRequest) {
    return this.http.post(`http://localhost:8080/agenda`, agenda, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }
}
