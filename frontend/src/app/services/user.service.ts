import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../pages/user/user.model';

type UserRequest = {
  usuario: string,
  nome: string,
  cpf: string,
  dataNascimento: string,
  matricula: {
    data: Date,
    status: string
  },
  serieAno: string,
  telefone: string
}

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
    private authService: AuthService,
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

  getUserById(userId: string) {
    return this.httpClient.get<User>(`http://localhost:8080/aluno/${userId}`, {
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

  registerAluno(user: UserRequest) {
    return this.httpClient.post<User>('http://localhost:8080/aluno', user, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    });
  }

  registerAlunoEndereco(alunoId: string, endereco: {
    cep: string,
    numero: string,
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string,
    complemento?: string 
  }) {
    return this.httpClient.post<User>(`http://localhost:8080/aluno/${alunoId}/endereco`, endereco, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    });
  }

  updateUser(userId: string, userEmail: string, password: string) {
    return this.httpClient.put(`http://localhost:8080/user/${userId}`, { userEmail, password }, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    });
  }

  updateUserPassword(userEmail: string, password: string) {
    return this.httpClient.put(
      'http://localhost:8080/user',
      { userEmail, password },
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token,
        }),
      },
    );
  }

  // Delete qualquer usuário
  deleteUser(userId: string) {
    return this.httpClient.delete(`http://localhost:8080/user/${userId}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      }),
    });
  }
}
