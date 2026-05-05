/**
 * UTILIDADES: Formateo de salida
 */

import { Usuario } from '../types';
import { esEstudiante, esDocente, esAdministrador } from '../guards';

export function mostrarDetallesUsuario(usuario: Usuario): void {
  console.log("\n Detalles del Usuario:");
  console.log(`  ID: ${usuario.id}`);
  console.log(`  Nombre: ${usuario.nombre}`);
  console.log(`  Email: ${usuario.email}`);
  console.log(`  Tipo: ${usuario.tipoUsuario.toUpperCase()}`);
  
  if (esEstudiante(usuario)) {
    console.log(`  Grado: ${usuario.grado}`);
    console.log(`  Matrícula: ${usuario.matricula}`);
    if (usuario.cursos && usuario.cursos.length > 0) {
      console.log(`  Cursos: ${usuario.cursos.join(", ")}`);
    }
  } else if (esDocente(usuario)) {
    console.log(`  Especialidad: ${usuario.especialidad}`);
    console.log(`  Departamento: ${usuario.departamento}`);
    console.log(`  Años de Experiencia: ${usuario.añosExperiencia}`);
  } else if (esAdministrador(usuario)) {
    console.log(`  Nivel: ${usuario.nivel}`);
    console.log(`  Permisos: ${usuario.permisos.join(", ")}`);
  }
  
  console.log(`  Fecha de Registro: ${usuario.fechaRegistro.toLocaleString('es-PE')}`);
}
