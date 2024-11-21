import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Notice } from '../components/notice/notice.model';
import { Observable } from 'rxjs';
import { DeleteNoticeResponse } from '../types/delete-notice-response.type';

@Injectable({
  providedIn: 'root',
})
export class NoticeService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getNoticesByAluno(userId: string) {
    return this.http.get<Notice[]>(
      `http://localhost:8080/aviso/aluno/${userId}`,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      }
    );
  }

  getNoticesByProfessor(userId: string) {
    return this.http.get<Notice[]>(
      `http://localhost:8080/aviso/professor/${userId}`,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      }
    );
  }

  getNotice(noticeId: string) {
    return this.http.get<Notice>(`http://localhost:8080/aviso/${noticeId}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }

  createNotice(notice: Notice) {
    return this.http.post('http://localhost:8080/aviso', notice, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken(),
      }),
    });
  }

  updateNotice(noticeId: string) {
    // TODO: Implementar updateNotice
  }

  deleteNotice(noticeId: string): Observable<DeleteNoticeResponse> {
    return this.http.delete<DeleteNoticeResponse>(
      `http://localhost:8080/aviso/${noticeId}`,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      }
    );
  }
}
