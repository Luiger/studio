'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Home, MessageSquare, BookOpen, Users, Info, LogOut } from 'lucide-react';
import { TopNav } from '@/components/layout/top-nav';
import { BottomNav } from '@/components/layout/bottom-nav';
import { AppLogo } from '@/components/shared/app-logo';
import { useRouter } from 'next/navigation';

const sidebarNavItems = [
  { href: '/dashboard', label: 'Inicio', icon: Home },
  { href: '/dashboard/support', label: 'Soporte', icon: MessageSquare },
  { href: '/dashboard/catalog', label: 'Catálogo', icon: BookOpen },
  { href: '/dashboard/contacts', label: 'Contactos', icon: Users },
  { href: '/dashboard/about', label: 'Acerca de', icon: Info },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Sidebar>
          <SidebarHeader className="p-4">
            <div className="flex items-center gap-2">
              <AppLogo className="h-8 w-8 text-sidebar-primary" />
              <h1 className="font-headline text-2xl font-semibold text-sidebar-foreground">
                Actas Móvil
              </h1>
            </div>
          </SidebarHeader>
          <SidebarContent className="p-4">
            <SidebarMenu>
              {sidebarNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <SidebarMenuButton
                      isActive={pathname === item.href}
                      className="font-body"
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarSeparator />
          <SidebarFooter className="p-4 flex flex-col gap-4">
             <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://placehold.co/100x100.png" alt="Usuario" data-ai-hint="user avatar" />
                <AvatarFallback>UP</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-sidebar-foreground">Usuario de Prueba</p>
                <p className="text-xs text-sidebar-foreground/70">usuario@ejemplo.com</p>
              </div>
            </div>
            <Button variant="ghost" className="w-full justify-start gap-2 text-sidebar-foreground hover:bg-sidebar-accent" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
              Cerrar Sesión
            </Button>
          </SidebarFooter>
        </Sidebar>
        <div className="flex flex-1 flex-col md:pl-[16rem]">
          <TopNav />
          <main className="flex-1 p-4 sm:p-6 pb-20 md:pb-6">{children}</main>
          <BottomNav />
        </div>
      </div>
    </SidebarProvider>
  );
}
