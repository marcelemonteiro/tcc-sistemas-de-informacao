import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { MatIconModule } from '@angular/material/icon';
import { ScheduleComponent } from '../../components/schedule/schedule.component';

import { mockSchedules } from '../../mock-data';
import { Schedule } from '../../components/schedule/schedule.model';

@Component({
  selector: 'app-subject-page',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    SectionComponent,
    MatIconModule,
    ScheduleComponent,
  ],
  templateUrl: './subject-page.component.html',
  styleUrl: './subject-page.component.css',
})
export class SubjectPageComponent {
  scheduleMock: Schedule[] = mockSchedules;

  get scheduleMockBySubject(): Schedule[] {
    return this.scheduleMock.filter((schedule) => schedule.idSubject === 1);
  }
}
