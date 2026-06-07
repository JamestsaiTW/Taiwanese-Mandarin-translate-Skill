# Taiwanese Mandarin Translate Skill

Translate English into **Traditional Chinese used in Taiwan**, and rewrite existing Chinese copy into more natural **Taiwan Mandarin**.

This repository now packages the skill in a cross-platform layout and includes a small installer for these targets:

| Platform | Target name | User install path |
| --- | --- | --- |
| Claude Code | `claude` | `~/.claude/skills/taiwanese-mandarin-translate/` |
| Codex CLI | `codex` | `~/.agents/skills/taiwanese-mandarin-translate/` |
| Gemini CLI | `gemini` | `~/.gemini/skills/taiwanese-mandarin-translate/` |
| GitHub Copilot | `copilot` | `~/.copilot/skills/taiwanese-mandarin-translate/` |

`~` is shown as a Unix-style shorthand; on every platform these paths resolve under your OS user home directory (for example, `%USERPROFILE%` on Windows).

## What this skill emphasizes

- Taiwan-preferred terminology for software, UI, and technical writing
- Detection and rewriting of China-leaning wording into Taiwan usage
- A clear workflow: understand → translate → proofread → polish
- Preservation of Markdown, placeholders, code, commands, and structure

## Canonical skill layout

The canonical skill files live here:

```text
.agents/skills/taiwanese-mandarin-translate/
  SKILL.md
  EXAMPLES.md
  references/vocabulary.md
```

That layout is directly reusable by tools that support project-level `.agents/skills`, and the installer copies the same files into each tool's user-level skill directory.

## Install

Requires Node.js 18+.

```bash
npm run install:all
```

Install one platform:

```bash
node scripts/install-skill.mjs --target claude
node scripts/install-skill.mjs --target codex
node scripts/install-skill.mjs --target gemini
node scripts/install-skill.mjs --target copilot
```

Notes:

- `claude`, `gemini`, and `copilot` write to their native user skill folders.
- `codex` writes to `~/.agents/skills/...`, which is a shared Agent Skills path and may also be discovered by other tools that support the same convention.
- If you already have the skill in `~/.agents/skills/...`, updating or removing only the `gemini` target may not change what Gemini loads until the shared copy is also updated or removed.

Preview without writing files:

```bash
node scripts/install-skill.mjs --target all --dry-run
```

Remove installed copies:

```bash
node scripts/install-skill.mjs --uninstall --target all
```

## Usage

Use this skill when you need:

- English → Traditional Chinese translation for Taiwan audiences
- Localization review of existing Chinese wording
- Natural Taiwan phrasing for UI copy, documentation, and product text

## Repository structure

- `.agents/skills/taiwanese-mandarin-translate/SKILL.md`: main skill definition
- `.agents/skills/taiwanese-mandarin-translate/EXAMPLES.md`: sentence-level examples
- `.agents/skills/taiwanese-mandarin-translate/references/vocabulary.md`: categorized Taiwan wording reference
- `scripts/install-skill.mjs`: multi-platform installer
- `package.json`: CLI entry point and npm scripts
