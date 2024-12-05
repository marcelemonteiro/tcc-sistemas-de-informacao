import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { RouterLink } from '@angular/router';
import { ClassService } from '../../services/class.service';
import { Turma } from '../../interfaces/Turma.model';

@Component({
  selector: 'app-turmas-professor',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, RouterLink],
  templateUrl: './turmas-professor.component.html',
  styleUrl: './turmas-professor.component.css',
})
export class TurmasProfessorComponent {
  turmas: Turma[] | null = null;

  constructor(private classService: ClassService) {
    this.loadTurmas();
  }

  loadTurmas() {
    this.classService.getAllClasses().subscribe({
      next: (response) => {
        this.turmas = response;
      },
      error: (error) => {
        console.error('Turmas não encontradas:', error);
      },
    });
  }
}
