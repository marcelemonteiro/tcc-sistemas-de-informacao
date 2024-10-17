import { Component } from '@angular/core';
import { SectionComponent } from "../section/section.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [SectionComponent, MatIconModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  schoolCalendar = [
    { id: 0, schedule: '7:30 - 8:20', class: 'Matemática', teacher: 'Prof. Carlos' },
    { id: 1, schedule: '8:20 - 9:10', class: 'Português', teacher: 'Prof.ª Ana' },
    { id: 2, schedule: '9:10 - 9:30', class: 'Intervalo' },
    { id: 3, schedule: '9:30 - 10:20', class: 'Ciências', teacher: 'Prof.ª Julia' },
    { id: 4, schedule: '10:20 - 11:10', class: 'História', teacher: 'Prof. Pedro' },
    { id: 5, schedule: '11:10 - 12:00', class: 'Educação Física', teacher: 'Prof. Roberto' },
  ];
}
