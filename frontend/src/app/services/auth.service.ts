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

  constructor(private httpClient: HttpClient) {
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
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
          localStorage.setItem(this.authSecretKey, response.token);
          localStorage.setItem('aluno', JSON.stringify(response.aluno));
        })
      );
  }

  getToken() {
    return localStorage.getItem(this.authSecretKey);
  }

  getAluno() {
    return localStorage.getItem('aluno');
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    localStorage.removeItem('aluno');
    this.isAuthenticated = false;
  }
}
