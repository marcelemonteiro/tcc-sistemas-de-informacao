import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { FormularioTurmaComponent } from '../../components/formulario-turma/formulario-turma.component';

@Component({
  selector: 'app-nova-turma',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, FormularioTurmaComponent],
  templateUrl: './nova-turma.component.html',
  styleUrl: './nova-turma.component.css',
})
export class NovaTurmaComponent {}
