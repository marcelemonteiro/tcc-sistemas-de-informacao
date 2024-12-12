import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { Turma } from '../../interfaces/Turma.model';
import { ClassService } from '../../services/class.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-diario',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, RouterLink],
  templateUrl: './diario.component.html',
  styleUrl: './diario.component.css',
})
export class DiarioComponent {
  turmas: Turma[] | null = null;
  activeTab = '';
  listagem = true;
  registro = false;

  constructor(private classService: ClassService) {
    this.loadTurmas();
  }

  loadTurmas() {
    this.classService.getAllClasses().subscribe({
      next: (response) => {
        this.turmas = response;
        this.enableTab(this.turmas[0].id);
      },
      error: (error) => {
        console.error('Turmas não encontradas:', error);
      },
    });
  }

  enableTab(turmaId: string) {
    this.activeTab = turmaId;
  }

  enableListagem() {
    this.listagem = true;
    this.registro = false;
  }

  enableRegistro() {
    this.listagem = false;
    this.registro = true;
  }
}
