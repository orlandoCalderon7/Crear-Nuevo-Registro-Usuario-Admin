/**
 * PROGRAMA PRINCIPAL
 */

import { RegistroService } from './services';
import { Estadisticas } from './data';
import { mostrarDetallesUsuario } from './utils';
import { CONSTANTES } from './config/sistema.config';

console.log(` ${CONSTANTES.NOMBRE_SISTEMA.toUpperCase()}`);
console.log(` Versión: ${CONSTANTES.VERSION}`);
console.log("═".repeat(60));

// REGISTRAR ADMINISTRADORES
console.log("\n REGISTRANDO ADMINISTRADORES...");

const resultado1 = RegistroService.registrarUsuario(
  "Robert Admin",
  "robert.admin@plataforma.edu",
  "administrador",
  "super",
  ["crear_usuarios", "eliminar_usuarios", "modificar_config"]
);
console.log(resultado1.mensaje);
if (resultado1.usuario) mostrarDetallesUsuario(resultado1.usuario);

// REGISTRAR ESTUDIANTES
console.log("\n REGISTRANDO ESTUDIANTES...");

const resultado2 = RegistroService.registrarUsuario(
  "María Gonzales",
  "maria.gonzales@estudiante.edu",
  "estudiante",
  "5to Secundaria",
  "EST-2026-001",
  ["Matemáticas", "Física", "Química"]
);
console.log(resultado2.mensaje);
if (resultado2.usuario) mostrarDetallesUsuario(resultado2.usuario);

const resultado3 = RegistroService.registrarUsuario(
  "Juan Hernandez",
  "juan.hernandez@estudiante.edu",
  "estudiante",
  "3ro Secundaria",
  "EST-2026-002"
);
console.log(resultado3.mensaje);
if (resultado3.usuario) mostrarDetallesUsuario(resultado3.usuario);

// REGISTRAR DOCENTES
console.log("\n REGISTRANDO DOCENTES...");

const resultado4 = RegistroService.registrarUsuario(
  "Dr. Carlos Ruiz",
  "carlos.ruiz@docente.edu",
  "docente",
  "Matemáticas Avanzadas",
  "Ciencias Exactas",
  15
);
console.log(resultado4.mensaje);
if (resultado4.usuario) mostrarDetallesUsuario(resultado4.usuario);

const resultado5 = RegistroService.registrarUsuario(
  "Lic. Ana Torres",
  "ana.torres@docente.edu",
  "docente",
  "Literatura",
  "Humanidades"
);
console.log(resultado5.mensaje);
if (resultado5.usuario) mostrarDetallesUsuario(resultado5.usuario);

// PROBAR VALIDACIONES
console.log("\n PROBANDO VALIDACIONES...");

const resultado6 = RegistroService.registrarUsuario(
  "Usuario Duplicado",
  "maria.gonzales@estudiante.edu",
  "estudiante",
  "4to Secundaria",
  "EST-2026-003"
);
console.log(resultado6.mensaje);

const resultado7 = RegistroService.registrarUsuario(
  "Email Inválido",
  "email-sin-formato",
  "estudiante",
  "2do Secundaria",
  "EST-2026-004"
);
console.log(resultado7.mensaje);

// ESTADÍSTICAS
Estadisticas.mostrar();

// LISTAR USUARIOS
console.log("\n LISTA DE USUARIOS REGISTRADOS:");
console.log("═".repeat(60));
const usuarios = RegistroService.obtenerTodosLosUsuarios();
usuarios.forEach((usuario, index) => {
  console.log(`${index + 1}. ${usuario.nombre} (${usuario.tipoUsuario}) - ${usuario.email}`);
});

console.log("\n Sistema completado exitosamente\n");
