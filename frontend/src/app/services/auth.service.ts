import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzaXN0ZW1hX2VzY29sYXIiLCJzdWIiOiJjZWxlLUFETUlOIiwiZXhwIjoxNzMwOTI0OTIyfQ.kx0JEcIrKygdj-BnMRsraQY6_LmtUIE47u3EHAvjdcg',
    });

    this.httpClient
      .get('http://localhost:8080/aluno/todos', {
        headers: httpHeaders,
      })
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.error(error),
        complete: () => console.info('complete'),
      });

    // if (username === 'teste' && password === '123') {
    //   const authToken = 'token-jwt';
    //   localStorage.setItem(this.authSecretKey, authToken);
    //   this.isAuthenticated = true;
    //   return true;
    // }
    // return false;
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
