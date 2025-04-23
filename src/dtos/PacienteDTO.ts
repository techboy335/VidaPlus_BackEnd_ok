export interface CreatePacienteInputDTO {
  nome: string;
  email: string;
  telefone?: string;
  data_nascimento?: string;
  genero?: string;
}

export interface EditPacienteInputDTO {
  id: number;
  nome?: string;
  email?: string;
  telefone?: string;
  data_nascimento?: string;
  genero?: string;
}
