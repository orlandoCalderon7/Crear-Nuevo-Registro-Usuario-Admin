/**
 * SIMULACIÓN DE BASE DE DATOS
 */

import { Usuario } from '../types';

class DatabaseManager {
  private usuarios: Usuario[] = [];

  agregarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  existeUsuario(email: string): boolean {
    return this.usuarios.some(u => u.email === email);
  }

  obtenerPorEmail(email: string): Usuario | undefined {
    return this.usuarios.find(u => u.email === email);
  }

  obtenerTodos(): Usuario[] {
    return [...this.usuarios];
  }

  obtenerPorTipo(tipo: string): Usuario[] {
    return this.usuarios.filter(u => u.tipoUsuario === tipo);
  }

  obtenerTotal(): number {
    return this.usuarios.length;
  }

  limpiar(): void {
    this.usuarios = [];
  }
}

export const Database = new DatabaseManager();
