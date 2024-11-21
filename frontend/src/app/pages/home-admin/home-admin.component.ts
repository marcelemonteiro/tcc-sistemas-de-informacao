import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css',
})
export class HomeAdminComponent {}
