/**
 * INTEGRANTE 3: FUNCIONES Y SOBRECARGA
 * Servicio principal de registro
 */

import { Usuario } from '../types';
import { ResultadoRegistro } from '../interfaces';
import { Database, Estadisticas } from '../data';
import { ValidacionService } from './validacion.service';
import { generarId } from '../utils';
import { configuracion } from '../config/sistema.config';

export class RegistroService {

  // SOBRECARGA DE FUNCIONES
  static registrarUsuario(
    nombre: string,
    email: string,
    tipo: "estudiante",
    grado: string,
    matricula: string,
    cursos?: string[]
  ): ResultadoRegistro;

  static registrarUsuario(
    nombre: string,
    email: string,
    tipo: "docente",
    especialidad: string,
    departamento: string,
    añosExperiencia?: number
  ): ResultadoRegistro;

  static registrarUsuario(
    nombre: string,
    email: string,
    tipo: "administrador",
    nivel: "super" | "moderador",
    permisos: string[]
  ): ResultadoRegistro;

  // IMPLEMENTACIÓN
  static registrarUsuario(
    nombre: string,
    email: string,
    tipo: "estudiante" | "docente" | "administrador",
    param1: string | string[],
    param2?: string | string[] | number,
    param3?: string[] | number
  ): ResultadoRegistro {
    
    if (configuracion.validarEmail && !ValidacionService.validarEmail(email)) {
      return {
        exito: false,
        mensaje: " Email inválido",
        timestamp: new Date()
      };
    }

    if (!ValidacionService.validarNombre(nombre)) {
      return {
        exito: false,
        mensaje: " Nombre inválido",
        timestamp: new Date()
      };
    }

    if (!configuracion.permitirDuplicados && Database.existeUsuario(email)) {
      return {
        exito: false,
        mensaje: " El usuario ya existe",
        timestamp: new Date()
      };
    }

    const id = generarId();
    let nuevoUsuario: Usuario;

    if (tipo === "estudiante") {
      nuevoUsuario = {
        id,
        nombre,
        email,
        fechaRegistro: new Date(),
        tipoUsuario: "estudiante",
        grado: param1 as string,
        matricula: param2 as string,
        cursos: (param3 as string[]) ?? undefined
      };
      Estadisticas.incrementarEstudiantes();
    } 
    else if (tipo === "docente") {
      nuevoUsuario = {
        id,
        nombre,
        email,
        fechaRegistro: new Date(),
        tipoUsuario: "docente",
        especialidad: param1 as string,
        departamento: param2 as string,
        añosExperiencia: (param3 as number) || 0
      };
      Estadisticas.incrementarDocentes();
    } 
    else {
      nuevoUsuario = {
        id,
        nombre,
        email,
        fechaRegistro: new Date(),
        tipoUsuario: "administrador",
        nivel: param1 as "super" | "moderador",
        permisos: param2 as string[]
      };
      Estadisticas.incrementarAdministradores();
    }

    Database.agregarUsuario(nuevoUsuario);

    return {
      exito: true,
      mensaje: ` Usuario ${tipo} registrado exitosamente`,
      usuario: nuevoUsuario,
      timestamp: new Date()
    };
  }

  static obtenerTodosLosUsuarios(): Usuario[] {
    return Database.obtenerTodos();
  }
}
