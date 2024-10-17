import { Component, Input } from '@angular/core';
import { SectionComponent } from "../section/section.component";
import { NoticeComponent } from "./notice/notice.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notice-board',
  standalone: true,
  imports: [SectionComponent, NoticeComponent, RouterLink],
  templateUrl: './notice-board.component.html',
  styleUrl: './notice-board.component.css'
})
export class NoticeBoardComponent {
  @Input() allNoticesBtn = true;
}
