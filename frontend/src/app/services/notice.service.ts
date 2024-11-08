import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Notice } from '../components/notice/notice.model';

@Injectable({
  providedIn: 'root',
})
export class NoticeService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getNoticesByUserId(id: string) {
    return this.http.get<Notice[]>(
      `http://localhost:8080/aviso/destinatario/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      }
    );
  }
}
