import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function CatalogPage() {
  return (
    <div className="animate-in fade-in-50">
      <div className="mb-6">
        <h1 className="font-headline text-3xl font-bold tracking-tight">Catálogo</h1>
        <p className="text-muted-foreground">
          Explora los recursos y documentos disponibles.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Catálogo de Actas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center gap-4 text-center text-muted-foreground h-64 border-2 border-dashed rounded-lg">
            <BookOpen className="h-12 w-12" />
            <p>El catálogo está actualmente en construcción.</p>
            <p className="text-sm">Vuelve pronto para ver las actas y documentos disponibles.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
