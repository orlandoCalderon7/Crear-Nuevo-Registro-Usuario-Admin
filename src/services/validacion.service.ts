/**
 * SERVICIO DE VALIDACIONES
 */

export class ValidacionService {
  
  static validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  static validarNombre(nombre: string, minLength: number = 3): boolean {
    return nombre.length >= minLength;
  }

  static validarExperiencia(años: number): boolean {
    return años >= 0 && años <= 50;
  }
}
