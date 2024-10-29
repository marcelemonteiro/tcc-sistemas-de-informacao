import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { ScheduleComponent } from '../../components/schedule/schedule.component';
import { SectionComponent } from '../../components/section/section.component';
import { Schedule } from '../../components/schedule/schedule.model';
import { mockSchedules } from '../../mock-data';

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [DefaultLayoutComponent, ScheduleComponent, SectionComponent],
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.css',
})
export class CalendarPageComponent {
  scheduleMock: Schedule[] = mockSchedules;
}
