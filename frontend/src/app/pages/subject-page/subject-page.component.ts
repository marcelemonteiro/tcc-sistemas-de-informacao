import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { MatIconModule } from '@angular/material/icon';
import { ScheduleComponent } from '../../components/schedule/schedule.component';

import { Disciplina } from '../../interfaces/Disciplina.model';
import { SubjectService } from '../../services/subject.service';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from '../../services/calendar.service';
import { User } from '../user/user.model';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs';
import { ExamService } from '../../services/exam.service';
import { Exam } from '../../components/exam/exam.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-subject-page',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    SectionComponent,
    MatIconModule,
    ScheduleComponent,
    DatePipe,
  ],
  templateUrl: './subject-page.component.html',
  styleUrl: './subject-page.component.css',
})
export class SubjectPageComponent {
  id: string | null;
  subject: Disciplina | null = null;
  currentUser: User | null;
  // TODO: Remover any
  calendarList: any = {};
  diasUteis = [
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
  ];
  upcomingExams: Exam[] | null = null;

  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private calendarService: CalendarService,
    private userService: UserService,
    private examService: ExamService,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.currentUser =
      this.userService.getCurrentAluno() ||
      this.userService.getCurrentProfessor();

    this.loadSubject();
    this.loadSchedule();
    this.loadUpcomingExams();
  }

  loadSubject() {
    if (this.id) {
      this.subjectService.getSubject(this.id).subscribe({
        next: (subjectData) => {
          this.subject = subjectData;
        },
        error: (error) => {
          console.error('Disciplina não encontrada:', error);
        },
      });
    }
  }

  loadSchedule() {
    const classId = this.currentUser?.turma?.id;

    if (classId) {
      this.calendarService
        .getCalendarByTurma(classId)
        .pipe(
          map((calendarList) => {
            const filteredCalendar = calendarList.filter(
              (calendar) => calendar.disciplina.id === this.id,
            );
            return filteredCalendar;
          }),
        )
        .subscribe({
          next: (calendarList) => {
            this.diasUteis.forEach((dia) => {
              const filteredList = calendarList.filter(
                (calendar) => calendar.diaSemana === dia,
              );

              if (filteredList.length > 0) {
                const key = dia as keyof typeof this.calendarList;
                this.calendarList[key] = filteredList;
              }
            });
          },
          error: (error) => {
            console.error('Erro: agenda não encontrada em disciplina:', error);
          },
        });
    }
  }

  loadUpcomingExams() {
    const classId = this.currentUser?.turma?.id;

    if (classId) {
      this.examService.getExamListByClass(classId).subscribe({
        next: (examListData) => {
          this.upcomingExams = examListData.filter(
            (exam) => exam.status === 'REGISTRADA',
          );
        },
        error: (error) => {
          console.error(
            'Erro: avaliações não encontradas em disciplina:',
            error,
          );
        },
      });
    }
  }
}
