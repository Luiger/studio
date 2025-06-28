import { z } from 'zod';
import { ActaForm } from '@/components/forms/acta-form';

const formSchema = z.object({
  procedencia: z.string().min(1, { message: 'Campo requerido.' }),
  responsableRecepcion: z.string().min(1, { message: 'Campo requerido.' }),
  bienesRecibidos: z.string().min(1, { message: 'Campo requerido.' }),
  condicion: z.string().min(1, { message: 'Campo requerido.' }),
  comentarios: z.string().optional(),
});

const formFields = [
    { name: 'procedencia', label: 'Procedencia', placeholder: 'Ej: Proveedor XYZ', type: 'input' as const },
    { name: 'responsableRecepcion', label: 'Responsable de la Recepción', placeholder: 'Ej: Ana Gómez', type: 'input' as const },
    { name: 'bienesRecibidos', label: 'Bienes Recibidos', placeholder: 'Liste los bienes recibidos...', type: 'textarea' as const },
    { name: 'condicion', label: 'Condición de los Bienes', placeholder: 'Ej: Nuevo, Usado, Buen estado', type: 'input' as const },
    { name: 'comentarios', label: 'Comentarios Adicionales', placeholder: 'Cualquier detalle sobre la recepción...', type: 'textarea' as const },
];

export default function ActaEntrantePage() {
  return (
    <ActaForm
      title="Acta de Entrega Entrante"
      description="Complete los detalles para registrar una entrega entrante."
      formSchema={formSchema}
      defaultValues={{
        procedencia: '',
        responsableRecepcion: '',
        bienesRecibidos: '',
        condicion: '',
        comentarios: '',
      }}
      fields={formFields}
    />
  );
}
