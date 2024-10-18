import { Component, Input } from '@angular/core';
import { SectionComponent } from "../section/section.component";
import { MatIconModule } from '@angular/material/icon';

import { Schedule } from './calendar.model';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [SectionComponent, MatIconModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  @Input() weekSchedule!: Schedule[];
}
