import { Component, Input } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { MatIconModule } from '@angular/material/icon';

import { Schedule } from './schedule.model';
import { SubjectService } from '../../services/subject.service';
import { TeacherService } from '../../services/teacher.service';
import { Calendar } from '../../interfaces/Calendar.model';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  // TODO: Remover any
  @Input() scheduleList: any[] = [];

  constructor() {}
}
