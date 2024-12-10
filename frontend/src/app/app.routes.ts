import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { NoticePageComponent } from './pages/notice-page/notice-page.component';
import { NoticeBoardPageComponent } from './pages/notice-board-page/notice-board-page.component';
import { ExamsPageComponent } from './pages/exams-page/exams-page.component';
import { ExamPageComponent } from './pages/exam-page/exam-page.component';
import { SubjectsPageComponent } from './pages/subjects-page/subjects-page.component';
import { SubjectPageComponent } from './pages/subject-page/subject-page.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UserComponent } from './pages/user/user.component';
import { CreateNoticeComponent } from './pages/create-notice/create-notice.component';
import { MatriculasComponent } from './pages/matriculas/matriculas.component';
import { ProfessoresComponent } from './pages/professores/professores.component';
import { TurmasComponent } from './pages/turmas/turmas.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { TurmasProfessorComponent } from './pages/turmas-professor/turmas-professor.component';
import { TurmaComponent } from './pages/turma/turma.component';
import { AvaliacoesProfessorComponent } from './pages/avaliacoes-professor/avaliacoes-professor.component';
import { EditarAvaliacaoComponent } from './pages/editar-avaliacao/editar-avaliacao.component';
import { NovaMatriculaComponent } from './pages/nova-matricula/nova-matricula.component';
import { EditarMatriculaComponent } from './pages/editar-matricula/editar-matricula.component';
import { NovoProfessorComponent } from './pages/novo-professor/novo-professor.component';
import { EditarProfessorComponent } from './pages/editar-professor/editar-professor.component';
import { NovaTurmaComponent } from './pages/nova-turma/nova-turma.component';
import { TurmaAlunosComponent } from './pages/turma-alunos/turma-alunos.component';
import { EditarTurmaComponent } from './pages/editar-turma/editar-turma.component';
import { DisciplinasComponent } from './pages/disciplinas/disciplinas.component';
import { NovaDisciplinaComponent } from './pages/nova-disciplina/nova-disciplina.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  {
    path: 'usuario',
    component: UserComponent,
    canActivate: [authGuard],
  },
  {
    path: 'horarios',
    component: CalendarPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'avisos',
    component: NoticeBoardPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'avisos/criar',
    component: CreateNoticeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'avisos/:id',
    component: NoticePageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'avaliacoes',
    component: ExamsPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'avaliacoes/:id',
    component: ExamPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'disciplinas',
    component: SubjectsPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'disciplinas/:id',
    component: SubjectPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'configuracoes',
    component: SettingsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'turmas/professor',
    component: TurmasProfessorComponent,
    canActivate: [authGuard],
  },
  {
    path: 'turmas/professor/:id',
    component: TurmaComponent,
    canActivate: [authGuard],
  },
  {
    path: 'professor/avaliacoes',
    component: AvaliacoesProfessorComponent,
    canActivate: [authGuard],
  },
  {
    path: 'professor/avaliacoes/editar/:id',
    component: EditarAvaliacaoComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/home',
    component: HomeAdminComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/matriculas',
    component: MatriculasComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/matriculas/nova-matricula',
    component: NovaMatriculaComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/matriculas/editar/:id',
    component: EditarMatriculaComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/professores',
    component: ProfessoresComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/professores/cadastro',
    component: NovoProfessorComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/professores/editar/:id',
    component: EditarProfessorComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/turmas',
    component: TurmasComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/turmas/criar',
    component: NovaTurmaComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/turmas/:id',
    component: TurmaAlunosComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/turmas/editar/:id',
    component: EditarTurmaComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/disciplinas',
    component: DisciplinasComponent,
    canActivate: [authGuard],
  },
  {
    path: 'admin/disciplinas/criar',
    component: NovaDisciplinaComponent,
    canActivate: [authGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];
