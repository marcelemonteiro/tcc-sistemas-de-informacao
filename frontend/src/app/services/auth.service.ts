import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private authSecretKey = 'Token';

  constructor() {
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
