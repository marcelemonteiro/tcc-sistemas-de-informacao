import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CalendarPageComponent } from './components/calendar-page/calendar-page.component';
import { ForumsPageComponent } from './components/forums-page/forums-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  { path: 'horarios', component: CalendarPageComponent, canActivate: [authGuard] },
  { path: 'foruns', component: ForumsPageComponent, canActivate: [authGuard] },
  { path: '**', component: PageNotFoundComponent },
];
