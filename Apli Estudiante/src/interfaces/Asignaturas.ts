// interfaces/Asignaturas.ts

export interface Asignatura {
    id: number; 
    nombre: string;        // Nombre de la asignatura
    description: string; // Descripción de la asignatura
    image: string;       // URL de la imagen asociada a la asignatura
    profesor: string;   // Nombre del profesor
    date: string;        // Fecha de inicio o cualquier otra fecha relevante
  }
  
  export interface Asignaturas {
    id: number;          // Identificador de la asignatura
    nombre: string;        // Nombre de la asignatura
    description: string; // Descripción de la asignatura
    image: string;       // URL de la imagen asociada a la asignatura
    profesor: string;   // Nombre del profesor
    date: string;        // Fecha de inicio o cualquier otra fecha relevante
  }
  