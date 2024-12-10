import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { Turma } from '../../interfaces/Turma.model';
import { ClassService } from '../../services/class.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-turmas',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, RouterLink],
  templateUrl: './turmas.component.html',
  styleUrl: './turmas.component.css',
})
export class TurmasComponent {
  turmas: Turma[] | null = null;

  constructor(private classService: ClassService) {
    this.loadClasses();
  }

  loadClasses() {
    this.classService.getAllClasses().subscribe({
      next: (response) => {
        this.turmas = response;
      },
      error: (err) => {
        console.error('Lista de turmas não encontrada:', err);
      },
    });
  }
}
