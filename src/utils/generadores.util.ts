/**
 * UTILIDADES: Generadores
 */

let contadorUsuarios = 0;

export function generarId(): string {
  contadorUsuarios++;
  const idFormateado = contadorUsuarios.toString().padStart(4, '0');
  return `USR-${idFormateado}`;
}

export function generarMatricula(): string {
  const año = new Date().getFullYear();
  const numero = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `EST-${año}-${numero}`;
}

export function reiniciarContador(): void {
  contadorUsuarios = 0;
}
