import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getTeacher(id: string) {
    return this.http.get(`http://localhost:8080/professor/${id}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }
}
