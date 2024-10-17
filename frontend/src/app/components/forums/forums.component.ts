import { Component, Input } from '@angular/core';
import { SectionComponent } from "../section/section.component";
import { ForumComponent } from "./forum/forum.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forums',
  standalone: true,
  imports: [SectionComponent, ForumComponent, RouterLink],
  templateUrl: './forums.component.html',
  styleUrl: './forums.component.css'
})
export class ForumsComponent {
  @Input() allForumsBtn = true;
}
