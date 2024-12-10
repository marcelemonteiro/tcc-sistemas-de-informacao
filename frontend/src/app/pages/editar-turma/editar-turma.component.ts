import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { FormularioTurmaComponent } from '../../components/formulario-turma/formulario-turma.component';
import { ClassService } from '../../services/class.service';
import { ActivatedRoute } from '@angular/router';
import { Turma } from '../../interfaces/Turma.model';

@Component({
  selector: 'app-editar-turma',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, FormularioTurmaComponent],
  templateUrl: './editar-turma.component.html',
  styleUrl: './editar-turma.component.css',
})
export class EditarTurmaComponent {
  turmaId!: string | null;
  turma: Turma | null = null;

  constructor(
    private route: ActivatedRoute,
    private classService: ClassService,
  ) {
    this.turmaId = this.route.snapshot.paramMap.get('id');
    this.getTurma();
  }

  getTurma() {
    if (this.turmaId) {
      this.classService.getClass(this.turmaId).subscribe({
        next: (turmaResponse) => {
          this.turma = turmaResponse;
        },
        error: (error) => {
          console.error('Não foi possível achar a turma:', error);
        },
      });
    }
  }
}
