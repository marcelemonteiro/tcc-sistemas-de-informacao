import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { FormularioMatriculaComponent } from '../../components/formulario-matricula/formulario-matricula.component';

@Component({
  selector: 'app-nova-matricula',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, FormularioMatriculaComponent],
  templateUrl: './nova-matricula.component.html',
  styleUrl: './nova-matricula.component.css'
})
export class NovaMatriculaComponent {

}
