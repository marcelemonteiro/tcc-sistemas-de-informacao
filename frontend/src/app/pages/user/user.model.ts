export interface User {
  id: string;
  nome: string;
  cpf: string;
  dataNascimento: string;
  matricula: string;
  serieAno: string;
  turmaId: string;
  endereco: string;
  email: string;
  telefone: string;
  usuario: {
    id: string;
    role: string;
  };
}
