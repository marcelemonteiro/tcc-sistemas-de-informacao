import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Turma } from '../../interfaces/Turma.model';
import { ClassService } from '../../services/class.service';
import { TeacherService } from '../../services/teacher.service';
import { User } from '../../pages/user/user.model';
import { SubjectService } from '../../services/subject.service';

type Horario = {};

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
  @Input() horarios: any[] = [
    {
      id: this.gerarIdUnico(),
      diaSemana: '',
      horarioInicial: '',
      horarioFinal: '',
    },
  ];
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

  adicionarInputsHorario() {
    this.horarios.push({
      id: this.gerarIdUnico(),
      diaSemana: '',
      horarioInicial: '',
      horarioFinal: '',
    });
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
        next: (response) => {
          const disciplinaId = response.id;
          const turmaId = response.turma.id;
          this.postDisciplinaAgenda(disciplinaId, turmaId);
        },
        error: (error) => {
          console.error('Erro ao cadastrar disciplina', error);
        },
      });
    }
  }

  postDisciplinaAgenda(disciplina: string, turma: string) {
    this.horarios.forEach((horario) => {
      const horarioPost = {
        disciplina,
        turma,
        diaSemana: horario.diaSemana,
        horarioInicial: horario.horarioInicial,
        horarioFinal: horario.horarioFinal,
      };

      this.subjectService.createSubjectSchedule(horarioPost).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.error('Erro ao cadastrar agenda da disciplina', error);
        },
      });
    });

    this.router.navigate(['/admin/disciplinas']);
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
      },
      error: (error) => {
        console.error('Erro ao obter lista de professores', error);
      },
    });
  }

  gerarIdUnico(): string {
    return Math.random().toString(36).substring(2, 11); // Gera um ID único (2 até 11, total de 9 caracteres)
  }
}
