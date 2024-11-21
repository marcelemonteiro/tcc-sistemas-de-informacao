import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Calendar } from '../interfaces/Calendar.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private userService: UserService
  ) { }

  getCalendarByTurma() {
    const aluno = this.userService.getCurrentAluno() || this.userService.getCurrentProfessor();
    const turma = aluno?.turma?.id;

    return this.http.get<Calendar[]>(
      `http://localhost:8080/agenda/todos/turma/${turma}`,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      }
    );
  }
}
