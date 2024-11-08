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

  constructor(
    private noticeService: NoticeService,
    private userService: UserService
  ) {
    this.loadNotices();
  }

  loadNotices() {
    const userId = this.userService.getCurrentUser()?.usuario.id;
    if (userId) {
      this.noticeService.getNoticesByUserId(userId).subscribe({
        next: (response) => {
          this.notices = response;
        },
        error: (error) => {
          // TODO: Melhorar tratamento de erros
          console.error(error);
        },
      });
    }
  }
}
