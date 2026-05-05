/**
 * INTEGRANTE 2: MODELADO CON INTERFACE
 * Interfaces para resultados y respuestas
 */

import { Usuario } from '../types';

export interface ResultadoRegistro {
  exito: boolean;
  mensaje: string;
  usuario?: Usuario;
  timestamp: Date;
}

export interface EstadisticasPlataforma {
  totalEstudiantes: number;
  totalDocentes: number;
  totalAdministradores: number;
  obtenerTotal(): number;
  obtenerPorcentaje(tipo: string): number;
}
