import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'app-editar-avaliacao',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent],
  templateUrl: './editar-avaliacao.component.html',
  styleUrl: './editar-avaliacao.component.css'
})
export class EditarAvaliacaoComponent {

}
