import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { UserService } from '../../services/user.service';
import { User } from '../user/user.model';
import { ExamService } from '../../services/exam.service';
import { Exam } from '../../components/exam/exam.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-avaliacoes-professor',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, RouterLink],
  templateUrl: './avaliacoes-professor.component.html',
  styleUrl: './avaliacoes-professor.component.css',
})
export class AvaliacoesProfessorComponent {
  professor: User | null = null;
  avaliacoes: Exam[] | null = null;
  avaliacoesFiltrada: Exam[] | null = null;

  activeTab = '';

  constructor(
    private userService: UserService,
    private examService: ExamService,
  ) {
    this.professor = this.userService.getCurrentProfessor();
    this.loadAvaliacoes();
  }

  loadAvaliacoes() {
    if (this.professor?.id) {
      this.examService.getExamListByProfessor(this.professor.id).subscribe({
        next: (response) => {
          this.avaliacoes = response;
          this.avaliacoesFiltrada = response;
          this.enableEsperandoCorrecao();
        },
        error: (error) => {
          console.error(
            'Não foram encontradas avaliações para este professor:',
            error,
          );
        },
      });
    }
  }

  handleDeleteExam(id: string) {
    this.examService.deleteExam(id).subscribe({
      next: () => {
        if (this.avaliacoes) {
          this.avaliacoes = this.avaliacoes.filter(
            (avaliacao) => avaliacao.id !== id,
          );
        }
      },
      error: (error) => {
        console.error('Não foi possível deletar a avaliação:', error);
      },
    });
  }

  enableRegistradas() {
    this.activeTab = 'registradas';

    if (this.avaliacoes) {
      this.avaliacoesFiltrada = this.avaliacoes.filter(
        (exam) => exam.status === 'REGISTRADA',
      );
    }
  }

  enableEsperandoCorrecao() {
    this.activeTab = 'esperando';

    if (this.avaliacoes) {
      this.avaliacoesFiltrada = this.avaliacoes.filter(
        (exam) => exam.status === 'ESPERANDO_CORRECAO',
      );
    }
  }

  enableConcluidas() {
    this.activeTab = 'concluidas';

    if (this.avaliacoes) {
      this.avaliacoesFiltrada = this.avaliacoes.filter(
        (exam) => exam.status === 'CONCLUIDA',
      );
    }
  }
}
