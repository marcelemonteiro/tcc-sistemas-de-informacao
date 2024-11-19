import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { ScheduleComponent } from '../../components/schedule/schedule.component';

import { Schedule } from '../../components/schedule/schedule.model';
import { mockSchedules } from '../../mock-data';
import { NoticeComponent } from '../../components/notice/notice.component';
import { RouterLink } from '@angular/router';
import { NoticeService } from '../../services/notice.service';
import { Notice } from '../../components/notice/notice.model';
import { UserService } from '../../services/user.service';
import { map, tap } from 'rxjs';
import { TeacherService } from '../../services/teacher.service';
import { CalendarService } from '../../services/calendar.service';

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
  currentWeekDay: string;

  constructor(
    private noticeService: NoticeService,
    private userService: UserService,
    private calendarService: CalendarService
  ) {
    this.loadNotices();

    const today = new Date();
    this.currentWeekDay = today.toLocaleDateString('pt-BR', {
      weekday: 'long',
    });

    this.loadCalendar();
  }

  loadNotices() {
    const userId = this.userService.getCurrentUser()?.id;

    if (userId) {
      this.noticeService.getNoticesByUserId(userId).subscribe({
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
        (notice) => notice.id !== deletedNoticeId
      );
    }
  }

  loadCalendar() {
    this.calendarService.getCalendarByTurma().subscribe({
      next: (calendarList) => {
        const filteredList = calendarList.filter(
          (calendar) => calendar.diaSemana.toLowerCase() === this.currentWeekDay
        );

        if (filteredList.length > 0) {
          this.calendarList = filteredList;
        }
      },
    });
  }
}
