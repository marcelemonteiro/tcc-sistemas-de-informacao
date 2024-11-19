import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { ActivatedRoute } from '@angular/router';
import { NoticeComponent } from '../../components/notice/notice.component';
import { SectionComponent } from '../../components/section/section.component';
import { NoticeService } from '../../services/notice.service';
import { Notice } from '../../components/notice/notice.model';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../user/user.model';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-notice-page',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, MatIconModule],
  templateUrl: './notice-page.component.html',
  styleUrl: './notice-page.component.css',
})
export class NoticePageComponent {
  id: string | null;
  notice: Notice | null = null;

  constructor(
    private route: ActivatedRoute,
    private noticeService: NoticeService,
    private teacherService: TeacherService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadNoticeData();
  }

  loadNoticeData() {
    if (this.id) {
      this.noticeService.getNotice(this.id).subscribe({
        next: (response) => {
          this.notice = response;
        },
        error: (error) => {
          // TODO: Melhorar tratamento de erros
          console.error(error);
        },
      });
    }
  }
}
