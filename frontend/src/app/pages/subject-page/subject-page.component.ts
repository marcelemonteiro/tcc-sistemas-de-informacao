import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { MatIconModule } from '@angular/material/icon';
import { ScheduleComponent } from '../../components/schedule/schedule.component';

import { Disciplina } from '../../interfaces/Disciplina.model';
import { SubjectService } from '../../services/subject.service';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from '../../services/calendar.service';
import { User } from '../user/user.model';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs';

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
  id: string | null;
  subject: Disciplina | null = null;
  currentUser: User | null;
  // TODO: Remover any
  calendarList: any = {};
  diasUteis = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
  ];

  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private calendarService: CalendarService,
    private userService: UserService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.currentUser = this.userService.getCurrentAluno() || this.userService.getCurrentProfessor();

    this.loadSubject();
    this.loadSchedule();
  }

  loadSubject() {
    if (this.id) {
      this.subjectService.getSubject(this.id).subscribe({
        next: (subjectData) => {
          this.subject = subjectData;
        },
        error: (error) => {
          console.error('Disciplina não encontrada:', error);
        },
      });
    }
  }

  loadSchedule() {
    const classId = this.currentUser?.turma?.id;

    if (classId) {
      this.calendarService
        .getCalendarByTurma()
        .pipe(
          map((calendarList) => {
            const filteredCalendar = calendarList.filter(
              (calendar) => calendar.disciplina.id === this.id
            );
            return filteredCalendar;
          })
        )
        .subscribe({
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
}
