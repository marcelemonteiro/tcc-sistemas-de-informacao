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
}
