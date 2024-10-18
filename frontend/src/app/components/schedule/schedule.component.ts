import { Component, Input } from '@angular/core';
import { SectionComponent } from "../section/section.component";
import { MatIconModule } from '@angular/material/icon';

import { Schedule } from './schedule.model';
import { SubjectService } from '../../services/subject.service';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [SectionComponent, MatIconModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  @Input() weekSchedule!: Schedule[];

  constructor(
    private subjectService: SubjectService,
    private teacherService: TeacherService
  ) { }

  get formattedWeekSchedule() {
    const getSubjectName = (schedule: Schedule) => {
      if (schedule.idSubject) {
        const subject = this.subjectService.getSubject(schedule.idSubject)
        return { ...schedule, subjectName: subject?.name };
      }
      return { ...schedule, subjectName: "Intervalo" };
    }

    const getTeacherName = (schedule: any) => {
      if (schedule.idTeacher) {
        const teacher = this.teacherService.getTeacher(schedule.idTeacher);
        const teacherName = 
          teacher?.gender === "Feminino" ? "Prof.ª " + teacher?.name : "Prof. " + teacher?.name;
        return { ...schedule, teacherName: teacherName };
      };
      return { ...schedule, teacherName: null };
    }

    return this.weekSchedule.map(getSubjectName).map(getTeacherName);
  }

  getSubject(id: number) {
    this.subjectService.getSubject(id);
  }

}
