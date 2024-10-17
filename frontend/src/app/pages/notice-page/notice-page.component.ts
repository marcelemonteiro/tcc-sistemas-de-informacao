import { Component } from '@angular/core';
import { NoticeBoardComponent } from "../../components/notice-board/notice-board.component";
import { DefaultLayoutComponent } from "../../components/default-layout/default-layout.component";
import { ActivatedRoute } from '@angular/router';
import { NoticeComponent } from '../../components/notice-board/notice/notice.component';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'app-notice-page',
  standalone: true,
  imports: [NoticeBoardComponent, DefaultLayoutComponent, NoticeComponent, SectionComponent],
  templateUrl: './notice-page.component.html',
  styleUrl: './notice-page.component.css'
})
export class NoticePageComponent {
  id: number;
  title = "Entrega das avaliações de matemática";
  date = "Seg. 24 de setembro";
  author = "Professor Billy";

  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
  }
}
