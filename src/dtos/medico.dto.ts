export interface CreateMedicoDTO {
  nome: string;
  crm: string;
  especialidade: string;
  email: string;
  telefone: string;
}

export interface UpdateMedicoDTO {
  nome?: string;
  crm?: string;
  especialidade?: string;
  email?: string;
  telefone?: string;
}
