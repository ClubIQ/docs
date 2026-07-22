import type { Metadata, Viewport } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { appDescription, appName } from '@/lib/shared';
import { getClubIQThemeStyleText, themeColorMeta } from '@/lib/theme';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-clubiq-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  description: appDescription,
};

export const viewport: Viewport = {
  themeColor: themeColorMeta,
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <style id="clubiq-theme-tokens">{getClubIQThemeStyleText()}</style>
      </head>
      <body className="min-h-screen bg-fd-background text-fd-foreground antialiased">
        <RootProvider
          theme={{
            attribute: 'class',
            defaultTheme: 'system',
            enableSystem: true,
            disableTransitionOnChange: true,
            storageKey: 'clubiq.docs.themeMode',
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
