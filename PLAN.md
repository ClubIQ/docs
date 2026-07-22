# ClubIQ Docs Plan

## Goal

Build a Fumadocs documentation site for ClubIQ BackOffice that is visually coherent with the
BackOffice product and structured to document the system in a maintainable way.

## Working assumptions

- The docs site is primarily for internal/product/engineering use, not for club end-users.
- Light mode should feel like the standard ClubIQ experience: neutral white surfaces with the
  ClubIQ brand accent used sparingly.
- Dark mode should mirror the BackOffice dark theme, not a separate docs-only interpretation.
- The current visual source of truth is the implemented BackOffice theme in
  `src/common/theme/tokens.ts` and `src/common/theme/cleanTheme.ts`.
- `PRODUCT.md` defines the product personality and UX principles; `DESIGN.md` defines the design
  contract and notes where the code is the canonical source.

## Product and design constraints

### Product personality

- Calm, trustworthy, competent.
- Numbers and information come first; chrome stays quiet.
- No decorative dashboard aesthetics, no rainbow UI, no flashy motion.

### Design system rules to inherit

- Typography baseline should follow the real BackOffice theme: `Inter`, fixed scale, neutral tone.
- Surfaces should be flat, bordered, and quiet.
- Brand color is rationed: identity, active state, primary actions, selected state.
- Semantic color is reserved for meaning only.
- Dark mode must reuse the BackOffice neutral ladder and contrast behavior.
- Motion should stay restrained and always respect reduced-motion.

## Phase plan

### Phase 1 - Foundation and style setup

This is the first implementation phase and should happen before writing real docs content.

#### 1.1 Brand and theme foundation

- Replace starter branding (`My App`, generic GitHub config, starter landing copy).
- Create ClubIQ docs theme tokens derived from the BackOffice theme contract.
- Define CSS variables for light and dark modes from one shared token map.
- Keep light mode in the ClubIQ default language: white/neutral surfaces with orange-red brand
  accent.
- Match dark mode to the BackOffice dark palette and contrast behavior.

#### 1.2 Global docs shell

- Style the Fumadocs app shell to feel like ClubIQ: nav, sidebar, content width, borders, inputs,
  search, pagination, table of contents, code blocks, callouts, cards.
- Remove the generic starter look from `global.css`, home page, and shared layout config.
- Keep the docs surface clean and productivity-first, closer to BackOffice than to a generic
  marketing site.

#### 1.3 Content primitives

- Define reusable MDX components and conventions for:
  - note/warning/info callouts
  - permission and feature-gate callouts
  - route/file/code reference blocks
  - checklists
  - decision/risk blocks
  - tables for module-permission mapping
- Establish heading rhythm, paragraph width, table styling, and code-block styling once.

#### 1.4 Navigation and information architecture setup

- Define the docs top-level sections.
- Create folder structure, `meta.json` files, and starter index pages for each section.
- Set naming/frontmatter conventions so future docs stay consistent.

#### 1.5 Definition of done for Phase 1

- The docs site looks recognizably ClubIQ in both light and dark.
- Theme tokens are centralized.
- Generic starter branding is gone.
- Core page layouts and MDX primitives are ready.
- Section scaffolding exists so content migration can start immediately.

### Phase 2 - Core system documentation

Migrate and reshape the foundational BackOffice knowledge first.

#### 2.1 Core sections to create

- Introduction / What ClubIQ BackOffice is
- Product principles
- Design system and visual rules
- Architecture
- Config and modules
- Auth and permissions
- I18n
- Deploy and multi-club setup

#### 2.2 Content sources already available

- `PRODUCT.md`
- `DESIGN.md`
- `docs/ARCHITECTURE.md`
- `docs/CONFIG_AND_MODULES.md`
- `docs/AUTH_AND_PERMISSIONS.md`
- `docs/I18N.md`
- `docs/cloudflare-pages-multi-club-deploy.md`
- `specs/MODULE_PERMISSION_CHANGE_CHECKLIST.md`

#### 2.3 Expected output of this phase

- Each core domain has a proper docs home page.
- Existing markdown is adapted to the new IA instead of copied blindly.
- Cross-links exist between feature flags, permissions, routing, and module change workflow.

### Phase 3 - Feature module documentation

Document the BackOffice modules as a coherent catalog, not as isolated notes.

#### 3.1 Feature areas already identified

- Dashboard
- Members
- Players
- Modalities / divisions / seasons
- Events
- Payments
- Leaderboard and gamification
- Administration
- App management
- User accounts
- Media library
- Bug report
- DevOps

#### 3.2 Standard page shape for each feature

- What the module is
- Who uses it
- Feature flag
- Required permissions
- Main routes
- Core flows
- Important files/components
- Integration points
- Known risks / gotchas
- Related docs

#### 3.3 Expected output of this phase

- Every relevant BackOffice module follows the same documentation template.
- Module docs clearly expose the two-axis gate: feature flag plus permission.

### Phase 4 - Contributor workflow and long-term maintainability

- Add contribution guidance for how to create or update docs.
- Define where product, design, architecture, and feature docs should live.
- Document the checklist for module or permission changes inside the docs site.
- Add quality guardrails for naming, frontmatter, linking, and theme consistency.

## Proposed docs IA

- `docs/introduction`
  - what-is-clubiq-backoffice
  - product-principles
- `docs/design`
  - visual-language
  - light-and-dark-themes
  - content-patterns
- `docs/architecture`
  - stack-and-layout
  - routing
  - state-management
  - api-layer
  - data-patterns
- `docs/platform`
  - config-and-modules
  - auth-and-permissions
  - i18n
  - deploys
- `docs/features`
  - dashboard
  - members
  - players
  - modalities
  - events
  - payments
  - leaderboard
  - administration
  - app-management
  - user-accounts
  - media-library
  - bug-report
  - devops
- `docs/workflows`
  - module-permission-change-checklist
  - contributor-guide

## Phase 1 implementation checklist

1. Replace starter app identity and metadata.
2. Create docs theme tokens aligned with BackOffice light and dark tokens.
3. Restyle global shell and primitives.
4. Create section scaffolding and navigation.
5. Add reusable MDX components for BackOffice-specific documentation patterns.
6. Replace starter sample docs with ClubIQ placeholders for each section.

## Risks to watch

- Copying `DESIGN.md` literally instead of aligning with the current source of truth in theme code.
- Letting the docs UI become more "marketing" than "product".
- Hardcoding brand colors in the docs site instead of centralizing theme tokens.
- Writing feature docs before the IA and primitives are stable.
- Mixing internal contributor docs and product reference docs without a clear structure.

## Recommended next action

Start Phase 1 and treat it as a product-foundation task, not a content-writing task:
replace starter branding, establish ClubIQ theme tokens for Fumadocs, restyle the shell, and
scaffold the documentation sections before migrating any real BackOffice content.
