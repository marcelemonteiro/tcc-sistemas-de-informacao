import { Component } from '@angular/core';
import { CalendarComponent } from "../calendar/calendar.component";
import { NoticeBoardComponent } from "../notice-board/notice-board.component";
import { ForumsComponent } from "../forums/forums.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CalendarComponent, NoticeBoardComponent, ForumsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}