import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { FormularioAvaliacaoComponent } from '../../components/formulario-avaliacao/formulario-avaliacao.component';

@Component({
  selector: 'app-nova-avaliacao',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    SectionComponent,
    FormularioAvaliacaoComponent,
  ],
  templateUrl: './nova-avaliacao.component.html',
  styleUrl: './nova-avaliacao.component.css',
})
export class NovaAvaliacaoComponent {}
