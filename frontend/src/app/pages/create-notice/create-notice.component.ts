import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { SectionComponent } from '../../components/section/section.component';
import { FormsModule } from '@angular/forms';
import { NoticeService } from '../../services/notice.service';
import { Notice } from '../../components/notice/notice.model';
import { User } from '../user/user.model';
import { UserService } from '../../services/user.service';
import { Turma } from '../../interfaces/Turma.model';

@Component({
  selector: 'app-create-notice',
  standalone: true,
  imports: [DefaultLayoutComponent, SectionComponent, FormsModule],
  templateUrl: './create-notice.component.html',
  styleUrl: './create-notice.component.css',
})
export class CreateNoticeComponent {
  turma = '';
  titulo = '';
  conteudo = '';
  currentProfessor: User | null;
  turmasList?: Turma[];

  constructor(noticeService: NoticeService, userService: UserService) {
    this.currentProfessor = userService.getCurrentProfessor();

    const turmas = this.currentProfessor?.disciplinas?.map((disciplina) => {
      return disciplina.turma;
    });

    this.turmasList = turmas;
  }

  handleCreateNotice() {
    console.log(this.turma, this.titulo, this.conteudo);
  }
}
