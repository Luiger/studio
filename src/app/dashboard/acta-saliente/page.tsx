import { z } from 'zod';
import { ActaForm } from '@/components/forms/acta-form';

const formSchema = z.object({
  departamentoOrigen: z.string().min(1, { message: 'Campo requerido.' }),
  responsableEntrega: z.string().min(1, { message: 'Campo requerido.' }),
  bienes: z.string().min(1, { message: 'Campo requerido.' }),
  observaciones: z.string().optional(),
});

const formFields = [
    { name: 'departamentoOrigen', label: 'Departamento de Origen', placeholder: 'Ej: Departamento de TI', type: 'input' as const },
    { name: 'responsableEntrega', label: 'Responsable de la Entrega', placeholder: 'Ej: Juan Pérez', type: 'input' as const },
    { name: 'bienes', label: 'Bienes a Entregar', placeholder: 'Liste los bienes separados por comas...', type: 'textarea' as const },
    { name: 'observaciones', label: 'Observaciones', placeholder: 'Cualquier detalle adicional...', type: 'textarea' as const },
];

export default function ActaSalientePage() {
  return (
    <ActaForm
      title="Acta de Entrega Saliente"
      description="Complete los detalles para registrar una entrega saliente."
      formSchema={formSchema}
      defaultValues={{
        departamentoOrigen: '',
        responsableEntrega: '',
        bienes: '',
        observaciones: '',
      }}
      fields={formFields}
    />
  );
}
