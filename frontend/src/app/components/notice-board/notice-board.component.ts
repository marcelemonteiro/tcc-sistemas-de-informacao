import { Component } from '@angular/core';
import { SectionComponent } from "../section/section.component";

@Component({
  selector: 'app-notice-board',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './notice-board.component.html',
  styleUrl: './notice-board.component.css'
})
export class NoticeBoardComponent {

}
