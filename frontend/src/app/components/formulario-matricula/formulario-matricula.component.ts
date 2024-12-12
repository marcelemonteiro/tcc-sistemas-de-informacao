import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { ClassService, TurmaRequest } from '../../services/class.service';
import { Turma } from '../../interfaces/Turma.model';

@Component({
  selector: 'app-formulario-matricula',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './formulario-matricula.component.html',
  styleUrl: './formulario-matricula.component.css',
})
export class FormularioMatriculaComponent {
  @Input() alunoData!: {
    nome: string;
    dataNascimento: string;
    cpf: string;
    telefone: string;
    email: string;
    senha?: string;
    turma: Turma;
  };
  @Input() action!: string;
  @Input() alunoDataEndereco = {
    cep: '',
    numero: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: '',
    complemento: '',
  };
  turmas: Turma[] | null = null;
  selectedTurma = 'opa';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private classService: ClassService,
  ) {
    this.alunoData = {
      nome: '',
      dataNascimento: '',
      cpf: '',
      telefone: '',
      email: '',
      senha: '',
      turma: {
        id: '',
        nome: '',
        serieAno: '',
        turno: '',
        alunos: [],
      },
    };

    this.getTurmas();
  }

  handleMatriculaSubmit() {
    if (this.alunoData.senha) {
      this.authService
        .register(this.alunoData.email, this.alunoData.senha, 'ALUNO')
        .subscribe({
          next: (response) => {
            const userId = response.user?.id;

            if (userId) {
              this.saveAlunoData(userId);
            }
          },
          error: (error) => {
            console.error('Erro ao registrar usuário:', error);
          },
        });
    }
  }

  saveAlunoData(userId: string) {
    const user = {
      usuario: userId,
      nome: this.alunoData.nome,
      cpf: this.alunoData.cpf,
      dataNascimento: this.alunoData.dataNascimento,
      matricula: {
        data: new Date(),
        status: 'ATIVA',
      },
      serieAno: '9o ano',
      telefone: this.alunoData.telefone,
      turma: this.alunoData.turma.id,
    };

    this.userService.registerAluno(user).subscribe({
      next: (response) => {
        const alunoId = response.id;

        if (alunoId) {
          this.saveAlunoEndereco(alunoId);
        }
      },
      error: (error) => {
        console.error('Não foi possível registra o aluno:', error);
      },
    });
  }

  saveAlunoEndereco(alunoId: string) {
    this.userService
      .registerAlunoEndereco(alunoId, this.alunoDataEndereco)
      .subscribe({
        next: () => {
          this.router.navigate(['/admin/matriculas']);
        },
        error: (error) => {
          console.error(
            'Não foi possível registrar o endereço do aluno:',
            error,
          );
        },
      });
  }

  getTurmas() {
    this.classService.getAllClasses().subscribe({
      next: (response) => {
        this.turmas = response;
      },
      error: (error) => {
        console.error('Erro ao obter lista de turmas', error);
      },
    });
  }
}
