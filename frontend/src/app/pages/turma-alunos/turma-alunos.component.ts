import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Turma } from '../../interfaces/Turma.model';
import { ClassService } from '../../services/class.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-turma-alunos',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, DatePipe, RouterLink],
  templateUrl: './turma-alunos.component.html',
  styleUrl: './turma-alunos.component.css',
})
export class TurmaAlunosComponent {
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
