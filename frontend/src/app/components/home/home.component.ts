import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
