import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.css'
})
export class NoticeComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() date!: string;
  @Input() author!: string;
  @Input() isNew!: boolean;
}
