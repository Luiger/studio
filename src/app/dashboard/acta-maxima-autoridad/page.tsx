import { z } from 'zod';
import { ActaForm } from '@/components/forms/acta-form';

const formSchema = z.object({
  autoridadSaliente: z.string().min(1, { message: 'Campo requerido.' }),
  autoridadEntrante: z.string().min(1, { message: 'Campo requerido.' }),
  fechaTransicion: z.string().min(1, { message: 'Campo requerido.' }),
  documentosClave: z.string().min(1, { message: 'Campo requerido.' }),
  notas: z.string().optional(),
});

const formFields = [
    { name: 'autoridadSaliente', label: 'Autoridad Saliente', placeholder: 'Nombre de la autoridad que entrega', type: 'input' as const },
    { name: 'autoridadEntrante', label: 'Autoridad Entrante', placeholder: 'Nombre de la autoridad que recibe', type: 'input' as const },
    { name: 'fechaTransicion', label: 'Fecha de Transición', placeholder: 'DD/MM/AAAA', type: 'input' as const },
    { name: 'documentosClave', label: 'Documentos Clave Entregados', placeholder: 'Liste los documentos importantes...', type: 'textarea' as const },
    { name: 'notas', label: 'Notas de Transición', placeholder: 'Puntos importantes a destacar...', type: 'textarea' as const },
];

export default function ActaMaximaAutoridadPage() {
  return (
    <ActaForm
      title="Acta de Entrega de Máxima Autoridad"
      description="Registro de transición de responsabilidad y entrega de activos clave."
      formSchema={formSchema}
      defaultValues={{
        autoridadSaliente: '',
        autoridadEntrante: '',
        fechaTransicion: '',
        documentosClave: '',
        notas: '',
      }}
      fields={formFields}
    />
  );
}
