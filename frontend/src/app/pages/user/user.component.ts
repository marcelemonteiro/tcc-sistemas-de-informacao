import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { UserService } from '../../services/user.service';
import { User } from './user.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, DatePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user: User | undefined;

  constructor(private userService: UserService) {
    this.loadUser();
  }

  loadUser() {
    const currentUser = this.userService.getCurrentAluno() || this.userService.getCurrentProfessor();
    if (currentUser) {
      this.user = currentUser;
    }
  }
}
