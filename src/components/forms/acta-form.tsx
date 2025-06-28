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

interface ActaFormProps {
  title: string;
  description: string;
  formSchema: z.ZodObject<any>;
  defaultValues: Record<string, any>;
  fields: { name: string; label: string; placeholder: string; type: 'input' | 'textarea' }[];
}

export function ActaForm({ title, description, formSchema, defaultValues, fields }: ActaFormProps) {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: '¡Formulario Enviado!',
      description: `El ${title.toLowerCase()} ha sido guardado correctamente.`,
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
          <CardTitle className="font-headline text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {fields.map((field) => (
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
