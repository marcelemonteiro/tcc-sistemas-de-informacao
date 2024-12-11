import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { FormularioAvaliacaoComponent } from '../../components/formulario-avaliacao/formulario-avaliacao.component';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../../services/exam.service';
import { Exam } from '../../components/exam/exam.model';

@Component({
  selector: 'app-editar-avaliacao',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    SectionComponent,
    FormularioAvaliacaoComponent,
  ],
  templateUrl: './editar-avaliacao.component.html',
  styleUrl: './editar-avaliacao.component.css',
})
export class EditarAvaliacaoComponent {
  id: string | null;
  avaliacao: Exam | null = null;

  constructor(
    private route: ActivatedRoute,
    private examService: ExamService,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getAvaliacao();
  }

  getAvaliacao() {
    if (this.id) {
      this.examService.getExam(this.id).subscribe({
        next: (response) => {
          this.avaliacao = response;
        },
        error: (error) => {
          console.error('Erro ao obter disciplina:', error);
        },
      });
    }
  }
}
