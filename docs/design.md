# Portfolio Domain & Content Refresh Design

## Design read

Reading this as: an engineering portfolio for recruiters and technical collaborators, with a bold dark neobrutalist language, leaning toward a proof-led case-study presentation rather than a generic project gallery.

## Hosting architecture

- Source: React 19 + Vite in `mriazh.github.io`.
- Build: `npm run build` outputs `dist/`.
- Hosting: GitHub Pages via the existing GitHub Actions workflow (`actions/configure-pages`, artifact upload, `actions/deploy-pages`).
- Primary origin: `https://mriazh.my.id/`.
- Compatibility origin: `https://mriazh.github.io/` remains available as the repository Pages URL; GitHub Pages custom-domain behavior should be allowed to redirect/serve according to GitHub's platform behavior.

## DNS plan

The domain is delegated to Cloudflare nameservers, but current Windows DNS checks show no A/AAAA/CNAME records for `mriazh.my.id` or `www.mriazh.my.id` yet.

For the apex domain, configure the DNS provider with GitHub Pages' current documented A records:

- `@` A `185.199.108.153`
- `@` A `185.199.109.153`
- `@` A `185.199.110.153`
- `@` A `185.199.111.153`

Also configure the optional recommended hostname:

- `www` CNAME `mriazh.github.io`

Set the repository Pages custom domain to `mriazh.my.id` before or alongside DNS setup, then wait for DNS propagation and certificate issuance. Do not add unrelated proxy/origin records. If Cloudflare proxying is enabled, verify GitHub Pages HTTPS behavior after certificate issuance; DNS-only is the least ambiguous initial setup.

## Application metadata design

Replace the old origin in all source-controlled public metadata:

- `<link rel="canonical">`
- JSON-LD `url`
- `og:url`
- `og:image`
- `twitter:image`
- `public/robots.txt` sitemap URL
- `public/sitemap.xml` location
- README links and any portfolio badge links where appropriate

Do not hard-code a Vite `base` path: the custom domain serves the site from `/`, matching the current deployment.

## Content model

Retain the existing `projectsData` model so the current card component remains stable. Update only evidence-backed fields and add projects through the same data contract if the worker determines the card layout supports it without making the page unwieldy.

Preferred content hierarchy:

1. MRTG-Poncab — strongest current monitoring/system product story.
2. Automated WAC Huawei Crawl Data — concrete scale and network automation story.
3. GMF CMP Automation — applied browser/IMAP/Excel workflow.
4. GMF CMP Monitor — continuous monitoring and resilient connectivity story, if a fourth card is supported cleanly.
5. MRTG TelkomCare — retain as a supporting OCR/reporting case study if it remains current.

Use outcomes and capabilities, not confidential infrastructure specifics. Avoid presenting unfinished work as production-complete.

## Error handling and rollback

- If DNS does not resolve, do not claim the migration is complete; record resolver evidence and leave the GitHub Pages URL as the known-good fallback.
- If the Pages certificate is pending, use HTTP/DNS checks only and wait for HTTPS issuance rather than bypassing the certificate warning.
- If content refresh causes layout or lint failures, revert the content/data change independently from domain metadata.
- A rollback consists of restoring the prior metadata origin and/or removing the custom domain in GitHub Pages settings; DNS records can remain documented for a later retry.

## Verification interfaces

- Local: `npm run lint`, `npm run build`.
- Static content: search source and built output for stale `mriazh.github.io` metadata.
- DNS: `Resolve-DnsName` for apex A and `www` CNAME records against public resolvers.
- HTTP/TLS: request `https://mriazh.my.id/`, `robots.txt`, and `sitemap.xml` after DNS and Pages settings are configured.
- UI: browser smoke check for hero, navigation, project links, CV asset, and mobile menu.
