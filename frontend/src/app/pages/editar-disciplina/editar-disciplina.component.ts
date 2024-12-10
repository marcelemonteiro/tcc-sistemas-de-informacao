import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { FormularioDisciplinaComponent } from '../../components/formulario-disciplina/formulario-disciplina.component';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { Disciplina } from '../../interfaces/Disciplina.model';

@Component({
  selector: 'app-editar-disciplina',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    SectionComponent,
    FormularioDisciplinaComponent,
  ],
  templateUrl: './editar-disciplina.component.html',
  styleUrl: './editar-disciplina.component.css',
})
export class EditarDisciplinaComponent {
  id!: string;
  disciplina!: Disciplina | null;

  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService,
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getDisciplina();
  }

  getDisciplina() {
    this.subjectService.getSubject(this.id).subscribe({
      next: (disciplina) => {
        this.disciplina = disciplina;
      },
      error: (error) => {
        console.error('Disciplina não encontrada:', error);
      },
    });
  }
}
