import { User } from '../../pages/user/user.model';

export interface Notice {
  id: string;
  professor: User;
  aluno: User;
  titulo: string;
  conteudo: string;
  dataEnvio: string;
  statusLeitura: string;
}
