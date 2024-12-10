import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { FormularioDisciplinaComponent } from '../../components/formulario-disciplina/formulario-disciplina.component';

@Component({
  selector: 'app-nova-disciplina',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    SectionComponent,
    FormularioDisciplinaComponent,
  ],
  templateUrl: './nova-disciplina.component.html',
  styleUrl: './nova-disciplina.component.css',
})
export class NovaDisciplinaComponent {}
