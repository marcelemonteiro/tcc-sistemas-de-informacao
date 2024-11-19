import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NoticeService } from '../../services/notice.service';
import { DeleteNoticeResponse } from '../../types/delete-notice-response.type';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.css',
})
export class NoticeComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() date!: string;
  @Input() author!: string;
  @Input() isNew!: boolean;
  // TODO: Remover esse any
  @Output() delete = new EventEmitter<any>();

  constructor(private noticeService: NoticeService) {}

  handleDelete() {
    this.noticeService.deleteNotice(this.id).subscribe({
      next: (response: DeleteNoticeResponse) => {
        this.delete.emit(response.deletado);
      },
      error: (err) => {
        console.error('Erro ao deletar aviso: ', err);
      },
    });
  }
}
