import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-matricula',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-matricula.component.html',
  styleUrl: './formulario-matricula.component.css'
})
export class FormularioMatriculaComponent {
  nome = '';
  dataNascimento = '';
  cpf = '';
  telefone = '';
  email = '';
  senha = '';
  endereco = {
    cep: '',
    numero: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: '',
    complemento: '' 
  }
  isAlunoSalvo = true;


  constructor(private authService: AuthService, private userService: UserService, private router: Router) {

  }


  handleMatriculaSubmit() {
    this.authService.register(this.email, this.senha, 'ALUNO').subscribe({
      next: (response) => {
        const userId = response.user?.id;

        if (userId) {
          this.saveAlunoData(userId);
        }
      },
      error: (error) => {
        console.error('Erro ao registrar usuário:', error);
      }
    });   
  }

  saveAlunoData(userId: string) {
    const user = {
      usuario: userId,
      nome: this.nome,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento,
      matricula: {
        data: new Date(),
        status: 'ATIVA'
      },
      serieAno: '9o ano',
      telefone: this.telefone
    }

    this.userService.registerAluno(user).subscribe({
      next: (response) => {
        const alunoId = response.id;
        
        if (alunoId) {
          this.saveAlunoEndereco(alunoId);
        }
      },
      error: (error) => {
        console.error('Não foi possível registra o aluno:', error);
      }
    });
  }

  saveAlunoEndereco(alunoId: string) {
    this.userService.registerAlunoEndereco(alunoId, this.endereco).subscribe({
      next: () => {
        this.router.navigate(['/admin/matriculas']);
      },
      error: (error) => {
        console.error("Não foi possível registrar o endereço do aluno:", error);
      }
    })
  }
}
