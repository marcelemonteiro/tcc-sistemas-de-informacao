import { Component, Input } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { FormularioProfessorComponent } from '../../components/formulario-professor/formulario-professor.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-editar-professor',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, FormularioProfessorComponent],
  templateUrl: './editar-professor.component.html',
  styleUrl: './editar-professor.component.css'
})
export class EditarProfessorComponent {
  professorId: string | null;
  professorData = {
    id: '',
    nome: '',
    dataNascimento: '',
    cpf: '',
    telefone: '',
    email: '',
    usuario: {
      id:  '',
    }
  };


  constructor(private route: ActivatedRoute, private userService: UserService, private teacherService: TeacherService) {
    this.professorId = this.route.snapshot.paramMap.get('id'); 

    if (this.professorId) {
      this.teacherService.getTeacher(this.professorId).subscribe({
        next: (teacher) => {
          this.professorData = {
            id: teacher.id,
            nome: teacher.nome,
            dataNascimento: teacher.dataNascimento,
            cpf: teacher.cpf,
            telefone: teacher.telefone,
            email: teacher.usuario.email,
            usuario: teacher.usuario
          }
        },
        error: (error) => {
          console.error("Erro ao retornar professor:", error);
        }
      })
    }
  }

}
