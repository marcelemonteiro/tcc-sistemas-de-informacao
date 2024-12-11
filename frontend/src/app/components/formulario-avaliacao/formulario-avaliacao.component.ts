import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { ClassService } from '../../services/class.service';
import { Turma } from '../../interfaces/Turma.model';
import { UserService } from '../../services/user.service';
import { User } from '../../pages/user/user.model';
import { Disciplina } from '../../interfaces/Disciplina.model';
import { ExamService } from '../../services/exam.service';

@Component({
  selector: 'app-formulario-avaliacao',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './formulario-avaliacao.component.html',
  styleUrl: './formulario-avaliacao.component.css',
})
export class FormularioAvaliacaoComponent {
  professor: User | null = null;
  @Input() id!: string;
  @Input() titulo = '';
  @Input() descricao = '';
  @Input() dataInicio = '';
  @Input() dataTermino = '';
  @Input() status = 'REGISTRADA';
  @Input() disciplina = {
    id: '',
  };
  @Input() action!: string;

  turmas: Turma[] | null = null;
  disciplinas: Disciplina[] | null = null;

  constructor(
    private router: Router,
    private userService: UserService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private examService: ExamService,
  ) {
    this.professor = this.userService.getCurrentProfessor();
    this.getTurmas();
    this.getDisciplinasByProfessor();
  }

  handleCreateAvaliacaoSubmit() {
    if (!this.disciplinas) throw new Error('Não há lista de disciplinas');

    const disciplinaObj = this.disciplinas.find(
      (disciplina) => disciplina.id === this.disciplina.id,
    );

    const turmaId = disciplinaObj?.turma.id;
    const professorId = disciplinaObj?.professor.id;

    if (!turmaId) throw new Error('Não há  turma relacionada a disciplina');
    if (!professorId)
      throw new Error('Não há  professor relacionada a disciplina');

    const avaliacao = {
      titulo: this.titulo,
      descricao: this.descricao,
      dataInicio: this.dataInicio,
      dataTermino: this.dataTermino,
      status: this.status,
      disciplina: this.disciplina.id,
      turma: turmaId,
      professor: professorId,
    };

    if (this.action !== 'update') {
      this.examService.createExam(avaliacao).subscribe({
        next: () => {
          this.router.navigate(['/professor/avaliacoes']);
        },
        error: (error) => {
          console.error('Erro ao criar avaliação:', error);
        },
      });
    }

    if (this.action === 'update') {
      this.examService.updateExam(this.id, avaliacao).subscribe({
        next: () => {
          this.router.navigate(['/professor/avaliacoes']);
        },
        error: (error) => {
          console.error('Erro ao atualizar avaliação:', error);
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

  getDisciplinasByProfessor() {
    if (this.professor?.id) {
      this.subjectService.getSubjectByProfessor(this.professor.id).subscribe({
        next: (response) => {
          this.disciplinas = response;
        },
        error: (error) => {
          console.error('Erro ao obter lista de disciplinas', error);
        },
      });
    }
  }
}
