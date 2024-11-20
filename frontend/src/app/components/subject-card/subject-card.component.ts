import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-subject-card',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './subject-card.component.html',
  styleUrl: './subject-card.component.css',
})
export class SubjectCardComponent {
  @Input() subjectId!: string;
  @Input() subjectName!: string;
  @Input() teacherName!: string;
}
