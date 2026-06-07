# Taiwanese Mandarin Translate Skill（台灣華語翻譯 Skill）

繁體中文（台灣）：[README.zh-TW.md](README.zh-TW.md)

Translate English into **Traditional Chinese used in Taiwan**, and rewrite existing Chinese copy into more natural **Taiwanese Mandarin**. This skill now uses **Taiwanese Mandarin** as its default voice. For official or broad public-facing content, it can also lean into a more neutral **ROC Mandarin** written register for clarity and standardization.

This repository packages the skill in a cross-platform structure and includes a small installer that can deploy it to the following targets:

| Platform | Target name | User install path |
| --- | --- | --- |
| Claude Code | `claude` | `~/.claude/skills/taiwanese-mandarin-translate/` |
| Codex CLI | `codex` | `~/.agents/skills/taiwanese-mandarin-translate/` |
| Gemini CLI | `gemini` | `~/.gemini/skills/taiwanese-mandarin-translate/` |
| GitHub Copilot | `copilot` | `~/.copilot/skills/taiwanese-mandarin-translate/` |

Here, `~` is the Unix-style home directory shorthand. On each platform, it resolves to your OS user's home directory, such as `%USERPROFILE%` on Windows.

## Highlights

- Uses Taiwan-preferred terminology for software, UI, and technical documentation
- Detects and rewrites China-leaning wording into natural Taiwan usage
- Defaults to Taiwanese Mandarin, while supporting a more neutral ROC Mandarin register for formal Taiwan contexts
- Aims for wording that is broadly understandable across Taiwan
- Follows a clear workflow: understand -> translate -> proofread -> polish
- Preserves Markdown, placeholders, code, commands, and the original structure

## Standard skill structure

The standard file layout for this skill is:

```text
.agents/skills/taiwanese-mandarin-translate/
  SKILL.md
  EXAMPLES.md
  references/vocabulary.md
```

This structure works directly with tools that support project-level `.agents/skills`, and the installer copies the same files into each tool's user-level skill directory.

## Installation

Node.js 18 or later is required.

```bash
npm run install:all
```

Install to a single platform:

```bash
node scripts/install-skill.mjs --target claude
node scripts/install-skill.mjs --target codex
node scripts/install-skill.mjs --target gemini
node scripts/install-skill.mjs --target copilot
```

Notes:

- `claude`, `gemini`, and `copilot` write to their own native user skill directories.
- `codex` writes to `~/.agents/skills/...`, which is a shared Agent Skills path and may also be detected by other tools that follow the same convention.
- If you already keep this skill under `~/.agents/skills/...`, updating or uninstalling only the `gemini` target may not change what Gemini actually loads until the shared copy is also updated or removed.

To preview the install without writing files:

```bash
node scripts/install-skill.mjs --target all --dry-run
```

To remove installed copies:

```bash
node scripts/install-skill.mjs --uninstall --target all
```

## When to use this skill

Use this skill when you need to:

- translate English into Traditional Chinese for readers in Taiwan
- review and localize existing Chinese copy
- rewrite UI copy, documentation, or product text into natural Taiwan usage

## Repository structure

- `.agents/skills/taiwanese-mandarin-translate/SKILL.md`: main skill definition
- `.agents/skills/taiwanese-mandarin-translate/EXAMPLES.md`: sentence-level examples
- `.agents/skills/taiwanese-mandarin-translate/references/vocabulary.md`: categorized Taiwan terminology reference
- `scripts/install-skill.mjs`: cross-platform installer
- `package.json`: CLI entry points and npm scripts

## References

- [Moksa1123/taiwan-translate-skill](https://github.com/Moksa1123/taiwan-translate-skill): Taiwan-focused translation skill reference
- [Qmo37/localization-tw](https://github.com/Qmo37/localization-tw): Taiwan localization terminology and wording reference
- [Wikipedia: 中華民國國語](https://zh.wikipedia.org/wiki/%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E5%9C%8B%E8%AA%9E): background reference for ROC Mandarin usage and register
