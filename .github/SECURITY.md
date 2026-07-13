# Security Policy

CRTL runs entirely in the browser with no backend. Its security-relevant
surface is small but real: user-controlled config fields (names, labels, URLs)
are rendered into the DOM, custom/brand icons are fetched from public CDNs and
embedded into your config, and optional gist sync decrypts a payload pulled from
`api.github.com`. Reports touching any of those are taken seriously.

## Supported versions

The latest release on the `main` branch is supported. Fixes land there first and
ship in the next tagged release.

| Version | Supported |
| ------- | --------- |
| 1.0.x   | Yes        |
| < 1.0   | No        |

## Reporting a vulnerability

**Please do not open a public issue for security problems.**

Report privately via either:

- GitHub's [private vulnerability reporting][advisories] - the **"Report a
  vulnerability"** button under the repository's *Security* tab (preferred), or
- email to **braininblack@gmail.com** with `[CRTL security]` in the subject.

Please include:

- the CRTL version and which build (the hosted/self-hosted multi-service
  page, or an offline single-file copy),
- your browser and OS,
- a description of the issue and its impact, and
- a minimal reproduction or proof of concept if you have one - for rendering
  bugs, the smallest config entry (name/label/URL/icon) that triggers it.

You can expect an acknowledgement within **5 business days**. Once the issue is
confirmed, we'll agree on a disclosure timeline with you, prepare a fix, and
credit you in the release notes unless you prefer to stay anonymous.

## Scope

In scope - vulnerabilities **in CRTL itself**, for example:

- stored or reflected XSS through any user-controlled field that reaches the DOM
  (entry names, link labels, URLs, group names) or through a fetched/embedded
  custom or brand icon (SVG),
- a malicious icon or gist payload that can execute script or exfiltrate the
  stored GitHub token / encryption key,
- a flaw in the gist-sync crypto (`src/sync.ts`) that weakens the AES encryption
  of the synced config or leaks the key,
- attribute-injection through values interpolated into markup or `data-*`
  attributes.

Out of scope:

- the GitHub sync token being stored in `localStorage` in plaintext - this is a
  **documented, opt-in** trade-off (see the README); enable sync only on
  machines you trust,
- Home/Away probes reading a host as "down" due to CORP headers, mixed-content
  blocking on `https://`, or untrusted TLS certs - these are documented behaviors,
  not vulnerabilities,
- weaknesses in the browser, the operating system, or any webserver you host the
  page on yourself,
- the absence of a feature (CRTL has no accounts and no server),
- self-XSS that requires pasting attacker-supplied content into your own devtools
  console.

[advisories]: https://github.com/BrainInBlack/CRTL/security/advisories/new
