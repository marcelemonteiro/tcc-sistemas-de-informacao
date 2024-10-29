import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { ForumComponent } from '../../components/forums/forum/forum.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-forum-page',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    SectionComponent,
    ForumComponent,
    MatIconModule,
  ],
  templateUrl: './forum-page.component.html',
  styleUrl: './forum-page.component.css',
})
export class ForumPageComponent {}
