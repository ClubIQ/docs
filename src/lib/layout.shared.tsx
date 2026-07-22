import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookText, LibraryBig } from 'lucide-react';
import { appName } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-3 text-sm font-semibold tracking-[-0.01em]">
          <span className="flex size-9 items-center justify-center rounded-[var(--clubiq-radius-card)] border border-fd-border bg-fd-primary/10 text-fd-primary">
            <BookText className="size-4.5" />
          </span>
          <span className="flex flex-col items-start leading-none">
            <span>{appName}</span>
            <span className="mt-1 text-[0.75rem] font-medium text-fd-muted-foreground">
              Guia do BackOffice
            </span>
          </span>
        </span>
      ),
      url: '/',
      transparentMode: 'none',
    },
    links: [
      {
        type: 'main',
        text: 'Guia',
        url: '/docs',
      },
      {
        type: 'button',
        text: 'Referência',
        icon: <LibraryBig className="size-4" />,
        url: '/docs',
      },
    ],
    themeSwitch: {
      enabled: false,
      mode: 'light-dark-system',
    },
    searchToggle: {
      enabled: true,
      full: {
        className: 'clubiq-search-trigger',
      },
      sm: {
        className: 'clubiq-search-trigger clubiq-search-trigger-sm',
      },
    },
  };
}
