import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, FilePlus, FileInput, UserCheck } from 'lucide-react';

const cardData = [
  {
    title: 'Acta de Entrega Saliente',
    icon: FilePlus,
    href: '/dashboard/acta-saliente',
    color: 'text-blue-500',
  },
  {
    title: 'Acta de Entrega Entrante',
    icon: FileInput,
    href: '/dashboard/acta-entrante',
    color: 'text-green-500',
  },
  {
    title: 'Acta de Entrega de Máxima Autoridad',
    icon: UserCheck,
    href: '/dashboard/acta-maxima-autoridad',
    color: 'text-purple-500',
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in-50">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Panel de Control
        </h1>
        <p className="text-muted-foreground">
          Bienvenido a Actas Móvil. Seleccione una opción para comenzar.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card) => (
          <Link href={card.href} key={card.title} className="group">
            <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <card.icon className={`h-10 w-10 ${card.color}`} />
                  <CardTitle className="font-headline text-lg">{card.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-end text-sm text-muted-foreground">
                  Crear nueva acta
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
