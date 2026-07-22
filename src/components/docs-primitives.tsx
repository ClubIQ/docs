import type { ReactNode } from 'react';
import {
  AlertTriangle,
  CheckSquare,
  FileCode2,
  Info,
  ShieldCheck,
  ShieldX,
  TriangleAlert,
  Waypoints,
} from 'lucide-react';
import { cn } from '@/lib/cn';

type Tone = 'info' | 'note' | 'warning' | 'danger' | 'success';
type RiskLevel = 'low' | 'medium' | 'high';

function toneClassName(tone: Tone) {
  switch (tone) {
    case 'note':
      return 'clubiq-doc-block clubiq-doc-block-note';
    case 'warning':
      return 'clubiq-doc-block clubiq-doc-block-warning';
    case 'danger':
      return 'clubiq-doc-block clubiq-doc-block-danger';
    case 'success':
      return 'clubiq-doc-block clubiq-doc-block-success';
    default:
      return 'clubiq-doc-block clubiq-doc-block-info';
  }
}

function toneIcon(tone: Tone) {
  switch (tone) {
    case 'note':
      return <CheckSquare className="size-4" />;
    case 'warning':
      return <TriangleAlert className="size-4" />;
    case 'danger':
      return <ShieldX className="size-4" />;
    case 'success':
      return <ShieldCheck className="size-4" />;
    default:
      return <Info className="size-4" />;
  }
}

export function DocCallout({
  title,
  tone = 'info',
  children,
}: {
  title: string;
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <div className={toneClassName(tone)}>
      <div className="clubiq-doc-block-icon">{toneIcon(tone)}</div>
      <div className="clubiq-doc-block-body">
        <p className="clubiq-doc-block-title">{title}</p>
        <div className="clubiq-doc-block-content">{children}</div>
      </div>
    </div>
  );
}

export function InfoCallout(props: Omit<Parameters<typeof DocCallout>[0], 'tone'>) {
  return <DocCallout tone="info" {...props} />;
}

export function NoteCallout(props: Omit<Parameters<typeof DocCallout>[0], 'tone'>) {
  return <DocCallout tone="note" {...props} />;
}

export function WarningCallout(props: Omit<Parameters<typeof DocCallout>[0], 'tone'>) {
  return <DocCallout tone="warning" {...props} />;
}

export function PermissionGateCallout({
  feature,
  permission,
  route,
  fallback,
}: {
  feature?: string;
  permission?: string;
  route?: string;
  fallback?: string;
}) {
  return (
    <div className="clubiq-doc-block clubiq-doc-block-gate">
      <div className="clubiq-doc-block-icon">
        <ShieldCheck className="size-4" />
      </div>
      <div className="clubiq-doc-block-body">
        <p className="clubiq-doc-block-title">Validação de funcionalidade e de permissão</p>
        <dl className="clubiq-reference-grid">
          {feature ? (
            <>
              <dt>Flag de funcionalidade</dt>
              <dd>
                <code>{feature}</code>
              </dd>
            </>
          ) : null}
          {permission ? (
            <>
              <dt>Permissão</dt>
              <dd>
                <code>{permission}</code>
              </dd>
            </>
          ) : null}
          {route ? (
            <>
              <dt>Rota</dt>
              <dd>
                <code>{route}</code>
              </dd>
            </>
          ) : null}
          {fallback ? (
            <>
              <dt>Alternativa (Fallback)</dt>
              <dd>{fallback}</dd>
            </>
          ) : null}
        </dl>
      </div>
    </div>
  );
}

export function RouteRef({
  route,
  file,
  guard,
  feature,
}: {
  route: string;
  file?: string;
  guard?: string;
  feature?: string;
}) {
  return (
    <div className="clubiq-reference-card">
      <div className="clubiq-reference-header">
        <Waypoints className="size-4" />
        <span>Referência de rota</span>
      </div>
      <dl className="clubiq-reference-grid">
        <dt>Rota</dt>
        <dd>
          <code>{route}</code>
        </dd>
        {guard ? (
          <>
            <dt>Guarda (Guard)</dt>
            <dd>
              <code>{guard}</code>
            </dd>
          </>
        ) : null}
        {feature ? (
          <>
            <dt>Funcionalidade</dt>
            <dd>
              <code>{feature}</code>
            </dd>
          </>
        ) : null}
        {file ? (
          <>
            <dt>Ficheiro</dt>
            <dd>
              <code>{file}</code>
            </dd>
          </>
        ) : null}
      </dl>
    </div>
  );
}

export function FileRef({
  path,
  note,
}: {
  path: string;
  note?: string;
}) {
  return (
    <div className="clubiq-reference-card">
      <div className="clubiq-reference-header">
        <FileCode2 className="size-4" />
        <span>Referência de ficheiro</span>
      </div>
      <p className="clubiq-reference-main">
        <code>{path}</code>
      </p>
      {note ? <p className="clubiq-reference-note">{note}</p> : null}
    </div>
  );
}

export function CodeRef({
  symbol,
  file,
  note,
}: {
  symbol: string;
  file?: string;
  note?: string;
}) {
  return (
    <div className="clubiq-reference-card">
      <div className="clubiq-reference-header">
        <FileCode2 className="size-4" />
        <span>Referência de código</span>
      </div>
      <p className="clubiq-reference-main">
        <code>{symbol}</code>
      </p>
      <dl className="clubiq-reference-grid">
        {file ? (
          <>
            <dt>Ficheiro</dt>
            <dd>
              <code>{file}</code>
            </dd>
          </>
        ) : null}
        {note ? (
          <>
            <dt>Relevância</dt>
            <dd>{note}</dd>
          </>
        ) : null}
      </dl>
    </div>
  );
}

export function Checklist({ children }: { children: ReactNode }) {
  return <div className="clubiq-checklist">{children}</div>;
}

export function CheckItem({
  checked = false,
  children,
}: {
  checked?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={cn('clubiq-check-item', checked && 'is-checked')}>
      <span className="clubiq-check-icon" aria-hidden="true">
        <CheckSquare className="size-4" />
      </span>
      <div>{children}</div>
    </div>
  );
}

export function DecisionBlock({
  title,
  status = 'Aceite',
  children,
}: {
  title: string;
  status?: string;
  children: ReactNode;
}) {
  return (
    <section className="clubiq-reference-card clubiq-decision-block">
      <div className="clubiq-reference-header">
        <ShieldCheck className="size-4" />
        <span>Decisão</span>
      </div>
      <div className="clubiq-decision-head">
        <p className="clubiq-doc-block-title">{title}</p>
        <span className="clubiq-inline-badge">{status}</span>
      </div>
      <div className="clubiq-reference-note">{children}</div>
    </section>
  );
}

export function RiskBlock({
  title,
  level = 'medium',
  children,
}: {
  title: string;
  level?: RiskLevel;
  children: ReactNode;
}) {
  return (
    <section className={cn('clubiq-reference-card clubiq-risk-block', `is-${level}`)}>
      <div className="clubiq-reference-header">
        <AlertTriangle className="size-4" />
        <span>Risco</span>
      </div>
      <div className="clubiq-decision-head">
        <p className="clubiq-doc-block-title">{title}</p>
        <span className="clubiq-inline-badge">
          {level === 'low' ? 'baixo' : level === 'high' ? 'alto' : 'médio'}
        </span>
      </div>
      <div className="clubiq-reference-note">{children}</div>
    </section>
  );
}

type ModulePermissionRow = {
  area: string;
  feature?: string;
  permission: string;
  route?: string;
  notes?: string;
};

export function ModulePermissionTable({ rows }: { rows: ModulePermissionRow[] }) {
  return (
    <div className="clubiq-table-wrap">
      <table className="clubiq-module-table">
        <thead>
          <tr>
            <th>Área</th>
            <th>Flag de funcionalidade</th>
            <th>Permissão</th>
            <th>Rota</th>
            <th>Notas</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.area}-${row.permission}-${row.route ?? ''}`}>
              <td>{row.area}</td>
              <td>{row.feature ? <code>{row.feature}</code> : '—'}</td>
              <td>
                <code>{row.permission}</code>
              </td>
              <td>{row.route ? <code>{row.route}</code> : '—'}</td>
              <td>{row.notes ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}