import Link from 'next/link';
import {
  ArrowRight,
  BookOpenText,
  FolderKanban,
  Layers3,
  Network,
  ShieldCheck,
  SquareLibrary,
} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-8 md:px-6 md:py-10 xl:px-8">
      <section className="rounded-[var(--clubiq-radius-panel)] border border-fd-border bg-fd-card p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-primary/10 px-3 py-1 text-sm font-medium text-fd-primary">
              Centro de Ajuda do ClubIQ BackOffice
            </div>

            <h1 className="max-w-4xl text-3xl font-bold tracking-[-0.03em] text-fd-foreground md:text-4xl">
              Documentação clara e prática para as equipas que usam o ClubIQ BackOffice todos os dias.
            </h1>

            <p className="mt-4 max-w-[68ch] text-base leading-7 text-fd-muted-foreground">
              O objetivo é simples: ajudar a equipa do clube a concluir tarefas mais depressa, perceber
              como cada área funciona e saber o que esperar da plataforma sem expor detalhes internos.
            </p>
          </div>

          <div className="flex min-w-[260px] flex-col gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--clubiq-radius-control)] bg-fd-primary px-4 py-2.5 text-sm font-semibold text-fd-primary-foreground"
            >
              Abrir centro de ajuda
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/docs/primeiros-passos"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--clubiq-radius-control)] border border-fd-border bg-fd-card px-4 py-2.5 text-sm font-semibold text-fd-foreground"
            >
              Começar aqui
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(300px,0.9fr)]">
        <div className="rounded-[var(--clubiq-radius-panel)] border border-fd-border bg-fd-card p-6">
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--clubiq-radius-card)] bg-fd-primary/10 text-fd-primary">
              <Layers3 className="size-4.5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-fd-foreground">Guias orientados por tarefa</p>
              <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
                As páginas estão organizadas à volta de tarefas reais do BackOffice para que a equipa
                aprenda por fluxo e não pela estrutura interna do sistema.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[var(--clubiq-radius-panel)] border border-fd-border bg-fd-card p-6">
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--clubiq-radius-card)] bg-fd-primary/10 text-fd-primary">
              <Network className="size-4.5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-fd-foreground">Fluxos ligados entre si</p>
              <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
                Os temas relacionados estão ligados entre si para que sócios, pagamentos, eventos e app
                façam sentido como parte do mesmo trabalho diário do clube.
              </p>
            </div>
          </div>
        </div>

        <aside className="rounded-[var(--clubiq-radius-panel)] border border-fd-border bg-fd-card p-6">
          <p className="text-sm font-semibold text-fd-foreground">O que este centro de ajuda inclui</p>
          <ul className="mt-5 space-y-4 text-sm text-fd-muted-foreground">
            <li className="flex gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[var(--clubiq-radius-card)] bg-fd-primary/10 text-fd-primary">
                <ShieldCheck className="size-4" />
              </span>
              <span>Orientação operacional para equipas de clube e administradores.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[var(--clubiq-radius-card)] bg-fd-primary/10 text-fd-primary">
                <BookOpenText className="size-4" />
              </span>
              <span>Explicações de estados, separadores, automatismos e comportamentos visíveis.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[var(--clubiq-radius-card)] bg-fd-primary/10 text-fd-primary">
                <FolderKanban className="size-4" />
              </span>
              <span>Sem notas de arquitetura interna, referências de deploy ou páginas de engenharia.</span>
            </li>
          </ul>
        </aside>
      </section>

      <section className="rounded-[var(--clubiq-radius-panel)] border border-fd-border bg-fd-card p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-fd-foreground">Áreas principais</p>
            <p className="mt-2 max-w-[66ch] text-sm leading-6 text-fd-muted-foreground">
              A documentação está agrupada pelas partes do produto que a equipa do clube usa mesmo.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-secondary/70 px-3 py-1 text-xs font-medium text-fd-muted-foreground">
            <BookOpenText className="size-3.5" />
            Feito para clientes, não para marketing
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Sócios e pagamentos',
              description: 'Fluxos administrativos centrais para fichas de sócio, quotas e cobranças.',
              icon: <SquareLibrary className="size-4" />,
            },
            {
              title: 'Atletas e eventos',
              description: 'Operação desportiva, atividade dos atletas e gestão de eventos num só fluxo.',
              icon: <Network className="size-4" />,
            },
            {
              title: 'Administração e app',
              description: 'Configurações, acessos, parceiros e apoio à experiência móvel do clube.',
              icon: <FolderKanban className="size-4" />,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[var(--clubiq-radius-card)] border border-fd-border bg-fd-secondary/45 p-4"
            >
              <div className="mb-3 flex size-9 items-center justify-center rounded-[var(--clubiq-radius-card)] bg-fd-primary/10 text-fd-primary">
                {item.icon}
              </div>
              <p className="text-sm font-semibold text-fd-foreground">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
