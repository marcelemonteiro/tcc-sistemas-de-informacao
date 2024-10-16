import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';

@Component({
  selector: 'app-calendar-page',
  standalone: true,
  imports: [DefaultLayoutComponent, CalendarComponent],
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.css'
})
export class CalendarPageComponent {

}
