# project A, personal portfolio site

**difficulty:** easy to medium
**estimated time:** 60–75 minutes
**stack:** next.js 15 + typescript + tailwind + magic UI

## before you paste the prompt

1. fill in the `[BRACKETS]` below with your real info. don't skip this, generic content = generic output.
2. make sure you're in this folder: `projects/01-portfolio`
3. launch claude code: `claude`

## your starter prompt

copy everything between the triple-dashes into claude code:

---

Build a personal developer portfolio for **Chun Lin**, a **Computer Science** student at **Georgia Tech**, graduating **May 2028**.

**stack requirements:**
- next.js 15 with App Router, typescript, and the `src/` directory layout
- tailwind CSS (use the default config, no custom plugins unless needed)
- **magic UI components via the `magic` MCP** for all animated elements, do not hand-roll animations
- use `pnpm` for all package management (never `npm` or `yarn`)

**workflow requirements:**
- before writing any code, use the `context7` MCP to fetch the latest next.js 15 App Router docs and the current magic UI component catalog
- when making visual or layout decisions, delegate to the `ui-designer` subagent
- follow commit message conventions from the `everything-claude-code-conventions` skill (conventional commits: `feat:`, `fix:`, `docs:`, etc.)

**page structure (single page, smooth scroll between sections):**

1. **hero**, my name, a one-line tagline, and an animated element from magic UI (pick one that fits: animated gradient text, sparkles, or typing effect)
2. **projects**, 3 cards in a responsive grid (1 col mobile, 2 col tablet, 3 col desktop). each card should have a magic UI hover effect.
3. **about**, 2-3 paragraphs about me, my interests, and what I'm looking for next
4. **contact**, github, linkedin, and email as icon links

**design direction:**
- dark mode by default, no light mode toggle needed
- clean and minimal, whitespace over decoration
- one accent color: **purple**
- font: use a clean sans-serif from `next/font/google`, pick Inter, Geist, or JetBrains Mono

**my projects to feature:**

1. **RPE Cells Age Classification**, Created a CNN model to classify RPE cell images into different age groups and compared its performance against using SVM and KNN algorithms instead, Python with PyTorch and scikit-learn, https://github.com/H1BOI/RPE-classification
2. **Corpora Management System**, Implemented a full-stack application that allows linguistic researchers to manage and interact with large text corpora, Python, Flask, HTML, CSS, MongoDB, AWS, https://github.com/ACSelke/Corpo
3. **Cloud Chatbot**, Developing an AI-powered chatbot platform that allows dynamic user interactions, React, Node.js, Express, OpenAI API, AWS, Terraform, Ansible, In Progress

**about me:**
Hello, I'm Chun! I'm currently a graduate student studying computer science from Georgia Tech and a recent alumni from Georgia State University. I'm extremely passionate about the potentials of Machine Learning and AI, and my main expertise is in full-stack software development.

**contact:**
- github: https://github.com/H1BOI
- linkedin: https://www.linkedin.com/in/hiboi/
- email: Chun457596692@gmail.com

**deployment workflow (do this at the end):**
1. run `pnpm build` locally and fix any errors
2. use the `github` MCP to create a new public repo named `portfolio` under my github account and push the code
3. use the `vercel` MCP to create a new vercel project from that github repo and deploy it
4. give me the final production URL

---

## tips while building

- **review claude's diffs before accepting them.** if something looks off, push back.
- **iterate on one thing at a time.** "the hero feels cramped, add more vertical padding" beats "make the whole site better."
- **ask to see the magic UI options.** prompt: "Use the magic MCP to show me 5 hero animation components and let me pick one."
- **don't skip the `ui-designer` subagent.** try: "Delegate to ui-designer: review the projects section and suggest 3 improvements."

## done checklist

- [ ] site runs locally via `pnpm dev`
- [ ] at least 2 magic UI components are visible on the page
- [ ] your 3 real projects are in the grid, not placeholder text
- [ ] looks good on a 375px viewport (chrome DevTools mobile mode)
- [ ] pushed to github via the `github` MCP
- [ ] deployed to vercel via the `vercel` MCP
- [ ] you have a live URL you'd share with someone
