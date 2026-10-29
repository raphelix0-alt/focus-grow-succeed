<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Raphelix — project rules

- Site structure: one route file per nav section in `src/routes` (home, about,
  services, how-it-works, faq, contact, privacy, terms); shared chrome lives in
  `__root.tsx` via `src/components/site/*`. Why: the marketing-site brief
  requires separate shareable pages with per-route metadata.
- Design identity: black background, white text, metallic gold accents only.
  Never add blue, purple, or colorful gradients, or large white sections; all
  colors come from tokens in `src/styles.css`. Why: the brand brief forbids
  them.
- Contact form submissions POST to the public TanStack route
  `src/routes/api/public/leads.ts`, which validates with Zod (plus a honeypot
  and per-IP soft rate limit) and inserts via `supabaseAdmin`. Never insert
  form leads directly from the browser client. Why: `/api/public/*` bypasses
  auth, so the handler is the verification layer.
- `public.contact_submissions` is intentionally RLS-locked with no policies
  (service-role writes only). Do not add anon/authenticated policies unless a
  submissions viewer is built with its own auth.
- `src/components/ui/button.tsx` is customized for the gold identity but must
  keep the standard shadcn variant/size names (default, secondary, destructive,
  icon) because other ui components import them.
- Site copy data (services, steps, FAQs, genres, featured books, nav) lives in
  `src/lib/content.ts`; edit content there rather than scattering literals.
