import { Component } from '@angular/core';
import { DefaultLayoutComponent } from "../../components/default-layout/default-layout.component";
import { SubjectComponent } from "../../components/subject/subject.component";
import { Subject } from '../../components/subject/subject.model';
import { SectionComponent } from "../../components/section/section.component";
import { MatIconModule } from '@angular/material/icon';
import { ScheduleComponent } from "../../components/schedule/schedule.component";

@Component({
  selector: 'app-class-page',
  standalone: true,
  imports: [DefaultLayoutComponent, SubjectComponent, SectionComponent, MatIconModule, ScheduleComponent],
  templateUrl: './class-page.component.html',
  styleUrl: './class-page.component.css'
})
export class ClassPageComponent {
  // classMock: Subject = {
  //   id: 1,
  //   name: "Matemática",
  //   idTurma: 2,
  //   idProfessor: 10
  // }
}
