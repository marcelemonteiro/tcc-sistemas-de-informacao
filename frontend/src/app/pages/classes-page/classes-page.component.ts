import { Component } from '@angular/core';
import { DefaultLayoutComponent } from "../../components/default-layout/default-layout.component";
import { SectionComponent } from "../../components/section/section.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-classes-page',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, RouterLink],
  templateUrl: './classes-page.component.html',
  styleUrl: './classes-page.component.css'
})
export class ClassesPageComponent {
  classesMock = [
    { id: 1, name: "Matemática" },
    { id: 2, name: "Português" },
    { id: 3, name: "Inglês" }
  ]
}
