import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Turma } from '../interfaces/Turma.model';

export type TurmaRequest = {
  nome: string;
  serieAno: string;
  turno: string;
};

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  getAllClasses() {
    return this.http.get<Turma[]>(`http://localhost:8080/turma/todos`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }

  getClass(id: string) {
    return this.http.get<Turma>(`http://localhost:8080/turma/${id}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }

  createClass(turma: TurmaRequest) {
    return this.http.post(`http://localhost:8080/turma`, turma, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }
}
