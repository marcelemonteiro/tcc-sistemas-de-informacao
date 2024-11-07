import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../pages/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private token: string | null;
  private aluno: User | null = null;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
    this.token = this.authService.getToken();

    const alunoSession = this.authService.getAluno();
    if (alunoSession) {
      this.aluno = JSON.parse(alunoSession);
    }
  }

  getUserById() {
    return this.httpClient.get<User>('http://localhost:8080/aluno', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    });
  }

  getCurrentUser() {
    return this.aluno;
  }

  getAllUsers() {
    return this.httpClient.get<User[]>('http://localhost:8080/aluno/todos', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    });
  }
}