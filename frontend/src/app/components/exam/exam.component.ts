import { Component, Input } from '@angular/core';
import { Exam } from './exam.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {
  @Input() exam!: Exam;
}
