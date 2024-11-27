export interface UpdateNoticeRequest {
  id: string;
  professor: string;
  aluno: string;
  titulo: string;
  conteudo: string;
  dataEnvio: string;
  statusLeitura: string;
}
