import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { FormularioProfessorComponent } from '../../components/formulario-professor/formulario-professor.component';

@Component({
  selector: 'app-novo-professor',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, FormularioProfessorComponent],
  templateUrl: './novo-professor.component.html',
  styleUrl: './novo-professor.component.css'
})
export class NovoProfessorComponent {

}
