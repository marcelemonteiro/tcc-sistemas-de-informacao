import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // o service mantém o valor igual, pois só é criado uma instância dele na aplicação inteira
  private isAuthenticated = false;
  private authSecretKey = 'Token';

  constructor(private httpClient: HttpClient) {
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
  }

  login(username: string, password: string) {
    if (username === 'teste' && password === '123') {
      const authToken = 'token-jwt';
      localStorage.setItem(this.authSecretKey, authToken);
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;
  }
}
