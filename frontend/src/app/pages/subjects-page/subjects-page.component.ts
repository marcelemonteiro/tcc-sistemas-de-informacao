import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { MatIconModule } from '@angular/material/icon';
import { SubjectCardComponent } from '../../components/subject-card/subject-card.component';
import { SubjectService } from '../../services/subject.service';
import { Disciplina } from '../../interfaces/Disciplina.model';
import { UserService } from '../../services/user.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-subjects-page',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    SectionComponent,
    MatIconModule,
    SubjectCardComponent,
  ],
  templateUrl: './subjects-page.component.html',
  styleUrl: './subjects-page.component.css',
})
export class SubjectsPageComponent {
  subjects: Disciplina[] | null = null;
  currentUser: User | null;

  constructor(
    private subjectService: SubjectService,
    private userService: UserService
  ) {
    this.currentUser = this.userService.getCurrentUser();
    this.loadClasses();
  }

  loadClasses() {
    const classId = this.currentUser?.turma?.id;

    if (classId) {
      this.subjectService.getSubjectByClass(classId).subscribe({
        next: (subjectList) => {
          this.subjects = subjectList;
        },
        error: (error) => {
          console.error('Lista de Disciplinas não encontradas:', error);
        },
      });
    }
  }
}
