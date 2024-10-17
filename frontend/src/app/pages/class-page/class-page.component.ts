import { Component } from '@angular/core';
import { DefaultLayoutComponent } from "../../components/default-layout/default-layout.component";
import { ClassComponent } from "../../components/class/class.component";
import { Class } from '../../components/class/class.model';
import { SectionComponent } from "../../components/section/section.component";

@Component({
  selector: 'app-class-page',
  standalone: true,
  imports: [DefaultLayoutComponent, ClassComponent, SectionComponent],
  templateUrl: './class-page.component.html',
  styleUrl: './class-page.component.css'
})
export class ClassPageComponent {
  classMock: Class = {
    id: 1,
    nome: "Matemática",
    idTurma: 2,
    idProfessor: 10
  }
}
