import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { NoticeService } from '../../services/notice.service';
import { UserService } from '../../services/user.service';
import { Notice } from '../../components/notice/notice.model';
import { NoticeComponent } from '../../components/notice/notice.component';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'app-notice-board-page',
  standalone: true,
  imports: [DefaultLayoutComponent, NoticeComponent, SectionComponent],
  templateUrl: './notice-board-page.component.html',
  styleUrl: './notice-board-page.component.css',
})
export class NoticeBoardPageComponent {
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
