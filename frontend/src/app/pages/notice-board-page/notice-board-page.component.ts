import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { NoticeService } from '../../services/notice.service';
import { UserService } from '../../services/user.service';
import { Notice } from '../../components/notice/notice.model';
import { NoticeComponent } from '../../components/notice/notice.component';
import { SectionComponent } from '../../components/section/section.component';
import { User } from '../user/user.model';

@Component({
  selector: 'app-notice-board-page',
  standalone: true,
  imports: [DefaultLayoutComponent, NoticeComponent, SectionComponent],
  templateUrl: './notice-board-page.component.html',
  styleUrl: './notice-board-page.component.css',
})
export class NoticeBoardPageComponent {
  notices: Notice[] | null = null;
  currentUser: User | null = null;

  constructor(
    private noticeService: NoticeService,
    private userService: UserService
  ) {
    this.loadNotices();
    this.currentUser =
      this.userService.getCurrentAluno() ||
      this.userService.getCurrentProfessor();
  }

  loadNotices() {
    if (this.currentUser?.usuario.role === 'ALUNO') {
      const userId = this.currentUser?.id;
      this.noticeService.getNoticesByAluno(userId).subscribe({
        next: (response) => {
          this.notices = response;
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
          this.notices = response;
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
}
