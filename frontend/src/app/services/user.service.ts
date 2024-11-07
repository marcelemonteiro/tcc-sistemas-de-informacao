import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../pages/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getAllUsers() {
    const token = this.authService.getToken();

    return this.httpClient.get<User[]>('http://localhost:8080/aluno/todos', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  }
}
