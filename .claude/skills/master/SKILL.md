---
name: master
description: "Universal task router and orchestrator. Use this skill when the user gives a broad, multi-domain, or ambiguous task that might span UI design, SEO, marketing, conversion, email, pricing, referral programs, frontend development, design systems, or video. Also use when the user says 'help me with my project,' 'I need everything done,' 'do whatever it takes,' 'full stack help,' 'improve my site,' 'launch my product,' or any other broad request. This skill reads the task, identifies which combination of skills is needed, and runs them in the right order — potentially multiple skills in parallel or sequence. Available skills it can orchestrate: frontend-design, ui-ux-pro-max, shadcn, shadcn-ui, tailwind-design-system, web-design-guidelines, seo-audit, ai-seo, audit-website, page-cro, popup-cro, email-sequence, pricing-strategy, referral-program, remotion-best-practices, skill-creator."
---

# Master Skill — Task Understanding & Skill Orchestrator

You are the intelligence layer that sits above all other skills. Your job is to understand what the user wants, break it into domains, select the right skill(s), and execute them in the correct order — solo or in combination.

---

## Step 1: Understand the Task

Read the user's request carefully. Ask clarifying questions ONLY if the task is truly ambiguous. In most cases, infer the domain from context.

Identify:
- **What** needs to be done (build UI, optimize SEO, write emails, price a product, etc.)
- **How many domains** are involved (one skill or several?)
- **What order** makes sense (e.g., design before audit, pricing before CRO)

---

## Step 2: Skill Selection Map

Use this map to select the right skill(s) based on the task:

### Frontend / UI / Design
| Task | Skill |
|------|-------|
| Build a webpage, component, landing page, poster, dashboard | `frontend-design` |
| Full UI/UX design with palettes, fonts, styles, stacks | `ui-ux-pro-max` |
| Add or fix shadcn components, component registry, presets | `shadcn` |
| Set up shadcn/ui, forms, dialogs, tables, Radix patterns | `shadcn-ui` |
| Build Tailwind design system, design tokens, component library | `tailwind-design-system` |
| Review UI code for accessibility, UX best practices, Vercel guidelines | `web-design-guidelines` |

### SEO / Website Health
| Task | Skill |
|------|-------|
| Audit a website for SEO, performance, security, broken links | `audit-website` |
| Diagnose SEO issues, why not ranking, traffic drop, core web vitals | `seo-audit` |
| Optimize for AI search (ChatGPT, Perplexity, Google AI Overviews, LLMs) | `ai-seo` |

### Marketing / Growth / Conversion
| Task | Skill |
|------|-------|
| Optimize a marketing page, landing page, homepage for conversions | `page-cro` |
| Create or optimize popups, modals, exit-intent overlays | `popup-cro` |
| Create email sequences, drip campaigns, onboarding or nurture flows | `email-sequence` |
| Design pricing tiers, packaging, freemium, monetization strategy | `pricing-strategy` |
| Build referral or affiliate programs, viral loops | `referral-program` |

### Video / Animation
| Task | Skill |
|------|-------|
| Work with Remotion (React video), animations, compositions | `remotion-best-practices` |

### Meta / Skill Development
| Task | Skill |
|------|-------|
| Create a new skill, improve an existing skill, run skill evals | `skill-creator` |

---

## Step 3: Execution Strategy

### Single Skill
If the task clearly maps to one domain, activate that skill and follow its full workflow.

### Multiple Skills — Sequential
Use this when outputs from one skill feed into another:
1. Identify the dependency chain (e.g., design → CRO review → SEO audit)
2. Execute skill 1 fully, then hand off its outputs to skill 2
3. Continue until all domains are addressed

**Example sequences:**
- "Build and optimize a landing page" → `frontend-design` → `page-cro` → `seo-audit`
- "Set up my SaaS UI and pricing" → `shadcn-ui` + `tailwind-design-system` → `pricing-strategy`
- "Launch my product" → `frontend-design` → `page-cro` → `email-sequence` → `referral-program` → `seo-audit`

### Multiple Skills — Parallel
Use this when tasks are independent and can run simultaneously:
- "Audit my site for SEO and security" → `seo-audit` + `audit-website` (parallel)
- "Build UI components and set up design tokens" → `shadcn-ui` + `tailwind-design-system` (parallel)

---

## Step 4: Execute

For each selected skill, activate it by following its SKILL.md prompt exactly. You are both the orchestrator AND the executor — don't just list skills, actually run them.

Structure your output clearly:

```
## Task Analysis
[What the user wants, which domains are involved]

## Skills Selected
1. skill-name — reason
2. skill-name — reason

## Execution Plan
[Sequential or parallel, and why]

---
[Then execute each skill in order]
```

---

## Skill Combination Examples

### "Improve my SaaS website"
1. `audit-website` — find technical/SEO/performance issues
2. `seo-audit` — diagnose ranking problems
3. `page-cro` — improve conversion rate on key pages
4. `ai-seo` — optimize for AI search visibility

### "Build a beautiful landing page that converts"
1. `ui-ux-pro-max` — pick design direction (style, palette, fonts)
2. `frontend-design` — build the actual page code
3. `page-cro` — review and improve conversion elements
4. `web-design-guidelines` — audit for accessibility and UX best practices

### "Set up my React app's design system"
1. `shadcn-ui` — install and configure shadcn components
2. `tailwind-design-system` — build Tailwind v4 design tokens and component patterns
3. `shadcn` — add specific components from the registry

### "Launch a product from zero"
1. `pricing-strategy` — figure out what to charge and how to package
2. `frontend-design` — build the landing page
3. `page-cro` — optimize the page for signups
4. `email-sequence` — create onboarding + nurture emails
5. `referral-program` — design a refer-a-friend loop
6. `seo-audit` + `ai-seo` — optimize for organic discovery

### "Add a popup to capture leads"
→ `popup-cro` only (single domain)

### "Create a Remotion video for my product"
→ `remotion-best-practices` only (single domain)

---

## Rules

1. **Never just list skills** — always execute them.
2. **Read context** — if the project has `.agents/product-marketing-context.md`, read it before asking questions.
3. **Don't over-ask** — infer from context first. Only ask what you genuinely can't determine.
4. **Respect skill order** — always design before auditing, always understand pricing before CRO.
5. **Multiple skills = multiple outputs** — produce real deliverables for each selected skill, not summaries.
6. **Be explicit** — tell the user which skills you're running and why, before you start.
