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
  private professor: User | null = null;
  private user: User | null = null;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
    this.token = this.authService.getToken();

    const storageAluno = this.authService.getAluno();
    if (storageAluno) {
      this.aluno = JSON.parse(storageAluno);
    }

    const storageProfessor = this.authService.getProfessor();
    if (storageProfessor) {
      this.professor = JSON.parse(storageProfessor);
    }

    const storageUser = this.authService.getUser();
    if (storageUser) {
      this.user = JSON.parse(storageUser);
    }
  }

  getUserById() {
    return this.httpClient.get<User>('http://localhost:8080/aluno', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    });
  }

  getCurrentAluno() {
    return this.aluno;
  }

  getCurrentProfessor() {
    return this.professor;
  }

  getCurrentUser() {
    return this.user;
  }

  getAllUsers() {
    return this.httpClient.get<User[]>('http://localhost:8080/aluno/todos', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    });
  }

  createUser(user: User) {
    // TODO: Implementar createUser
  }

  updateUser(userId: string) {
    // TODO: Implementar updateUser
  }

  deleteUser(userId: string) {
    // TODO: Implementar deleteUser
  }
}
