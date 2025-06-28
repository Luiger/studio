import { ChatInterface } from '@/components/support/chat-interface';

export default function SupportPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] animate-in fade-in-50">
      <div className="mb-6">
        <h1 className="font-headline text-3xl font-bold tracking-tight">Soporte</h1>
        <p className="text-muted-foreground">
          ¿Necesitas ayuda? Chatea con nuestro asistente de IA.
        </p>
      </div>
      <ChatInterface />
    </div>
  );
}
