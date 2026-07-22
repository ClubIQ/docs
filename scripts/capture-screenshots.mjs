/**
 * Captures the BackOffice screenshots used by the user guide.
 *
 * Prereqs: BackOffice dev server running (npm run dev in repo root) against the
 * dev API, and a dev admin account. Re-run whenever the UI changes so the guide
 * stays honest.
 *
 * Usage: node clubiq-docs/scripts/capture-screenshots.mjs [--only <shot-id>...]
 */
import { chromium } from 'playwright-core';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const BASE = process.env.BO_BASE_URL || 'http://localhost:5173';
const EMAIL = process.env.BO_EMAIL || 'admin@teste.com';
const PASSWORD = process.env.BO_PASSWORD || 'Admin@123';

const here = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(here, '../public/images/guide');

const settle = (page, ms = 2500) => page.waitForTimeout(ms);

async function fillAddMemberStep1(page) {
  await page.locator('button').filter({ hasText: 'Adicionar' }).first().click();
  await settle(page, 1200);
  await page.getByLabel(/nome completo/i).fill('Maria Exemplo Santos');
  await page.getByLabel(/^email/i).fill('maria.exemplo@email.com');
  await page.getByLabel(/telefone/i).fill('912345678');
  await page.getByRole('group', { name: /data de nascimento/i }).click();
  await page.keyboard.type('14031988', { delay: 60 });
}

async function fillAddMemberStep2(page) {
  await fillAddMemberStep1(page);
  await page.locator('button').filter({ hasText: 'Seguinte' }).click();
  await settle(page, 1000);
  // CC de exemplo aleatório para não colidir com registos existentes no dev
  await page.getByLabel(/^CC/i).fill(String(90000000 + Math.floor(Math.random() * 9999999)));
  await page.getByLabel(/^NIF/i).fill('244305145');
  await page.getByLabel(/rua/i).fill('Rua das Flores, 12');
  await page.getByLabel(/cidade/i).fill('Oeiras');
  await page.getByLabel(/código postal/i).fill('2780-123');
  await page.getByLabel(/país/i).first().click();
  await settle(page, 500);
  await page.getByRole('option', { name: /portugal/i }).click().catch(async () => {
    await page.locator('li').filter({ hasText: 'Portugal' }).first().click();
  });
}

async function fillAddMemberStep3(page) {
  await fillAddMemberStep2(page);
  await page.locator('button').filter({ hasText: 'Seguinte' }).click();
  await settle(page, 1500);
}

async function openMemberDetail(page, tab) {
  await page.locator('table tbody tr').filter({ hasText: 'Em dívida' }).first().locator('td').nth(1).click();
  await settle(page);
  if (tab) {
    await page.locator('button, [role="tab"]').filter({ hasText: tab }).first().click();
    await settle(page, 2000);
  }
}

async function openEventDetail(page) {
  await page.getByText('AD Oeiras vs Ferreiras').first().click();
  await settle(page, 1500);
}

async function openEventEditLastStep(page) {
  await openEventDetail(page);
  await page.locator('button').filter({ hasText: 'Editar Evento' }).click();
  await settle(page, 1500);
  for (let k = 0; k < 2; k++) {
    const cont = page.locator('button').filter({ hasText: 'Continuar' });
    if (await cont.count()) { await cont.first().click(); await settle(page, 1000); }
  }
}

/**
 * A shot: { id, out, url, prepare?, fullPage?, anonymous? }
 * - out: path relative to public/images/guide
 * - prepare: async (page) => void — run after navigation, before screenshot
 */
export const shots = [
  // ─── Geral ───
  { id: 'login', out: 'geral/login.png', url: '/login', anonymous: true },
  { id: 'dashboard', out: 'geral/dashboard.png', url: '/' },

  // ─── Sócios ───
  { id: 'members', out: 'socios/lista.png', url: '/members' },
  { id: 'member-add-1', out: 'socios/adicionar-passo1.png', url: '/members', prepare: fillAddMemberStep1 },
  { id: 'member-add-2', out: 'socios/adicionar-passo2.png', url: '/members', prepare: fillAddMemberStep2 },
  { id: 'member-add-3', out: 'socios/adicionar-passo3.png', url: '/members', prepare: fillAddMemberStep3 },
  { id: 'member-detail', out: 'socios/ficha-informacao-pessoal.png', url: '/members', prepare: (p) => openMemberDetail(p), fullPage: true },
  { id: 'member-quotas', out: 'socios/ficha-filiacao-quotas.png', url: '/members', prepare: (p) => openMemberDetail(p, 'Filiação e Quotas'), fullPage: true },
  { id: 'member-hist', out: 'socios/ficha-historico-pagamentos.png', url: '/members', prepare: (p) => openMemberDetail(p, 'Histórico de Pagamentos') },
  { id: 'member-audit', out: 'socios/ficha-auditoria.png', url: '/members', prepare: (p) => openMemberDetail(p, 'Auditoria') },

  // ─── Atletas ───
  { id: 'players', out: 'atletas/lista.png', url: '/players' },
  { id: 'players-compliance', out: 'atletas/conformidade-documental.png', url: '/players/document-compliance' },
  { id: 'player-perfil', out: 'atletas/ficha-perfil.png', url: '/players/4', fullPage: true },
  {
    id: 'player-cobranca', out: 'atletas/ficha-cobranca.png', url: '/players/4', fullPage: true,
    prepare: async (p) => { await p.locator('button, [role="tab"]').filter({ hasText: 'Cobrança' }).first().click(); await settle(p, 2000); },
  },
  {
    id: 'player-inscricoes', out: 'atletas/ficha-inscricoes.png', url: '/players/4', fullPage: true,
    prepare: async (p) => { await p.locator('button, [role="tab"]').filter({ hasText: 'Inscrições' }).first().click(); await settle(p, 2000); },
  },
  {
    id: 'player-documentos', out: 'atletas/ficha-documentos.png', url: '/players/4', fullPage: true,
    prepare: async (p) => { await p.locator('button, [role="tab"]').filter({ hasText: 'Documentos' }).first().click(); await settle(p, 2000); },
  },

  // ─── Pagamentos ───
  { id: 'payments', out: 'pagamentos/historico.png', url: '/payments' },
  {
    id: 'payments-notif', out: 'pagamentos/notificacoes.png', url: '/payments',
    prepare: async (p) => { await p.locator('button').filter({ hasText: 'Notificações' }).first().click(); await settle(p, 2000); },
  },

  // ─── Eventos ───
  { id: 'events', out: 'eventos/calendario.png', url: '/events' },
  {
    id: 'event-create-tipo', out: 'eventos/criar-escolher-tipo.png', url: '/events',
    prepare: async (p) => { await p.locator('button').filter({ hasText: 'Criar Novo Evento' }).click(); await settle(p, 1200); },
  },
  {
    id: 'event-create-outro', out: 'eventos/criar-outro-evento.png', url: '/events',
    prepare: async (p) => {
      await p.locator('button').filter({ hasText: 'Criar Novo Evento' }).click();
      await settle(p, 1000);
      await p.getByText('Outro Evento', { exact: true }).click();
      await settle(p, 1200);
    },
  },
  { id: 'event-detail', out: 'eventos/detalhe-evento.png', url: '/events', prepare: openEventDetail },
  { id: 'event-edit-media', out: 'eventos/editar-detalhes-adicionais.png', url: '/events', prepare: openEventEditLastStep },
  {
    id: 'event-media-chooser', out: 'eventos/galeria-biblioteca.png', url: '/events',
    prepare: async (p) => {
      await openEventEditLastStep(p);
      await p.getByText('Gerir imagens da galeria').click();
      await settle(p, 1800);
    },
  },

  // ─── Gestão Desportiva ───
  { id: 'modalities', out: 'gestao-desportiva/modalidades.png', url: '/modalities' },
  {
    id: 'modality-edit', out: 'gestao-desportiva/editar-modalidade.png', url: '/modalities',
    prepare: async (p) => {
      await p.locator('table tbody tr').filter({ hasText: 'Futebol' }).locator('button').first().click();
      await settle(p, 1500);
    },
  },
  ...['Escalões', 'Épocas', 'Competições'].map((tab) => ({
    id: `modalities-${tab.normalize('NFD').replace(/[^a-zA-Z]/g, '').toLowerCase()}`,
    out: `gestao-desportiva/${tab.normalize('NFD').replace(/[^a-zA-Z]/g, '').toLowerCase()}.png`,
    url: '/modalities',
    prepare: async (p) => { await p.locator('button').filter({ hasText: tab }).first().click(); await settle(p, 2000); },
  })),

  // ─── App ───
  { id: 'app-users', out: 'app/utilizadores.png', url: '/app-users' },
  {
    id: 'app-user-associar', out: 'app/associar-socio.png', url: '/app-users',
    prepare: async (p) => {
      await p.locator('table tbody tr').first().locator('button[aria-label="Associar Sócio"]').click();
      await settle(p, 1500);
    },
  },
  { id: 'app-management', out: 'app/configuracoes.png', url: '/app-management' },
  { id: 'leaderboard', out: 'app/classificacao.png', url: '/leaderboard' },

  // ─── Administração ───
  { id: 'admin-classes', out: 'administracao/classes-de-socio.png', url: '/admin-management' },
  {
    id: 'admin-cobrancas', out: 'administracao/cobrancas.png', url: '/admin-management',
    prepare: async (p) => { await p.locator('button').filter({ hasText: 'Cobranças' }).first().click(); await settle(p, 2000); },
  },
  {
    id: 'charge-create', out: 'administracao/criar-cobranca.png', url: '/admin-management',
    prepare: async (p) => {
      await p.locator('button').filter({ hasText: 'Cobranças' }).first().click();
      await settle(p, 1800);
      await p.locator('button').filter({ hasText: 'Criar Nova Cobrança' }).click();
      await settle(p, 1500);
    },
  },
  { id: 'admin-iam', out: 'administracao/gia.png', url: '/admin-iam' },
  { id: 'admin-partners', out: 'administracao/parceiros.png', url: '/admin-partners' },
];

async function login(page) {
  await page.goto(`${BASE}/login`, { waitUntil: 'networkidle' });
  await page.getByTestId('login-email-input').fill(EMAIL);
  await page.getByTestId('login-password-input').fill(PASSWORD);
  await page.getByTestId('login-submit-button').click().catch(async () => {
    await page.getByRole('button', { name: /entrar|login/i }).click();
  });
  await page.waitForURL((u) => !String(u).includes('login'), { timeout: 20000 });
  await page.waitForLoadState('networkidle');
}

async function main() {
  const onlyIdx = process.argv.indexOf('--only');
  const only = onlyIdx > -1 ? process.argv.slice(onlyIdx + 1) : null;
  const list = only ? shots.filter((s) => only.includes(s.id)) : shots;

  const browser = await chromium.launch();
  const failures = [];

  for (const shot of list) {
    // contexto novo por shot: evita estado de modais/toasts entre capturas
    const ctx = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2,
      locale: 'pt-PT',
    });
    const page = await ctx.newPage();
    try {
      if (!shot.anonymous) await login(page);
      await page.goto(`${BASE}${shot.url}`, { waitUntil: 'networkidle' });
      await settle(page);
      if (shot.prepare) await shot.prepare(page);
      const file = path.join(OUT, shot.out);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      await page.screenshot({ path: file, fullPage: shot.fullPage || false });
      console.log(`ok   ${shot.id} -> ${path.relative(OUT, file)}`);
    } catch (e) {
      failures.push(shot.id);
      console.error(`FAIL ${shot.id}: ${e.message.split('\n')[0]}`);
    } finally {
      await ctx.close();
    }
  }

  await browser.close();
  if (failures.length) {
    console.error(`\n${failures.length} failed: ${failures.join(', ')}`);
    process.exitCode = 1;
  }
}

main();
