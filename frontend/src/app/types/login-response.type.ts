import { User } from '../pages/user/user.model';

export type LoginResponse = {
  token: string;
  aluno: User | null;
  professor: User | null;
};
