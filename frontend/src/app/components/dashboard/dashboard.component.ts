import { Component } from '@angular/core';
import { CalendarComponent } from "../calendar/calendar.component";
import { NoticeBoardComponent } from "../notice-board/notice-board.component";
import { ForumsComponent } from "../forums/forums.component";
import { SectionComponent } from "../section/section.component";
import { Schedule } from '../calendar/calendar.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CalendarComponent, NoticeBoardComponent, ForumsComponent, SectionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  scheduleMock: Schedule[] = [
    { id: 0, schedule: '7:30 - 8:20', class: 'Matemática', teacher: 'Prof. Carlos', weekDay: "Segunda-feira" },
    { id: 1, schedule: '8:20 - 9:10', class: 'Português', teacher: 'Prof.ª Ana', weekDay: "Segunda-feira" },
    { id: 2, schedule: '9:10 - 9:30', class: 'Intervalo', teacher: '', weekDay: "Segunda-feira" },
    { id: 3, schedule: '9:30 - 10:20', class: 'Ciências', teacher: 'Prof.ª Julia', weekDay: "Segunda-feira" },
    { id: 4, schedule: '10:20 - 11:10', class: 'História', teacher: 'Prof. Pedro', weekDay: "Segunda-feira" },
    { id: 5, schedule: '11:10 - 12:00', class: 'Educação Física', teacher: 'Prof. Roberto', weekDay: "Segunda-feira" },
  ];
}
