import { Component, Input } from '@angular/core';
import { Class } from './class.model';

@Component({
  selector: 'app-class',
  standalone: true,
  imports: [],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent {
  @Input() class!: Class;
}
