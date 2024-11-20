import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { ExamComponent } from '../../components/exam/exam.component';
import { ExamService } from '../../services/exam.service';
import { Exam } from '../../components/exam/exam.model';
import { User } from '../user/user.model';
import { UserService } from '../../services/user.service';

type ExamResultByExamId = {
  [id: string]: { resultado: number };
};

@Component({
  selector: 'app-exams-page',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, ExamComponent],
  templateUrl: './exams-page.component.html',
  styleUrl: './exams-page.component.css',
})
export class ExamsPageComponent {
  upcomingExams: Exam[] | null = null;
  finishedExams?: Exam[];
  // TODO: Remover any
  finishedExamsResults?: ExamResultByExamId;
  waitingCorrectionExams: Exam[] | null = null;
  currentUser: User | null;

  constructor(
    private examService: ExamService,
    private userService: UserService
  ) {
    this.currentUser = this.userService.getCurrentUser();
    this.loadExamList();
    this.getExamResults();
  }

  loadExamList() {
    const classId = this.currentUser?.turma?.id;

    if (classId) {
      this.examService.getExamListByClass(classId).subscribe({
        next: (examListData) => {
          this.upcomingExams = examListData.filter(
            (exam) => exam.status === 'REGISTRADA'
          );

          this.finishedExams = examListData.filter(
            (exam) => exam.status === 'CONCLUIDA'
          );

          this.waitingCorrectionExams = examListData.filter(
            (exam) => exam.status === 'ESPERANDO_CORRECAO'
          );
        },
        error: (error) => {
          console.error('Lista de avaliações não encontrada:', error);
        },
      });
    }
  }

  getExamResults() {
    if (this.currentUser) {
      this.examService
        .getExamResultListByStudent(this.currentUser.id)
        .subscribe({
          next: (examResultData) => {
            // TODO: Para quê serve esse Record?
            const results = examResultData.reduce<Record<string, { resultado: number }>>((acc, examResult) => {
              acc[examResult.avaliacao.id] = {
                resultado: examResult.resultado,
              };

              return acc;
            }, {});

            this.finishedExamsResults = results;
          },
        });
    }
  }
}
