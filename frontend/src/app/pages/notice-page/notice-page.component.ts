import { Component } from '@angular/core';
import { NoticeBoardComponent } from "../../components/notice-board/notice-board.component";
import { DefaultLayoutComponent } from "../../components/default-layout/default-layout.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notice-page',
  standalone: true,
  imports: [NoticeBoardComponent, DefaultLayoutComponent],
  templateUrl: './notice-page.component.html',
  styleUrl: './notice-page.component.css'
})
export class NoticePageComponent {
  id: number;

  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
  }
}
