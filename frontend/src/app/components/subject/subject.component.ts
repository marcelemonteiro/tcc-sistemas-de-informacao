import { Component, Input } from '@angular/core';
import { Subject } from './subject.model';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {
  @Input() class!: Subject;
}
