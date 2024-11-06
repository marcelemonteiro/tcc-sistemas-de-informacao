import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  loginError = false;

  constructor(private authService: AuthService, private router: Router) {}

  handleSubmit() {
    // TODO: Adicionar validação
    if (this.username && this.password) {
      const login = this.authService.login(this.username, this.password);

      login.subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          // TODO: Melhorar tratamento de erros
          this.loginError = true;
        },
      });
    }
  }
}
