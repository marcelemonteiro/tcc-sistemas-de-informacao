import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { ScheduleComponent } from '../../components/schedule/schedule.component';

import { Schedule } from '../../components/schedule/schedule.model';
import { mockSchedules } from '../../mock-data';
import { NoticeComponent } from '../../components/notice/notice.component';
import { Router, RouterLink } from '@angular/router';
import { NoticeService } from '../../services/notice.service';
import { Notice } from '../../components/notice/notice.model';
import { UserService } from '../../services/user.service';
import { map, tap } from 'rxjs';
import { TeacherService } from '../../services/teacher.service';
import { CalendarService } from '../../services/calendar.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    ScheduleComponent,
    NoticeComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  scheduleMock: Schedule[] = mockSchedules;
  notices: Notice[] | null = null;
  isNoticesSliced: boolean = false;
  // TODO: Remover any
  calendarList: any;
  currentWeekDay: string = '';
  currentUser: User | null;

  constructor(
    private noticeService: NoticeService,
    private userService: UserService,
    private calendarService: CalendarService,
    private router: Router,
  ) {
    this.currentUser =
      this.userService.getCurrentAluno() ||
      this.userService.getCurrentProfessor();

    if (this.currentUser === null) {
      this.router.navigate(['/admin/home']);
    }

    this.loadNotices();

    const today = new Date();
    this.currentWeekDay = today.toLocaleDateString('pt-BR', {
      weekday: 'long',
    });
    console.log(this.currentWeekDay);

    if (this.currentUser?.usuario.role === 'ALUNO') {
      this.loadCalendarAluno();
    }

    if (this.currentUser?.usuario.role === 'PROFESSOR') {
      this.loadCalendarProfessor();
    }
  }

  loadNotices() {
    if (this.currentUser?.usuario.role === 'ALUNO') {
      const userId = this.currentUser?.id;
      this.noticeService.getNoticesByAluno(userId).subscribe({
        next: (response) => {
          if (response.length > 4) {
            this.isNoticesSliced = true;
            this.notices = response.slice(0, 4);
          } else {
            this.notices = response;
          }
        },
        error: (error) => {
          // TODO: Melhorar tratamento de erros
          console.error(error);
        },
      });
    }

    if (this.currentUser?.usuario.role === 'PROFESSOR') {
      const userId = this.currentUser?.id;
      this.noticeService.getNoticesByProfessor(userId).subscribe({
        next: (response) => {
          if (response.length > 4) {
            this.isNoticesSliced = true;
            this.notices = response.slice(0, 4);
          } else {
            this.notices = response;
          }
        },
        error: (error) => {
          // TODO: Melhorar tratamento de erros
          console.error(error);
        },
      });
    }
  }

  onDeletedNotice(deletedNoticeId: string) {
    if (this.notices) {
      this.notices = this.notices.filter(
        (notice) => notice.id !== deletedNoticeId,
      );
    }
  }

  loadCalendarAluno() {
    const turma = this.currentUser?.turma?.id;

    if (turma) {
      this.calendarService.getCalendarByTurma(turma).subscribe({
        next: (calendarList) => {
          const filteredList = calendarList.filter(
            (calendar) =>
              calendar.diaSemana.toLowerCase() === this.currentWeekDay,
          );

          if (filteredList.length > 0) {
            this.calendarList = filteredList;
          }
        },
      });
    }
  }

  loadCalendarProfessor() {
    const turmas = this.currentUser?.disciplinas?.map(
      (disciplina) => disciplina.turma.id,
    );
    const disciplinas = this.currentUser?.disciplinas?.map(
      (disciplina) => disciplina.id,
    );

    if (turmas) {
      turmas.forEach((turma) => {
        this.calendarService.getCalendarByTurma(turma).subscribe({
          next: (response) => {
            console.log(response);
            const filterByDisciplina = response.filter((data) =>
              disciplinas?.includes(data.disciplina.id),
            );

            const filteredByCurrentDay = filterByDisciplina.filter(
              (calendar) =>
                calendar.diaSemana.toLowerCase() === this.currentWeekDay,
            );

            if (filteredByCurrentDay.length > 0) {
              this.calendarList = filteredByCurrentDay;
            }
          },
          error: (error) => {
            console.error(`Turma com id ${turma} não encontrada:`, error);
          },
        });
      });
    }
  }
}
