**English** | [Italiano](./SECURITY.it.md)

# Security Policy

## Supported Versions

The project has no release tags. Security fixes are applied to the latest commit on `main`, which is what GitHub Pages serves at <https://andreabonn.github.io/lerne-deutsch/>.

## Reporting a Vulnerability

Report through [GitHub Security Advisories](https://github.com/AndreaBonn/lerne-deutsch/security/advisories/new). Do not open a public issue for a vulnerability.

Please include:

- a description of the vulnerability
- steps to reproduce, with the browser and version
- expected and actual behaviour
- what an attacker could achieve

Response timeline:

- acknowledgment within 72 hours
- fix for critical issues within 30 days
- coordinated public disclosure after the fix is released

## What the application is

A static site with no backend, no account and no server-side storage. Everything the learner does is stored in their own browser (`localStorage`). The attack surface is therefore the page itself, the data files it loads, the optional calls to a model provider, and the files a learner imports.

## Security Measures Implemented

- **Content Security Policy**: `default-src 'self'`, `script-src 'self'` (no inline or third-party scripts), `object-src 'none'`, `base-uri 'none'`, `form-action 'none'`; outgoing connections are limited to the four model providers (`index.html:27`). A browser test checks that the policy is in force (`tests/dom/csp.spec.js`).
- **No third-party resources at runtime**: fonts are self-hosted and `font-src 'self'` blocks any external font (`index.html:27`, `assets/fonts/`).
- **HTML escaping of dynamic text**: text that does not come from the course data is escaped before it is inserted into the page (`assets/js/text.js:127`).
- **API keys kept out of the progress backup**: model API keys live in a separate storage entry, `linguai.llm.v1` (`assets/js/llm-keys.js:30`), which the backup export does not read (`assets/js/store.js:391`).
- **Consent before speech leaves the device**: speech recognition does not start without the learner's recorded consent (`assets/js/audio.js:240`), and consent can be withdrawn in Settings (`assets/js/consent.js:45`).
- **Consent before answers go to a model**: the model check is off without a separate consent (`assets/js/consent.js:93`) and never runs from `file://` (`assets/js/llm.js:69`).
- **A model cannot fail a correct answer**: the model is asked only about answers already rejected locally, and its verdict can only turn a rejection into an acceptance (`assets/js/llm-rules.js:173`).
- **Cap on paid calls**: at most 60 model calls per session for answer checking (`assets/js/llm.js:41`) and a separate budget of 40 for free conversation (`assets/js/llm.js:49`), so a loop or a stubborn retry cannot run up the learner's bill.
- **Import validation**: an imported backup is rejected above 8 MB and checked for a known schema version and field types before it replaces the current state (`assets/js/store.js:418`, `assets/js/store.js:474`).
- **Service worker scope**: the service worker ignores every request to another origin, so nothing from a third party enters its cache (`sw.js:280`).
- **Dependency pinning**: development dependencies are locked in `package-lock.json`; the application loads none of them.

## Security Best Practices for Users

- API keys are stored unencrypted in the browser's `localStorage`. Anyone with access to your browser profile can read them. Use a key with a spending limit, and use "Delete every key" in Settings on a shared computer.
- A backup file contains your progress (lessons, cards, statistics, writing). Keep it where you would keep any personal file.
- Clearing the site data in your browser erases your progress for good. Export a backup first.

## Out of Scope

- Self-XSS (attacks that require the victim to paste code into their own console)
- Reading `localStorage` with physical or administrator access to the device
- Vulnerabilities in the model providers' APIs (report those to the provider)
- Vulnerabilities in third-party development dependencies already publicly disclosed (report those upstream)
- Social engineering

---

[Back to README](./README.md)
