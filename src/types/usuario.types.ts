/**
 * INTEGRANTE 1: MODELADO CON TYPE
 * Definición de tipos para usuarios
 */

export type InformacionBasica = {
  id: string;
  nombre: string;
  email: string;
  fechaRegistro: Date;
};

export type Estudiante = InformacionBasica & {
  tipoUsuario: "estudiante";
  grado: string;
  matricula: string;
  cursos?: string[];
};

export type Docente = InformacionBasica & {
  tipoUsuario: "docente";
  especialidad: string;
  departamento: string;
  añosExperiencia: number;
};

export type Administrador = InformacionBasica & {
  tipoUsuario: "administrador";
  nivel: "super" | "moderador";
  permisos: string[];
};

export type Usuario = Estudiante | Docente | Administrador;

export type TipoUsuario = "estudiante" | "docente" | "administrador";
