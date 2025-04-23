// src/dtos/ConsultaDTO.ts

export interface CreateConsultaInputDTO {
  paciente_id: number;
  medico_id: string;
  data: string; // formato: YYYY-MM-DD
  horario: string; // formato: HH:MM
  motivo?: string;
  observacoes?: string;
}

export interface EditConsultaInputDTO {
  id: number;
  data?: string;
  horario?: string;
  motivo?: string;
  observacoes?: string;
}
