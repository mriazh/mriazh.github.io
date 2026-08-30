# Portfolio Domain & Content Refresh Tasks

## Dependency-ordered execution

- [x] T1. Audit current portfolio source, deployment workflow, metadata, and public sibling repositories. **Target:** orchestrator reconnaissance. **Depends on:** none.
- [x] T2. Check current DNS and live-site status for `mriazh.my.id`, `www.mriazh.my.id`, and `mriazh.github.io`. **Target:** orchestrator verification. **Depends on:** T1.
- [x] T3. Freeze requirements and design in `docs/requirements.md` and `docs/design.md`. **Target:** orchestrator planning. **Depends on:** T1, T2.
- [x] T4. Update portfolio project data with current, evidence-backed repository capabilities; avoid secrets and unsupported claims. **Target:** free-stack implementation worker. **Depends on:** T3.
- [x] T5. Update canonical/social/JSON-LD/robots/sitemap/README URLs to `https://mriazh.my.id`. **Target:** free-stack implementation worker. **Depends on:** T3.
- [x] T6. Review the worker diff for scope, stale claims, accessibility regressions, and metadata consistency. **Target:** orchestrator review. **Depends on:** T4, T5.
- [x] T7. Run `npm run lint` and `npm run build`; record exact evidence. **Target:** orchestrator verification. **Depends on:** T6.
- [x] T8. Configure GitHub Pages custom domain in repository settings. **Target:** owner/operator action or supervised GitHub operation. **Depends on:** T3, DNS decision.
- [x] T9. Configure Cloudflare DNS: four apex A records and optional `www` CNAME. **Target:** owner/operator action. **Depends on:** T8 (recommended ordering).
- [x] T10. Recheck public DNS, HTTPS, robots, sitemap, and social assets after propagation/certificate issuance. **Target:** orchestrator verification. **Depends on:** T7, T8, T9.
- [x] T11. Update `docs/CONTEXT.md` with final evidence, blockers, and handoff. **Target:** orchestrator. **Depends on:** T10.
- [x] T12. Update `src/data/projects.js` to point MRTG-Poncab entry to MRTG-CMP and sanitize labels. **Target:** free-stack implementation worker. **Depends on:** T11.
- [x] T13. Update `index.html` to add `@mriazh` to title and `alternateName: ["mriazh", "Arap"]` to JSON-LD. **Target:** free-stack implementation worker. **Depends on:** T11.
- [x] T14. Verify build, lint, and diffs before final user review. **Target:** orchestrator verification. **Depends on:** T12, T13.

## Worker constraints

- Implementation must be delegated to a worker using only the `free-stack` model.
- Worker must not modify files outside the repository's intended source, public metadata, README, and `/docs` handoff files.
- No commit or push is authorized by this task specification unless the owner explicitly requests it.
