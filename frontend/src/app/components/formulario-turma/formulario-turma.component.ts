import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClassService } from '../../services/class.service';

@Component({
  selector: 'app-formulario-turma',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './formulario-turma.component.html',
  styleUrl: './formulario-turma.component.css',
})
export class FormularioTurmaComponent {
  @Input() nome = '';
  @Input() serieAno = '1º ano';
  @Input() turno = 'MANHA';
  @Input() action!: string;
  serieAnoList: string[] = Array(9)
    .fill('')
    .map((_, index) => `${index + 1}º ano`);

  constructor(
    private classService: ClassService,
    private router: Router,
  ) {}

  handleCreateTurmaSubmit() {
    const turma = {
      nome: this.nome,
      serieAno: this.serieAno,
      turno: this.turno,
    };
    this.classService.createClass(turma).subscribe({
      next: () => {
        this.router.navigate(['/admin/turmas']);
      },
      error: (error) => {
        console.error('Erro ao criar turma:', error);
      },
    });
  }
}
