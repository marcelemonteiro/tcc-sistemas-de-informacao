import { Component } from '@angular/core';
import { SectionComponent } from "../section/section.component";

@Component({
  selector: 'app-forums',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './forums.component.html',
  styleUrl: './forums.component.css'
})
export class ForumsComponent {

}
