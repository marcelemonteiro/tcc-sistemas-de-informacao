import { Component } from '@angular/core';
import { DefaultLayoutComponent } from "../../components/default-layout/default-layout.component";
import { SectionComponent } from "../../components/section/section.component";
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SubjectCardComponent } from "../../components/subject-card/subject-card.component";

@Component({
  selector: 'app-subjects-page',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, RouterLink, MatIconModule, SubjectCardComponent],
  templateUrl: './subjects-page.component.html',
  styleUrl: './subjects-page.component.css'
})
export class SubjectsPageComponent {
  classesMock = [
    { id: 1, name: "Matemática" },
    { id: 2, name: "Português" },
    { id: 3, name: "Inglês" }
  ]
}
