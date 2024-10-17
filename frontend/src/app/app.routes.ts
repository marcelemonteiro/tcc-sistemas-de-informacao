import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { ForumsPageComponent } from './pages/forums-page/forums-page.component';
import { NoticePageComponent } from './pages/notice-page/notice-page.component';
import { NoticeBoardPageComponent } from './pages/notice-board-page/notice-board-page.component';
import { ForumPageComponent } from './pages/forum-page/forum-page.component';
import { ExamsPageComponent } from './pages/exams-page/exams-page.component';
import { ExamPageComponent } from './pages/exam-page/exam-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  { path: 'horarios', component: CalendarPageComponent, canActivate: [authGuard] },
  { path: 'foruns', component: ForumsPageComponent, canActivate: [authGuard] },
  { path: 'avisos', component: NoticeBoardPageComponent, canActivate: [authGuard] },
  { path: 'avisos/:id', component: NoticePageComponent, canActivate: [authGuard] },
  { path: 'forums', component: ForumsPageComponent, canActivate: [authGuard] },
  { path: 'forums/:id', component: ForumPageComponent, canActivate: [authGuard] },
  { path: 'avaliacoes', component: ExamsPageComponent, canActivate: [authGuard] },
  { path: 'avaliacoes/:id', component: ExamPageComponent, canActivate: [authGuard] },
  { path: '**', component: PageNotFoundComponent },
];
