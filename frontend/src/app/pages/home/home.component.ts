import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { DefaultLayoutComponent } from "../../components/default-layout/default-layout.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, DashboardComponent, DefaultLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
