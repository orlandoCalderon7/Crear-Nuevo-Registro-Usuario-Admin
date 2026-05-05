/**
 * GESTIÓN DE ESTADÍSTICAS
 */

import { EstadisticasPlataforma } from '../interfaces';

class EstadisticasManager implements EstadisticasPlataforma {
  totalEstudiantes: number = 0;
  totalDocentes: number = 0;
  totalAdministradores: number = 0;

  obtenerTotal(): number {
    return this.totalEstudiantes + this.totalDocentes + this.totalAdministradores;
  }

  obtenerPorcentaje(tipo: string): number {
    const total = this.obtenerTotal();
    if (total === 0) return 0;

    switch(tipo) {
      case 'estudiante':
        return (this.totalEstudiantes / total) * 100;
      case 'docente':
        return (this.totalDocentes / total) * 100;
      case 'administrador':
        return (this.totalAdministradores / total) * 100;
      default:
        return 0;
    }
  }

  incrementarEstudiantes(): void {
    this.totalEstudiantes++;
  }

  incrementarDocentes(): void {
    this.totalDocentes++;
  }

  incrementarAdministradores(): void {
    this.totalAdministradores++;
  }

  mostrar(): void {
    console.log("\n ESTADÍSTICAS DE LA PLATAFORMA");
    console.log("═".repeat(50));
    console.log(` Total Estudiantes: ${this.totalEstudiantes} (${this.obtenerPorcentaje('estudiante').toFixed(1)}%)`);
    console.log(` Total Docentes: ${this.totalDocentes} (${this.obtenerPorcentaje('docente').toFixed(1)}%)`);
    console.log(` Total Administradores: ${this.totalAdministradores} (${this.obtenerPorcentaje('administrador').toFixed(1)}%)`);
    console.log(` Total Usuarios: ${this.obtenerTotal()}`);
    console.log("═".repeat(50));
  }
}

export const Estadisticas = new EstadisticasManager();
