'use client';

import Link from 'next/link';
import { ArrowRight, BookOpenText, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function DocsSidebarBanner() {
  return (
    <div className="order-first mt-3 rounded-[var(--clubiq-radius-card)] border border-fd-border bg-fd-secondary/70 p-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-fd-muted-foreground">Mudar entre modo claro e escuro.</p>
        <DocsSidebarThemeSwitch />
      </div>
    </div>
  );
}

function DocsSidebarThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : false;

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        aria-label="Ativar modo claro"
        onClick={() => setTheme('light')}
        data-active={!isDark}
        className="flex size-8 items-center justify-center rounded-[calc(var(--clubiq-radius-card)-4px)] text-fd-muted-foreground data-[active=true]:bg-fd-primary data-[active=true]:text-fd-primary-foreground"
      >
        <Sun className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Ativar modo escuro"
        onClick={() => setTheme('dark')}
        data-active={isDark}
        className="flex size-8 items-center justify-center rounded-[calc(var(--clubiq-radius-card)-4px)] text-fd-muted-foreground data-[active=true]:bg-fd-primary data-[active=true]:text-fd-primary-foreground"
      >
        <Moon className="size-4" />
      </button>
    </div>
  );
}

export function DocsSidebarFooter() {
  return (
    <div className="space-y-3">
      <Link
        href="/docs"
        className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--clubiq-radius-control)] border border-fd-border bg-fd-card px-3 py-2.5 text-sm font-semibold text-fd-foreground"
      >
        Abrir centro de ajuda
        <ArrowRight className="size-4" />
      </Link>

      <div className="inline-flex items-center gap-2 text-xs font-medium text-fd-muted-foreground">
        <BookOpenText className="size-3.5" />
        Documentacao publica para clientes
      </div>
    </div>
  );
}
