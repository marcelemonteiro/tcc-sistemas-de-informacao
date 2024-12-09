import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { User } from '../user/user.model';
import { TeacherService } from '../../services/teacher.service';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, RouterLink],
  templateUrl: './professores.component.html',
  styleUrl: './professores.component.css',
})
export class ProfessoresComponent {
  professores: User[] | null = null;

  constructor(private teacherService: TeacherService, private userService: UserService) {
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

  handleDelete(userId: string) {
    this.userService.deleteUser(userId).subscribe({
      next:  () => {
        if (this.professores) {
          this.professores = this.professores.filter(({ usuario }) => usuario.id !== userId);
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
