import { User } from '../../pages/user/user.model';

export interface Notice {
  id: string;
  remetente: User;
  destinatario: User;
  titulo: string;
  conteudo: string;
  dataEnvio: string;
  statusLeitura: string;
}
