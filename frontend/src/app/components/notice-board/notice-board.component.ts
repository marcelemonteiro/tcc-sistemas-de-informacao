import { Component } from '@angular/core';
import { SectionComponent } from "../section/section.component";
import { NoticeComponent } from "./notice/notice.component";

@Component({
  selector: 'app-notice-board',
  standalone: true,
  imports: [SectionComponent, NoticeComponent],
  templateUrl: './notice-board.component.html',
  styleUrl: './notice-board.component.css'
})
export class NoticeBoardComponent {

}
