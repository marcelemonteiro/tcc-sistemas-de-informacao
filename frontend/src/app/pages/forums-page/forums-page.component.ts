import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { ForumsComponent } from '../../components/forums/forums.component';

@Component({
  selector: 'app-forums-page',
  standalone: true,
  imports: [DefaultLayoutComponent, ForumsComponent],
  templateUrl: './forums-page.component.html',
  styleUrl: './forums-page.component.css'
})
export class ForumsPageComponent {

}
