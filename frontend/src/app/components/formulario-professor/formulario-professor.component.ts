import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../pages/user/user.model';

@Component({
  selector: 'app-formulario-professor',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './formulario-professor.component.html',
  styleUrl: './formulario-professor.component.css'
})
export class FormularioProfessorComponent {
  @Input() professorData!: {
    id: string,
    nome: string,
    dataNascimento: string,
    cpf: string,
    telefone: string,
    email: string,
    senha?: string,
    usuario?: {
      id: string,
    }
  };

  @Input() action!: string;


  constructor(private authService: AuthService, private teacherService: TeacherService, private userService: UserService, private router: Router) {
    this.professorData = {
      id: '',
      nome: '',
      dataNascimento: '',
      cpf: '',
      telefone: '',
      email: '',
      senha: ''
    }
  }

  handleCadastroSubmit() {
    if (this.professorData.senha && this.action != 'update') {
      this.authService.register(this.professorData.email, this.professorData.senha, 'PROFESSOR').subscribe({
        next: (response) => {
          const userId = response.user?.id;
          
          if (userId) {
            this.saveProfessor(userId);
          }

        },
        error: (error) => {
          console.error('Erro ao cadastrar usuário:', error);
        }
      })
    }

    if (this.action === 'update' && this.professorData.usuario?.id && this.professorData.senha) {
      this.userService.updateUser(this.professorData.usuario.id, this.professorData.email, this.professorData.senha).subscribe({
        next: () => {
          this.updateProfessor(this.professorData.id);
        },
        error: (error) => {
          console.error("Erro ao atualizar professor:", error);
        }
      });
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

  updateProfessor(professorId: string) {
    const professor = {
      usuario: this.professorData.usuario?.id,
      nome: this.professorData.nome,
      dataNascimento: this.professorData.dataNascimento,
      cpf: this.professorData.cpf,
      telefone: this.professorData.telefone,
      email: this.professorData.email
    };

    this.teacherService.updateProfessor(professorId, professor).subscribe({
      next: () => {
        this.router.navigate(['/admin/professores']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}

