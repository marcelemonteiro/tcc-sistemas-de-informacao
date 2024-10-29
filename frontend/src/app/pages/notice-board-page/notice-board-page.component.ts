import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';

@Component({
  selector: 'app-notice-board-page',
  standalone: true,
  imports: [DefaultLayoutComponent],
  templateUrl: './notice-board-page.component.html',
  styleUrl: './notice-board-page.component.css',
})
export class NoticeBoardPageComponent {}
