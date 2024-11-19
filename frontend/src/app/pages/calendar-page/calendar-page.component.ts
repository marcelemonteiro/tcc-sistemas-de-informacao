import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { ScheduleComponent } from '../../components/schedule/schedule.component';
import { SectionComponent } from '../../components/section/section.component';
import { Schedule } from '../../components/schedule/schedule.model';
import { mockSchedules } from '../../mock-data';
import { CalendarService } from '../../services/calendar.service';
import { Calendar } from '../../interfaces/Calendar.model';

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [DefaultLayoutComponent, ScheduleComponent, SectionComponent],
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.css',
})
export class CalendarPageComponent {
  scheduleMock: Schedule[] = mockSchedules;
  // TODO: Remover any
  calendarList: any = {};
  diasUteis = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
  ];

  constructor(private calendarService: CalendarService) {
    this.loadCalendar();
  }

  loadCalendar() {
    this.calendarService.getCalendarByTurma().subscribe({
      next: (calendarList) => {
        this.diasUteis.forEach((dia) => {
          const filteredList = calendarList.filter(
            (calendar) => calendar.diaSemana === dia
          );

          if (filteredList.length > 0) {
            const key = dia as keyof typeof this.calendarList;
            this.calendarList[key] = filteredList;
          }
        });
      },
    });
  }
}
