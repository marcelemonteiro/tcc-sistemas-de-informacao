import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { User } from '../user/user.model';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-matriculas',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, RouterLink, DatePipe],
  templateUrl: './matriculas.component.html',
  styleUrl: './matriculas.component.css',
})
export class MatriculasComponent {
  matriculas: User[] | null = null;

  constructor(private userService: UserService) {
    this.loadMatriculas();
  }

  loadMatriculas() {
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.matriculas = response;
        console.log(response);
      },
    });
  }
}
