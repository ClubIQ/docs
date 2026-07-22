# ClubIQ Docs Coverage Plan

## Goal

Add the missing ClubIQ BackOffice documentation in an order that reduces user confusion first,
then expands coverage around the live product surface, and finally realigns the internal source
docs with the current codebase.

## Working assumptions

- This plan is about **content coverage**, not about the visual foundation work already tracked in
  `clubiq-docs/PLAN.md`.
- The codebase is the source of truth whenever `clubiq-docs` and `docs/*.md` disagree.
- User-facing docs should prefer the **Portuguese names visible in the UI**; code names can appear
  only when needed for precision.
- We should fix pages that are currently wrong before adding large amounts of new content.

## Delivery phases

### Phase 1 - Correct pages that currently contradict the product

- Update `primeiros-passos/index.mdx` so it stops claiming that live areas such as
  Comunicações, Signups, `/signup`, `/signup/complete/:token`, and `/member-signup` are absent.
- Move the regularization-notifications guidance from `pagamentos/notificacoes.mdx` to the
  real surface in **Comunicações -> Definições**.
- Update `pagamentos/index.mdx` so it no longer implies that the notifications tab lives inside
  Pagamentos.
- Replace the generic `comunicacoes/index.mdx` overview with content grounded in the real tabs and
  flows already present in the module.

### Phase 2 - Add missing docs for live top-level modules

- Add a **Loja** section for the backoffice store and the public storefront.
- Add a **Notícias** section for the news list, editor, scheduling, publishing, and preview flow.
- Add an **Inscrições** section for the leads inbox, discarded leads, settings, and public signup
  flows.

### Phase 3 - Cover public flows and cross-cutting utilities

- Add focused docs for the public payment portal.
- Add focused docs for the public member-signup flow.
- Decide how much of the hidden or staff-only utility surface belongs in `clubiq-docs`:
  account menu, change password, staff notifications bell, bug report, media library, DevOps.

### Phase 4 - Realign the internal reference docs

- Update `docs/CONFIG_AND_MODULES.md` and `docs/FEATURES.md` so they stop describing live
  modules as dormant.
- Re-run the same code-vs-doc audit after each major batch to keep drift small.

## Decision map

## #1: What work order minimizes confusion for current readers?

Blocked by: none
Status: resolved
Type: Research

### Question

Should we add the missing sections first, or correct the pages that are already misleading?

### Answer

Correct the misleading pages first. The safest order is:

1. Fix the pages that currently contradict the live product.
2. Add docs for live top-level modules that still have no section.
3. Add public-flow and utility docs.
4. Sync the internal reference docs after the user-facing coverage is stable enough.

## #2: What vocabulary should the docs standardize on?

Blocked by: none
Status: resolved
Type: Research

### Question

What naming should the plan use when the codebase mixes English module names with Portuguese UI?

### Answer

Use the Portuguese names visible in the UI as canonical doc terms:

- `Comunicações`
- `Inscrições`
- `Loja`
- `Notícias`
- `Utilizadores da App`
- `Gestão da Aplicação`
- `Classificação`
- `Portal de Pagamento`

Keep English code names only in implementation notes or when linking the docs back to the source.

## #3: Which published pages need urgent correction before adding more coverage?

Blocked by: #1, #2
Status: open
Type: Research

### Question

Which current pages are actively misleading because they no longer match the product?

### Answer

Initial scope:

- `primeiros-passos/index.mdx`
- `pagamentos/index.mdx`
- `pagamentos/notificacoes.mdx`
- `comunicacoes/index.mdx`

Expected outcome:

- no page claims a live feature is absent
- no page points operators to a tab that no longer exists
- overview pages link to concrete task pages instead of generic placeholders

## #4: How should Comunicações be expanded from one overview page into real task docs?

Blocked by: #1, #2
Status: open
Type: Research

### Question

What page set best matches the module that now exists in code?

### Answer

Initial scope:

- overview page grounded in the actual tab set
- sending a one-off communication
- templates
- campaigns
- segments
- history
- settings, including quota reminders and sending limits

## #5: How should Signups be documented across the inbox and the public forms?

Blocked by: #1, #2
Status: open
Type: Research

### Question

How should we split the backoffice leads management from the public signup surfaces?

### Answer

Initial scope:

- backoffice leads inbox
- discarded leads and restore/permanent-delete behavior
- settings
- public player signup (`/signup`)
- public completion flow (`/signup/complete/:token`)
- public member signup (`/member-signup`)

## #6: How should Loja coverage be split between backoffice and the public storefront?

Blocked by: #1, #2
Status: open
Type: Research

### Question

What page structure will keep the store docs readable while covering both internal operations and
the public shop?

### Answer

Initial scope:

- loja overview
- products
- orders
- sales
- store settings
- public storefront behavior (`/loja`, product deep link, checkout deep link)

## #7: What Notícias docs are needed for the current workflow?

Blocked by: #1, #2
Status: open
Type: Research

### Question

What minimum page set covers the live news authoring and publishing surface?

### Answer

Initial scope:

- news overview
- create/edit draft
- scheduling and publishing
- archive/unpublish/delete states
- preview behavior and audience targeting

## #8: Where should hidden or cross-cutting utilities live?

Blocked by: #1, #2
Status: open
Type: Grilling

### Question

Which staff-only or cross-cutting utilities belong inside `clubiq-docs`, and which should stay in
internal reference docs only?

### Answer

Candidates to classify:

- account menu / theme / change password
- staff notifications bell
- bug report dialog
- media library
- DevOps page

This is the main audience-boundary decision still open in the plan.

## #9: When should the internal source docs be synchronized with the site?

Blocked by: #3, #4, #5, #6, #7, #8
Status: open
Type: Research

### Question

At what point should we update the internal source docs so we do not rewrite them twice?

### Answer

Preferred timing:

- correct the most misleading site pages first
- finish the first complete batch of missing top-level sections
- then update `docs/CONFIG_AND_MODULES.md` and `docs/FEATURES.md` against the same snapshot

## Suggested execution order

1. Resolve `#3` and ship the correction pass.
2. Resolve `#4`, `#5`, `#6`, and `#7` one at a time.
3. Resolve `#8` once the audience boundary becomes the main blocker.
4. Resolve `#9` after the first major coverage batch lands.
