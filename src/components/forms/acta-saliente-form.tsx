'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';
import { actaSalienteSchema } from './schemas';

type ActaSalienteValues = z.infer<typeof actaSalienteSchema>;

const formFields: {
    name: keyof ActaSalienteValues;
    label: string;
    placeholder: string;
    type: 'input' | 'textarea';
}[] = [
    { name: 'destino', label: 'Destino', placeholder: 'Ej: Cliente Z', type: 'input' },
    { name: 'responsableEntrega', label: 'Responsable de la Entrega', placeholder: 'Ej: Juan Pérez', type: 'input' },
    { name: 'bienesEntregados', label: 'Bienes Entregados', placeholder: 'Liste los bienes entregados...', type: 'textarea' },
    { name: 'condicion', label: 'Condición de los Bienes', placeholder: 'Ej: Nuevo, Usado, Buen estado', type: 'input' },
    { name: 'comentarios', label: 'Comentarios Adicionales', placeholder: 'Cualquier detalle sobre la entrega...', type: 'textarea' },
];

const defaultValues: ActaSalienteValues = {
    destino: '',
    responsableEntrega: '',
    bienesEntregados: '',
    condicion: '',
    comentarios: '',
};

export function ActaSalienteForm() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<ActaSalienteValues>({
    resolver: zodResolver(actaSalienteSchema),
    defaultValues,
  });

  function onSubmit(values: ActaSalienteValues) {
    console.log(values);
    toast({
      title: '¡Formulario Enviado!',
      description: `El acta saliente ha sido guardada correctamente.`,
      className: 'bg-green-100 dark:bg-green-900 border-green-500 text-green-700 dark:text-green-300',
    });
    router.push('/dashboard');
  }

  return (
    <div className="animate-in fade-in-50">
        <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al panel
        </Button>
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Acta Saliente</CardTitle>
          <CardDescription>Registre los bienes que salen de la institución.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {formFields.map((field) => (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name}
                  render={({ field: formField }) => (
                    <FormItem>
                      <FormLabel>{field.label}</FormLabel>
                      <FormControl>
                        {field.type === 'textarea' ? (
                          <Textarea
                            placeholder={field.placeholder}
                            className="resize-y"
                            {...formField}
                          />
                        ) : (
                          <Input placeholder={field.placeholder} {...formField} />
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
               <CardFooter className="flex justify-end p-0 pt-6">
                    <Button type="submit" className="font-headline">Guardar Acta</Button>
                </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
