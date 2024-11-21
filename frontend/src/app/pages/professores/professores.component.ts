import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { User } from '../user/user.model';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent],
  templateUrl: './professores.component.html',
  styleUrl: './professores.component.css',
})
export class ProfessoresComponent {
  professores: User[] | null = null;

  constructor(private teacherService: TeacherService) {
    this.loadTeachers();
  }

  loadTeachers() {
    this.teacherService.getAllTeachers().subscribe({
      next: (response) => {
        this.professores = response;
      },
      error: (error) => {
        console.error('Lista de professores não encontrada:', error);
      },
    });
  }
}
