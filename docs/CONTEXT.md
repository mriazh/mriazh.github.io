# Session Context

## Session objective

Refresh the portfolio with current evidence from sibling repositories and migrate the canonical public address from `mriazh.github.io` to `mriazh.my.id` on GitHub Pages.

## Current state

- Repository: `mriazh.github.io`
- Branch: `master`
- Local HEAD matches `origin/master` at `d1c17d4`.
- Working tree was clean before documentation was created.
- Stack: React 19, Vite 8, plain CSS, `lucide-react`.
- Deployment: GitHub Actions artifact deployment through GitHub Pages.
- No `CNAME` file currently exists. This is expected for a custom Actions workflow; GitHub's current troubleshooting documentation says a CNAME file is ignored/not required for custom Actions publishing.

## Reconnaissance findings

- Live site is healthy at `https://mriazh.github.io/` and currently exposes the July content snapshot.
- Live/source metadata still points to `mriazh.github.io` in `index.html`, `robots.txt`, and `sitemap.xml`.
- Current featured projects are MRTG TelkomCare, WAC Huawei LLDP Crawler, and GMF CMP Automation.
- MRTG-Poncab is a strong newer candidate: RouterOS API polling, SQLite WAL time-series storage, RRDtool-style graphs/autoscale, adaptive timespans, reporting exports, and alerts.
- Automated-WAC-Huawei-Crawl-Data has a September 16 reorganization, release/installer docs, read-only LLDP mapping, and the local branch is five commits ahead of origin.
- GMF-CMP-Automation has substantial uncommitted local work including new connectivity, usage-query, workbook, logging, config, docs, and tests. Treat local-only changes as unverified until pushed or explicitly approved for public claims.
- GMF-CMP-Monitor has substantial uncommitted local changes and supports CMP monitoring, IMAP OTP, VPN lifecycle handling, and recovery. Treat local-only changes as unverified for public portfolio claims.
- MRTG-TelkomCare-Report-Automation last public commit is August 6 and adds incremental monthly Excel reporting.
- `mriazh` profile README still links to `mriazh.github.io` and should be updated after the custom domain is live.

## Domain findings

- `mriazh.my.id` is delegated to Cloudflare nameservers (`jose.ns.cloudflare.com` and `dns.cloudflare.com`).
- Public DNS currently returns no usable A/AAAA/CNAME record for the apex; `www.mriazh.my.id` does not resolve.
- HTTPS requests to `https://mriazh.my.id/` fail because the domain is not configured yet.
- Planned records:
  - `@` A `185.199.108.153`
  - `@` A `185.199.109.153`
  - `@` A `185.199.110.153`
  - `@` A `185.199.111.153`
  - `www` CNAME `mriazh.github.io`
- GitHub recommends verifying the custom domain before adding it to the repository and warns DNS propagation can take up to 24 hours.

## Documentation created

- `docs/requirements.md`
- `docs/design.md`
- `docs/tasks.md`
- `docs/CONTEXT.md`

## Decisions

1. Keep GitHub Pages; do not introduce a new hosting provider.
2. Use `https://mriazh.my.id/` as the canonical origin after DNS and Pages settings are configured.
3. Prefer proof-led updates to project data rather than merely adding repository names.
4. Do not expose credentials, internal hostnames, private operations, or claims based only on uncommitted sibling-repository changes.
5. Do not create a CNAME file unless the worker or GitHub Pages configuration proves it is needed; the current workflow uses custom Actions publishing.

## Test evidence

- Live `mriazh.github.io` fetch: successful.
- Live robots/sitemap fetch: successful, but both contain stale GitHub Pages origin.
- DNS check: expected records absent; migration is not yet complete.
- Local build/lint: not yet run for this session.

## Worker cycles

- Initial Orca dispatch accidentally launched the default `Build / Paid Premium Omniroute`; it was fenced and no application files were changed by that cycle.
- A verified terminal was then created with the visible model label `Worker / Free Stack Omniroute` and reused for the retry dispatch `ctx_951fc52f46b1`. That attempt updated only the domain metadata surfaces and was stopped after repeated reconnaissance; Orca recorded `stop_unknown` and no commit was performed.
- A fresh verified `Worker / Free Stack Omniroute` terminal completed dispatch `ctx_3361f2203c18`. It updated `src/data/projects.js` with MRTG-Poncab, Automated WAC Huawei Crawl Data, and GMF CMP Automation while preserving the existing card contract and avoiding confidential claims.
- Orchestrator review found the intended five files changed plus the four planning files in `docs/`; no component or CSS behavior changed.

## Verification evidence

- `git diff --check`: passed.
- `npm run lint`: passed with exit code 0.
- `npm run build`: passed with Vite 8.0.10; 1,785 modules transformed and `dist/` generated successfully.
- Metadata review: canonical, JSON-LD, Open Graph/Twitter image, robots sitemap, and sitemap location now use `https://mriazh.my.id`; README link and display label updated cleanly.
- DNS resolution: Verified via Google DNS (8.8.8.8) that `mriazh.my.id` returns all 4 GitHub Pages A records (185.199.108.153, 109, 110, 111) and `www.mriazh.my.id` returns CNAME to `mriazh.github.io`.
- Live HTTPS check:
  - `http://mriazh.my.id/` returns `HTTP/1.1 301 Moved Permanently` pointing to `https://mriazh.my.id/` (Enforce HTTPS confirmed active!).
  - `http://www.mriazh.my.id/` returns `HTTP/1.1 301 Moved Permanently` pointing to `https://mriazh.my.id/`.
  - `https://mriazh.my.id/` returns `HTTP/1.1 200 OK` (Fastly/GitHub CDN).
  - `https://mriazh.github.io/` returns `HTTP/1.1 301 Moved Permanently` pointing to `mriazh.my.id/`.
  - `https://mrtg.mriazh.my.id/` returns `HTTP/1.1 302 Found` (Cloudflare Access for MRTG-Poncab tunnel, intact and fully operational).

## Active blockers

- Local repository working tree contains the verified changes (5 files + docs/) ready for commit and push by the owner.

## Worker cycle 2 (MRTG-CMP rename & SEO metadata)

- Verified terminal created with `Worker · Free Stack 9Router-Go` (`term_d67b2742-b29e-471e-85f8-08840aa330ed`).
- Dispatched task `task_f6e249e403a5` under Run `run_5c50b8515ceb`.
- Worker modified:
  - `src/data/projects.js`: id -> `mrtg-cmp`, title -> `MRTG-CMP`, solution updated to reference MRTG-CMP, repoUrl -> `https://github.com/mriazh/MRTG-CMP`.
  - `index.html`: `<title>`, `og:title`, and `twitter:title` updated to `M Riyadh Azhar (@mriazh) | Network Automation Engineer`, and JSON-LD Person schema updated with `alternateName: ["mriazh", "Arap"]`.
- Verification passed: `eslint` clean, `vite build` succeeded in 1.20s, `git diff --check` clean.
- Settled worker terminal released cleanly. Sibling repos (`MRTG-CMP`, `GMF-CMP-Automation`) were inspected strictly read-only with zero edits.

## Active blockers

- Working tree in `mriazh.github.io` contains the verified updates ready for user commit and push.
- Google Search ranking progression is normal: awaiting crawler re-indexing for `mriazh` query entity association.

## Immediate next actions

1. Review diff with user.
2. Commit and push when user is ready.
