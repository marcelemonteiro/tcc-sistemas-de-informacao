import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() lastUpdate!: string;
  @Input() postsNumber!: number;
  @Input() commentsNumber!: number;
  @Input() newUpdatesNumber!: number;
}
