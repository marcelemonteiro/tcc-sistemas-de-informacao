import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private authSecretKey = 'auth-token';
  token: string | null = null;
  aluno: string | null = null;

  constructor(private httpClient: HttpClient) {
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
    // TODO: Resolver problema dos dados persistirem até dar refresh na página mesmo depois do logout
    this.token = localStorage.getItem(this.authSecretKey);
    this.aluno = localStorage.getItem('aluno');
  }

  login(email: string, password: string) {
    return this.httpClient
      .post<LoginResponse>('http://localhost:8080/auth/login', {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          this.isAuthenticated = true;
          localStorage.clear();
          localStorage.setItem(this.authSecretKey, response.token);
          localStorage.setItem('aluno', JSON.stringify(response.aluno));
        })
      );
  }

  getToken() {
    return this.token;
  }

  getAluno() {
    return this.aluno;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    localStorage.removeItem('aluno');
    localStorage.clear();
    this.isAuthenticated = false;
  }
}
