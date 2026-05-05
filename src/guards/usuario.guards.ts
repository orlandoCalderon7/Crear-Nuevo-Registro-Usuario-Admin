/**
 * TYPE GUARDS
 * Funciones para verificar tipos en tiempo de ejecución
 */

import { Usuario, Estudiante, Docente, Administrador } from '../types';

export function esEstudiante(usuario: Usuario): usuario is Estudiante {
  return usuario.tipoUsuario === "estudiante";
}

export function esDocente(usuario: Usuario): usuario is Docente {
  return usuario.tipoUsuario === "docente";
}

export function esAdministrador(usuario: Usuario): usuario is Administrador {
  return usuario.tipoUsuario === "administrador";
}
