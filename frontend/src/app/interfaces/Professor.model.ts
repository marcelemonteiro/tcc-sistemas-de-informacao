import { User } from '../pages/user/user.model';

export interface Professor {
  id: string;
  usuario: User;
  nome: string;
  cpf: string;
  dataNascimento: string;
  email: string;
  telefone: string;
}

export interface Usuario {
  id: string;
  email: string;
  password: string;
  role: string;
  username: string;
  authorities: Authority[];
  enabled: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
}

export interface Authority {
  authority: string;
}
