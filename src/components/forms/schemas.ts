'use client';

import { z } from 'zod';

export const actaEntranteSchema = z.object({
  procedencia: z.string().min(1, { message: 'Campo requerido.' }),
  responsableRecepcion: z.string().min(1, { message: 'Campo requerido.' }),
  bienesRecibidos: z.string().min(1, { message: 'Campo requerido.' }),
  condicion: z.string().min(1, { message: 'Campo requerido.' }),
  comentarios: z.string().optional(),
});

export const actaSalienteSchema = z.object({
  destino: z.string().min(1, { message: 'Campo requerido.' }),
  responsableEntrega: z.string().min(1, { message: 'Campo requerido.' }),
  bienesEntregados: z.string().min(1, { message: 'Campo requerido.' }),
  condicion: z.string().min(1, { message: 'Campo requerido.' }),
  comentarios: z.string().optional(),
});

export const actaMaximaAutoridadSchema = z.object({
  autoridadAnterior: z.string().min(1, { message: 'Campo requerido.' }),
  autoridadNueva: z.string().min(1, { message: 'Campo requerido.' }),
  fechaTransicion: z.string().min(1, { message: 'Campo requerido.' }),
  inventarioActivos: z.string().min(1, { message: 'Campo requerido.' }),
  comentarios: z.string().optional(),
});

export const formFields = {
  'acta-entrante': [
    { name: 'procedencia', label: 'Procedencia', placeholder: 'Ej: Proveedor XYZ', type: 'input' as const },
    { name: 'responsableRecepcion', label: 'Responsable de la Recepción', placeholder: 'Ej: Ana Gómez', type: 'input' as const },
    { name: 'bienesRecibidos', label: 'Bienes Recibidos', placeholder: 'Liste los bienes recibidos...', type: 'textarea' as const },
    { name: 'condicion', label: 'Condición de los Bienes', placeholder: 'Ej: Nuevo, Usado, Buen estado', type: 'input' as const },
    { name: 'comentarios', label: 'Comentarios Adicionales', placeholder: 'Cualquier detalle sobre la recepción...', type: 'textarea' as const },
  ],
  'acta-saliente': [
      { name: 'destino', label: 'Destino', placeholder: 'Ej: Cliente Z', type: 'input' as const },
      { name: 'responsableEntrega', label: 'Responsable de la Entrega', placeholder: 'Ej: Juan Pérez', type: 'input' as const },
      { name: 'bienesEntregados', label: 'Bienes Entregados', placeholder: 'Liste los bienes entregados...', type: 'textarea' as const },
      { name: 'condicion', label: 'Condición de los Bienes', placeholder: 'Ej: Nuevo, Usado, Buen estado', type: 'input' as const },
      { name: 'comentarios', label: 'Comentarios Adicionales', placeholder: 'Cualquier detalle sobre la entrega...', type: 'textarea' as const },
  ],
  'acta-maxima-autoridad': [
      { name: 'autoridadAnterior', label: 'Autoridad Anterior', placeholder: 'Ej: Dr. Carlos Ruiz', type: 'input' as const },
      { name: 'autoridadNueva', label: 'Nueva Autoridad', placeholder: 'Ej: Dra. Elena Valdez', type: 'input' as const },
      { name: 'fechaTransicion', label: 'Fecha de Transición', placeholder: 'Seleccione una fecha', type: 'input' as const },
      { name: 'inventarioActivos', label: 'Inventario de Activos', placeholder: 'Resumen del inventario transferido...', type: 'textarea' as const },
      { name: 'comentarios', label: 'Comentarios Adicionales', placeholder: 'Observaciones del proceso de transición...', type: 'textarea' as const },
  ]
};

export const defaultValues = {
  'acta-entrante': {
    procedencia: '',
    responsableRecepcion: '',
    bienesRecibidos: '',
    condicion: '',
    comentarios: '',
  },
  'acta-saliente': {
    destino: '',
    responsableEntrega: '',
    bienesEntregados: '',
    condicion: '',
    comentarios: '',
  },
  'acta-maxima-autoridad': {
    autoridadAnterior: '',
    autoridadNueva: '',
    fechaTransicion: '',
    inventarioActivos: '',
    comentarios: '',
  }
};

export const formSchemas = {
  'acta-entrante': actaEntranteSchema,
  'acta-saliente': actaSalienteSchema,
  'acta-maxima-autoridad': actaMaximaAutoridadSchema,
};
