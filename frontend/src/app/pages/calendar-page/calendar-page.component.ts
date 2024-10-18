import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { ScheduleComponent } from '../../components/schedule/schedule.component';
import { SectionComponent } from '../../components/section/section.component';
import { Schedule } from '../../components/schedule/schedule.model';

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [DefaultLayoutComponent, ScheduleComponent, SectionComponent],
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.css'
})
export class CalendarPageComponent {
  // scheduleMock: Schedule[] = [
  //   { id: 0, schedule: '7:30 - 8:20', class: 'Matemática', teacher: 'Prof. Carlos', weekDay: "Segunda-feira" },
  //   { id: 1, schedule: '8:20 - 9:10', class: 'Português', teacher: 'Prof.ª Ana', weekDay: "Segunda-feira" },
  //   { id: 2, schedule: '9:10 - 9:30', class: 'Intervalo', teacher: '', weekDay: "Segunda-feira" },
  //   { id: 3, schedule: '9:30 - 10:20', class: 'Ciências', teacher: 'Prof.ª Julia', weekDay: "Segunda-feira" },
  //   { id: 4, schedule: '10:20 - 11:10', class: 'História', teacher: 'Prof. Pedro', weekDay: "Segunda-feira" },
  //   { id: 5, schedule: '11:10 - 12:00', class: 'Educação Física', teacher: 'Prof. Roberto', weekDay: "Segunda-feira" },
  // ];
}
