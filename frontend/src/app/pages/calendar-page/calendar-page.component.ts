import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { ScheduleComponent } from '../../components/schedule/schedule.component';
import { SectionComponent } from '../../components/section/section.component';
import { Schedule } from '../../components/schedule/schedule.model';
import { mockSchedules } from '../../mock-data';
import { CalendarService } from '../../services/calendar.service';
import { Calendar } from '../../interfaces/Calendar.model';
import { User } from '../user/user.model';
import { UserService } from '../../services/user.service';

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
  currentUser: User | null;

  constructor(
    private userService: UserService,
    private calendarService: CalendarService,
  ) {
    this.currentUser =
      this.userService.getCurrentAluno() ||
      this.userService.getCurrentProfessor();

    if (this.currentUser?.usuario.role === 'ALUNO') {
      this.loadCalendarAluno();
    }

    if (this.currentUser?.usuario.role === 'PROFESSOR') {
      this.loadCalendarProfessor();
    }
  }

  loadCalendarAluno() {
    const turma = this.currentUser?.turma?.id;

    if (turma) {
      this.calendarService.getCalendarByTurma(turma).subscribe({
        next: (calendarList) => {
          this.diasUteis.forEach((dia) => {
            const filteredList = calendarList.filter(
              (calendar) => calendar.diaSemana === dia,
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

  loadCalendarProfessor() {
    const turmas = this.currentUser?.disciplinas?.map(
      (disciplina) => disciplina.turma.id,
    );
    const disciplinas = this.currentUser?.disciplinas?.map(
      (disciplina) => disciplina.id,
    );

    if (turmas) {
      turmas.forEach((turma) => {
        this.calendarService.getCalendarByTurma(turma).subscribe({
          next: (calendarList) => {
            this.diasUteis.forEach((dia) => {
              const filterByDisciplina = calendarList.filter((data) =>
                disciplinas?.includes(data.disciplina.id),
              );

              const filteredList = filterByDisciplina.filter(
                (calendar) => calendar.diaSemana === dia,
              );

              if (filteredList.length > 0) {
                const key = dia as keyof typeof this.calendarList;
                this.calendarList[key] = filteredList;
              }
            });
          },
          error: (error) => {
            console.error(`Turma com id ${turma} não encontrada:`, error);
          },
        });
      });
    }
  }
}
