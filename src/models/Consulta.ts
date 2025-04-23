// src/models/Consulta.ts

export interface Consulta {
  id: string;
  paciente_id: string;
  medico_id: string;
  data: string;       // formato: YYYY-MM-DD
  horario: string;    // formato: HH:MM
  motivo?: string;
  observacoes?: string;
  created_at: string;
  updated_at: string | null;
}
