# Portfolio Domain & Content Refresh Requirements

## Problem statement

The portfolio still presents the July 2026 snapshot at `mriazh.github.io`, while several related repositories received substantial updates through August and September 2026. The public portfolio should represent the current engineering body of work and use the owner's primary domain, `mriazh.my.id`, as the canonical address.

## User stories

- As a recruiter or technical collaborator, I can open `https://mriazh.my.id/` and see the current portfolio without needing to know the GitHub Pages URL.
- As a visitor, I can understand the strongest current work across network monitoring, network automation, reporting, and applied AI without being shown stale project status.
- As a search engine or social platform, I receive consistent canonical, Open Graph, JSON-LD, robots, and sitemap URLs for the primary domain.
- As the maintainer, I can continue deploying the Vite site through the existing GitHub Actions Pages workflow.

## Functional requirements

1. Keep GitHub Pages as the hosting platform and preserve the existing build/deploy workflow unless a worker identifies a concrete incompatibility.
2. Configure `mriazh.my.id` as the repository's GitHub Pages custom domain through repository settings and DNS; do not assume a committed `CNAME` file is needed for the current custom Actions workflow.
3. Make `https://mriazh.my.id/` the canonical URL in `index.html`, JSON-LD, Open Graph/Twitter metadata, `robots.txt`, and `sitemap.xml`.
4. Keep the GitHub Pages URL as a compatibility/redirect destination where GitHub Pages provides it; do not break existing links unnecessarily.
5. Refresh featured-project content using evidence from the current repositories, prioritizing:
   - MRTG-Poncab: RouterOS API polling, SQLite/WAL time-series storage, RRDtool-style graphs/autoscale, multi-timespan analysis, reporting exports, and operational alerting where publicly appropriate.
   - Automated-WAC-Huawei-Crawl-Data: current reorganized structure, release/installer availability, read-only LLDP collection, resume/reconnect behavior, and AP-to-switch mapping.
   - GMF-CMP-Automation: current IMAP OTP, Firefox persistent profile, strict Daily Usage Query flow, workbook/day-tab update behavior, and bounded connectivity handling.
   - GMF-CMP-Monitor: current continuous CMP monitoring, dual VPN orchestration, IMAP OTP retrieval, session recovery, and NOC display use case.
   - MRTG TelkomCare Report Automation: incremental monthly reporting and OCR/LLM-assisted extraction, if the repository remains current and public.
6. Do not publish credentials, internal hostnames, private operational details, or claims that are not supported by the repository's public documentation.
7. Preserve responsive behavior, reduced-motion support, semantic accessibility, and the existing visual identity unless a content change requires a small layout adjustment.

## Non-functional requirements

- `npm run build` succeeds.
- `npm run lint` succeeds or any pre-existing lint issue is explicitly documented.
- No secrets or `.env` values are added to tracked files.
- Metadata uses one consistent HTTPS origin: `https://mriazh.my.id`.
- The site remains deployable from the existing `master` branch workflow.
- DNS and HTTPS verification evidence is recorded after the DNS provider changes are made.

## Acceptance criteria

- [ ] Visiting `https://mriazh.my.id/` returns the portfolio over HTTPS.
- [ ] The GitHub Pages repository Pages settings show `mriazh.my.id` as the custom domain and HTTPS is enabled once certificate issuance completes.
- [ ] `index.html`, `robots.txt`, and `sitemap.xml` contain no stale canonical `mriazh.github.io` URL.
- [ ] At least three featured projects reflect current repository evidence, including MRTG-Poncab and the updated automation projects.
- [ ] Project links resolve to the intended public repositories.
- [ ] Build and lint verification are captured in `docs/CONTEXT.md`.
- [ ] DNS records are documented without exposing registrar credentials.
