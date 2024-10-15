import { Component } from '@angular/core';
import { SectionComponent } from "../section/section.component";
import { ForumComponent } from "./forum/forum.component";

@Component({
  selector: 'app-forums',
  standalone: true,
  imports: [SectionComponent, ForumComponent],
  templateUrl: './forums.component.html',
  styleUrl: './forums.component.css'
})
export class ForumsComponent {

}
