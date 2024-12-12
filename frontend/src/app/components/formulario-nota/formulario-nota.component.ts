import { Component, Input } from '@angular/core';
import { User } from '../../pages/user/user.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-nota',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './formulario-nota.component.html',
  styleUrl: './formulario-nota.component.css',
})
export class FormularioNotaComponent {
  @Input() alunos!: User[];

  handleCreateNotaSubmit() {}
}
