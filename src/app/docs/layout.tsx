import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { DocsSidebarBanner, DocsSidebarFooter } from '@/components/docs-shell';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      sidebar={{
        banner: <DocsSidebarBanner key="docs-sidebar-banner" />,
        footer: <DocsSidebarFooter key="docs-sidebar-footer" />,
      }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
