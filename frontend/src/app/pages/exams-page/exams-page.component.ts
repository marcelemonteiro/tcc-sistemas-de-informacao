import { Component } from '@angular/core';
import { DefaultLayoutComponent } from "../../components/default-layout/default-layout.component";
import { SectionComponent } from "../../components/section/section.component";
import { ExamComponent } from "../../components/exam/exam.component";

@Component({
  selector: 'app-exams-page',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, ExamComponent],
  templateUrl: './exams-page.component.html',
  styleUrl: './exams-page.component.css'
})
export class ExamsPageComponent {
  examMock = {
    id: 1,
    title: "Prova de Matemática",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec nulla sed nulla pulvinar bibendum. Mauris luctus elit vitae massa mollis convallis. Integer consequat diam ac vulputate sollicitudin. Mauris sed egestas diam. Etiam hendrerit, ex in ornare viverra, nisi felis interdum mauris, quis commodo dolor justo sed dolor.",
    type: "Prova",
    dateStart: "17/10/2024 às 11h",
    dateEnd: "17/10/2024 às 12h30",
    idDisciplina: 2
  }
}
