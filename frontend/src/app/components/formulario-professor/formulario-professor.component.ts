import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-formulario-professor',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './formulario-professor.component.html',
  styleUrl: './formulario-professor.component.css'
})
export class FormularioProfessorComponent {
  @Input() professorData!: {
    nome: string,
    dataNascimento: string,
    cpf: string,
    telefone: string,
    email: string,
    senha?: string
  };

  @Input() action!: string;


  constructor(private authService: AuthService, private teacherService: TeacherService, private router: Router) {
    this.professorData = {
      nome: '',
      dataNascimento: '',
      cpf: '',
      telefone: '',
      email: '',
      senha: ''
    }
  }

  handleCadastroSubmit() {
    if (this.professorData.senha) {
      this.authService.register(this.professorData.email, this.professorData.senha, 'PROFESSOR').subscribe({
        next: (response) => {
          const userId = response.user?.id;
          
          console.log(userId);
          if (userId) {
            this.saveProfessor(userId);
          }

        },
        error: (error) => {
          console.error('Erro ao cadastrar usuário:', error);
        }
      })

    }
  }

  saveProfessor(userId: string) {
    if (this.professorData.senha) {
      const professor = {
        usuario: userId,
        nome: this.professorData.nome,
        dataNascimento: this.professorData.dataNascimento,
        cpf: this.professorData.cpf,
        telefone: this.professorData.telefone,
        email: this.professorData.email
      };

      this.teacherService.cadastrarProfessor(professor).subscribe({
        next: () => {
          this.router.navigate(['/admin/professores']);
        },
        error: (error) => {
          console.error("Erro ao cadastrar professor:", error);
        }
      })
    }
  }
}

