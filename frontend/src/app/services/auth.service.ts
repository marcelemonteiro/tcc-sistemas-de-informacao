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
    this.isAuthenticated = !!sessionStorage.getItem(this.authSecretKey);
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
          sessionStorage.setItem(this.authSecretKey, response.token);
        })
      );
  }

  getToken() {
    return sessionStorage.getItem(this.authSecretKey);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    sessionStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;
  }
}
