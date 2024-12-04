import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Calendar } from '../interfaces/Calendar.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  getCalendarByTurma(turmaId: string) {
    return this.http.get<Calendar[]>(
      `http://localhost:8080/agenda/todos/turma/${turmaId}`,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      },
    );
  }
}
