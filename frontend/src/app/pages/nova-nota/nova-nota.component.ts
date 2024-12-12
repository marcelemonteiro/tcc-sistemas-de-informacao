import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { FormularioNotaComponent } from '../../components/formulario-nota/formulario-nota.component';
import { Exam } from '../../components/exam/exam.model';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../../services/exam.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nova-nota',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    SectionComponent,
    FormularioNotaComponent,
    FormsModule,
  ],
  templateUrl: './nova-nota.component.html',
  styleUrl: './nova-nota.component.css',
})
export class NovaNotaComponent {
  id: string | null;
  avaliacao: Exam | null = null;
  notas: any[] = [];
  update = false;

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

          console.log(response);

          this.notas = this.avaliacao.disciplina.turma.alunos.map(
            (aluno: any) => {
              const nota = this.avaliacao?.notas.find(
                (nota: any) => nota.aluno.id === aluno.id,
              );

              return {
                notaId: nota.id,
                alunoId: aluno.id,
                avaliacaoId: this.avaliacao?.id,
                aluno: aluno.nome,
                resultado: nota?.resultado || '',
                update: false,
              };
            },
          );

          console.log(this.notas);
        },
        error: (error) => {
          console.error('Erro ao obter disciplina:', error);
        },
      });
    }
  }

  handleCriaNota(index: number) {
    console.log(index);
    const nota = {
      avaliacao: this.notas[index].avaliacaoId,
      aluno: this.notas[index].alunoId,
      resultado: Number(this.notas[index].resultado),
    };

    if (this.notas[index].update && this.id) {
      this.examService
        .updateExamResult(this.notas[index].notaId, nota)
        .subscribe({
          next: (response) => {
            console.log('atualizadoo', response);
            this.notas[index].update = false;
          },
          error: (error) => {
            console.error('Erro ao registrar nota:', error);
          },
        });
    }

    if (this.notas[index].update === false) {
      this.examService.postExamResult(nota).subscribe({
        next: (response) => {
          console.log('criado', response);
          this.notas[index].update = false;
        },
        error: (error) => {
          console.error('Erro ao registrar nota:', error);
        },
      });
    }
  }

  enableUpdate(index: number) {
    this.notas[index].update = true;
  }
}
