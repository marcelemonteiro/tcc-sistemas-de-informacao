import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../pages/user/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  // TODO: Remover any
  @Input() scheduleList: any[] = [];
  @Input() noClassHeader: boolean = false;
  currentUser: User | null;

  constructor(private userService: UserService) {
    this.currentUser =
      this.userService.getCurrentAluno() ||
      this.userService.getCurrentProfessor();
  }
}
