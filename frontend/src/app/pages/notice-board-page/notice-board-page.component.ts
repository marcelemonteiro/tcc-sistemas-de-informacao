import { Component } from '@angular/core';
import { DefaultLayoutComponent } from "../../components/default-layout/default-layout.component";
import { NoticeBoardComponent } from '../../components/notice-board/notice-board.component';

@Component({
  selector: 'app-notice-board-page',
  standalone: true,
  imports: [DefaultLayoutComponent, NoticeBoardComponent],
  templateUrl: './notice-board-page.component.html',
  styleUrl: './notice-board-page.component.css'
})
export class NoticeBoardPageComponent {

}
