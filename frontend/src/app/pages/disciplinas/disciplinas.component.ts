import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { RouterLink } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { Disciplina } from '../../interfaces/Disciplina.model';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, RouterLink],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.css',
})
export class DisciplinasComponent {
  disciplinas!: Disciplina[] | null;

  constructor(private subjectService: SubjectService) {
    this.getDisciplinas();
  }

  getDisciplinas() {
    this.subjectService.getAllSubjects().subscribe({
      next: (disciplinas) => {
        this.disciplinas = disciplinas;
        console.log(disciplinas);
      },
      error: (error) => {
        console.error('Erro ao obter lista de disciplinas:', error);
      },
    });
  }

  handleDeleteDisciplina(id: string) {
    this.subjectService.deleteSubject(id).subscribe({
      next: () => {
        if (this.disciplinas) {
          this.disciplinas = this.disciplinas?.filter(
            (disciplina) => disciplina.id !== id,
          );
        }
      },
      error: (error) => {
        console.error('Erro ao deletar disciplina:', error);
      },
    });
  }
}
