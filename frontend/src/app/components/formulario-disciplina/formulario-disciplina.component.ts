import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Turma } from '../../interfaces/Turma.model';
import { ClassService } from '../../services/class.service';
import { TeacherService } from '../../services/teacher.service';
import { User } from '../../pages/user/user.model';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-formulario-disciplina',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './formulario-disciplina.component.html',
  styleUrl: './formulario-disciplina.component.css',
})
export class FormularioDisciplinaComponent {
  @Input() id = '';
  @Input() nome = '';
  @Input() turma = {
    id: '',
  };
  @Input() professor = {
    id: '',
  };
  @Input() action!: string;

  turmas: Turma[] | null = null;
  professores: User[] | null = null;

  constructor(
    private router: Router,
    private classService: ClassService,
    private teacherService: TeacherService,
    private subjectService: SubjectService,
  ) {
    this.getTurmas();
    this.getProfessores();
  }

  handleCreateDisciplinaSubmit() {
    const disciplina = {
      nome: this.nome,
      professor: this.professor.id,
      turma: this.turma.id,
    };

    if (this.action === 'update') {
      this.subjectService.updateSubject(this.id, disciplina).subscribe({
        next: () => {
          this.router.navigate(['/admin/disciplinas']);
        },
        error: (error) => {
          console.error('Erro ao atualizar disciplina', error);
        },
      });
    }

    if (this.action !== 'update') {
      this.subjectService.createSubject(disciplina).subscribe({
        next: () => {
          this.router.navigate(['/admin/disciplinas']);
        },
        error: (error) => {
          console.error('Erro ao cadastrar disciplina', error);
        },
      });
    }
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

  getProfessores() {
    this.teacherService.getAllTeachers().subscribe({
      next: (response) => {
        this.professores = response;
        console.log(response);
      },
      error: (error) => {
        console.error('Erro ao obter lista de professores', error);
      },
    });
  }
}
