# Sistema de Registro de Usuarios

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-16+-green)
![License](https://img.shields.io/badge/license-MIT-blue)

Sistema modular de registro de usuarios desarrollado en **TypeScript** con arquitectura escalable y buenas prácticas de programación.

## Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Arquitectura del Proyecto](#️-arquitectura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Flujo de Trabajo](#-flujo-de-trabajo)
- [Estructura de Datos](#️-estructura-de-datos)
- [Validaciones](#-validaciones-implementadas)
- [Características Técnicas](#️-características-técnicas)
- [Tecnologías](#️-tecnologías-utilizadas)
- [Creditos](#-creditos)


## Descripción

Aplicación de consola que permite registrar **tres tipos de usuarios** (Estudiantes, Docentes y Administradores) utilizando conceptos avanzados de TypeScript como:

- **Sobrecarga de funciones**
- **Type guards**
- **Modelado de datos con `type` e `interface`**
- **Union e Intersection types**

El sistema está diseñado con una arquitectura modular que facilita el mantenimiento, la escalabilidad y el trabajo en equipo.


## Características

- Registro de **Estudiantes**, **Docentes** y **Administradores**
- Sobrecarga de funciones para diferentes tipos de usuarios
- Validación completa de datos (email, nombres, experiencia)
- Generación automática de IDs consecutivos (`USR-0001`, `USR-0002`, etc.)
- Sistema de estadísticas en tiempo real
- Arquitectura modular y escalable
- Type guards para diferenciación segura de tipos
- Configuración centralizada del sistema
- Simulación de base de datos en memoria
- Manejo robusto de errores


## Arquitectura del Proyecto

sistema-registro-usuarios/
├── src/
│   ├── types/              # Modelado con 'type'
│   │   ├── usuario.types.ts
│   │   └── index.ts
│   ├── interfaces/         # Modelado con 'interface'
│   │   ├── resultado.interface.ts
│   │   ├── configuracion.interface.ts
│   │   └── index.ts
│   ├── services/           # Lógica de negocio 
│   │   ├── registro.service.ts
│   │   ├── validacion.service.ts
│   │   └── index.ts
│   ├── guards/             # Type guards
│   │   ├── usuario.guards.ts
│   │   └── index.ts
│   ├── utils/              # Utilidades
│   │   ├── generadores.util.ts
│   │   ├── formateo.util.ts
│   │   └── index.ts
│   ├── data/               # Simulación de base de datos
│   │   ├── database.ts
│   │   ├── estadisticas.ts
│   │   └── index.ts
│   ├── config/             # Configuración
│   │   └── sistema.config.ts
│   └── index.ts            # Punto de entrada
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

### Descripción de Carpetas

| Carpeta       | Responsabilidad                      | Integrante   |
|---------------|--------------------------------------|--------------|
| `types/`      | Modelado de datos con `type`         | Integrante 1 |
| `interfaces/` | Contratos con `interface`            | Integrante 2 |
| `services/`   | Lógica de negocio y sobrecarga       | Integrante 3 |
| `guards/`     | Type guards para validación de tipos | Integrante 3 |
| `utils/`      | Funciones auxiliares reutilizables   | Compartido   |
| `data/`       | Simulación de base de datos          | Compartido   |
| `config/`     | Configuración del sistema            | Compartido   |


## Instalación

### Requisitos Previos

- **Node.js** v16 o superior ([Descargar](https://nodejs.org/))
- **npm** (incluido con Node.js)
- **Git** ([Descargar](https://git-scm.com/))

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/orlandoCalderon7/Crear-Nuevo-Registro-Usuario-Admin.git

# 2. Entrar al directorio del proyecto
cd Crear-Nuevo-Registro-Usuario-Admin

# 3. Instalar las dependencias
npm install

# 4. Ejecutar modo en desarrollo
npm run dev

## Uso
Ejecutar en Modo Desarrollo
npm run dev

Ejecutar versión Compilada
npm run dev

Windows (PowerShell)
Remove-Item -Recurse -Force dist

## Flujo de Trabajo
Descripción del Flujo
Inicialización: El sistema carga la configuración desde sistema.config.ts
Validación: Cada registro pasa por validaciones de email, nombre y datos específicos
Generación de ID: Se asigna un ID único consecutivo automáticamente (USR-0001, USR-0002, etc.)
Almacenamiento: Los datos se guardan en memoria simulando una base de datos
Estadísticas: Se actualizan los contadores en tiempo real
Respuesta: El sistema retorna un objeto ResultadoRegistro con el estado de la operación

## **Estructura de Datos**
Tipos de Usuario

Estudiante
ID único del sistema: USR-0001, USR-0002, etc.
Información básica: Nombre, email, fecha de registro
Grado académico: Nivel educativo del estudiante
Número de matrícula: Identificador único de matrícula
Lista de cursos: Cursos en los que está inscrito (opcional)
Ejemplo de uso:
Registro de nuevos alumnos
Matrícula en cursos
Seguimiento académico

Docente
ID único del sistema: USR-0003, USR-0004, etc.
Información básica: Nombre, email, fecha de registro
Especialidad: Área de conocimiento principal
Departamento: Departamento académico al que pertenece
Años de experiencia: Experiencia docente (0-50 años)
Ejemplo de uso:
Registro de profesores
Asignación a departamentos
Evaluación de experiencia

Administrador
ID único del sistema: USR-0005, USR-0006, etc.
Información básica: Nombre, email, fecha de registro
Nivel de acceso: super (acceso total) o moderador (acceso limitado)
Lista de permisos: Acciones que puede realizar en el sistema
Ejemplo de uso:
Gestión de usuarios
Configuración del sistema
Generación de reportes

### **Validaciones Implementadas**
Validación de Email
Formato válido (debe contener @ y dominio)
No permite emails duplicados en el sistema
Conversión automática a minúsculas
Eliminación de espacios en blanco

## **Características Técnicas**
Modularidad
Separación clara de responsabilidades: Cada módulo tiene una función específica
Bajo acoplamiento: Los módulos son independientes entre sí
Alta cohesión: Funcionalidades relacionadas agrupadas
Fácil mantenimiento: Cambios localizados sin afectar todo el sistema
Escalabilidad: Agregar nuevas funcionalidades sin modificar código existente

Type Safety
Tipado estricto: Todo el código está fuertemente tipado
Detección temprana de errores: Errores encontrados en compilación, no en ejecución
IntelliSense completo: Autocompletado y documentación en el editor
Refactoring seguro: Cambios de código con confianza
Documentación implícita: Los tipos sirven como documentación

Configuración Centralizada
Parámetros en un solo archivo: sistema.config.ts
Fácil personalización: Sin modificar lógica de negocio
Valores por defecto seguros: Configuración lista para producción
Validación de configuración: Verificación de parámetros al inicio

Simulación de Base de Datos
Almacenamiento en memoria: Array de usuarios en RAM
Operaciones CRUD: Crear, leer, actualizar (simuladas)
Estadísticas en tiempo real: Contadores actualizados automáticamente
Búsqueda eficiente: Métodos de búsqueda optimizados

## **Tecnologías Utilizadas**
Lenguajes y Runtime
TypeScript 5.0+ - Lenguaje principal con tipado estático
Node.js 16+ - Entorno de ejecución JavaScript
Herramientas de Desarrollo
ts-node - Ejecución directa de TypeScript sin compilación previa
TypeScript Compiler (tsc) - Compilador oficial de TypeScript

## **Créditos**
Proyecto Académico
Institución: Zegel IPAE 
Curso: Desarrollo de Interfaces 3
Ciclo: 4to Ciclo
Año: 2026
Semana: 4

## **Agradecimientos**
Profesores del curso por la guía técnica y conceptual
Compañeros de equipo por la colaboración y feedback
Comunidad de TypeScript por la excelente documentación
>>>>>>> 05898a3 (docs: Actualizar formato del README)

