import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { User } from '../user/user.model';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    DefaultLayoutComponent,
    SectionComponent,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  newPassword = '';
  currentUser: User | null;
  error = false;
  isPasswordUpdated = false;

  constructor(private userService: UserService) {
    this.currentUser = userService.getCurrentUser();
  }

  handleNewPasswordSubmit() {
    const userEmail = this.currentUser?.email;

    if (userEmail) {
      this.userService
        .updateUserPassword(userEmail, this.newPassword)
        .subscribe({
          next: () => {
            console.log('ok!');
            this.isPasswordUpdated = true;
          },
          error: (error) => {
            console.error(
              'Não foi possível alterar a senha de acesso do usuário:',
              error,
            );
            this.error = true;
          },
        });
    }
  }
}
