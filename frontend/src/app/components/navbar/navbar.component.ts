import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { User } from '../../pages/user/user.model';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  authService = inject(AuthService);
  router = inject(Router);
  isMobileNavbar = false;
  user: User | null;

  constructor(private userService: UserService) {
    this.user =
      this.userService.getCurrentAluno() ||
      this.userService.getCurrentProfessor();

    if (this.user === null) {
      this.user = this.userService.getCurrentUser();
    }
    console.log(this.user);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  enableMobileNavbar() {
    this.isMobileNavbar = !this.isMobileNavbar;
  }
}
