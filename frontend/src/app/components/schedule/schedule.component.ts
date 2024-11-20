import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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
  @Input() noClassHeader: boolean = false;

  constructor() {}
}
