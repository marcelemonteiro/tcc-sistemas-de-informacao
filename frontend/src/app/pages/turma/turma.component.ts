import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { Turma } from '../../interfaces/Turma.model';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from '../../services/class.service';

@Component({
  selector: 'app-turma',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent],
  templateUrl: './turma.component.html',
  styleUrl: './turma.component.css',
})
export class TurmaComponent {
  id: string | null;
  turma: Turma | null = null;

  constructor(
    private route: ActivatedRoute,
    private classService: ClassService,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadTurma();
  }

  loadTurma() {
    if (this.id) {
      this.classService.getClass(this.id).subscribe({
        next: (response) => {
          this.turma = response;
        },
        error: (error) => {
          console.error('Turma não encontrada:', error);
        },
      });
    }
  }
}
