---
name: taiwanese-mandarin-translate
description: Translate English into Traditional Chinese for Taiwan audiences, using natural Taiwanese Mandarin by default and a neutral ROC Mandarin register when the context is formal or public-facing.
---

# Taiwanese Mandarin Translation and Localization

Use this skill when the task needs English content translated into **Traditional Chinese used in Taiwan**, or when existing Chinese copy should be rewritten into more natural **Taiwanese Mandarin**.

## Style positioning

- Default to **Taiwanese Mandarin / Taiwan Mandarin (台灣華語)**: natural, contemporary wording that Taiwan readers would comfortably use in products, documentation, and general writing.
- When the content is **official, educational, public-facing, or meant for a broad Taiwan audience**, lean toward a more neutral **ROC Mandarin** register: standard, clear, and broadly accepted in Taiwan.
- Treat **ROC Mandarin** here as a useful **standardizing reference**, not as a reason to make the output stiff, old-fashioned, or overly prescriptive.

## Register decision rules

Use the lightest register that fits the audience:

1. **Default to natural Taiwanese Mandarin** for UI copy, product text, help content, blog posts, marketing copy, developer documentation, and general prose.
2. **Use a more neutral ROC Mandarin written register** only when the content is official, educational, policy-related, public-service-oriented, or explicitly aimed at a broad public audience in Taiwan.
3. **Do not over-formalize** ordinary product or technical content. Avoid making the output more bureaucratic, archaic, or distant than the source.
4. **Keep project convention first**. If a project already uses `台灣`, `登入`, `用戶端`, or another established term, stay consistent unless the user asks for a change.
5. **Use `臺` consistently** only when the source, project, or context is official, governmental, educational, or highly formal. Otherwise, follow the existing convention.

## What this skill borrows from ROC Mandarin

A widely used definition frames ROC Mandarin as a Taiwan-wide standard variety of Modern Standard Chinese and a common language across different groups in Taiwan. Use those strengths in practice:

- Prefer wording that is **widely understandable across Taiwan**, not tied to one narrow subculture or imported PRC usage.
- Keep phrasing **standard enough for shared public communication** while still sounding local and natural.
- Preserve the fact that Taiwan Mandarin has **its own Taiwan-developed usage**, instead of flattening it into PRC-style Modern Standard Chinese.
- For language-learning, dictionary, or pronunciation-oriented content, prefer **Ministry of Education conventions** commonly used in Taiwan.

## What good output looks like

- Reads naturally to Taiwan readers, not like direct translation.
- Uses Taiwan-preferred terminology instead of Simplified Chinese or China-specific phrasing.
- Stays broadly intelligible as a shared Taiwan register when the audience is mixed or unspecified.
- Preserves the original meaning, tone, and level of formality.
- Preserves headings, lists, tables, Markdown, placeholders, code, commands, and file paths.

## Terminology priority

Follow this order when choosing wording:

1. Use the product's existing glossary, UI wording, or domain terminology if the project already has one.
2. Otherwise use common Taiwan terminology and Taiwan software/UI conventions.
3. If the source contains Simplified Chinese or China-specific wording, normalize it into Taiwan usage instead of translating it literally.
4. If the text is formal or public-facing, prefer wording that also fits Taiwan's neutral standard written register.
5. Keep brands, product names, APIs, code, commands, file paths, and technical identifiers in the source language unless the user asks otherwise.

## Core translation rules

- Translate into **Traditional Chinese used in Taiwan**, with **Taiwanese Mandarin** as the default voice.
- Avoid Simplified Chinese characters and China-specific phrasing.
- Prefer concise, idiomatic sentences over word-for-word translation.
- For official, educational, public-service, or cross-audience content, shift slightly toward a **neutral ROC Mandarin** written register without losing natural Taiwan usage.
- Use **full-width punctuation** in normal prose. Keep half-width punctuation inside code, commands, URLs, placeholders, and file paths.
- Add a half-width space between Chinese and embedded English or numbers when that improves readability.
- Prefer wording that works as a **common Taiwan lingua franca** when the audience is broad or unspecified.
- Use **臺**-forms where the source or context is official, governmental, educational, or highly formal; otherwise use the project's existing convention.
- If the source is ambiguous and accuracy depends on context, ask a brief clarifying question first.
- Preserve brands, product names, APIs, CLI options, code symbols, commands, file paths, URLs, placeholders, and variables exactly unless the user asks to translate them.
- Avoid filler sentence patterns that sound translated, such as `進行...操作`, `對...進行`, `通過...來`, and unnecessary nominalizations.

## Quick Taiwan wording reference

| Source | Prefer in Taiwan | Avoid |
| --- | --- | --- |
| data / database | 資料 / 資料庫 | 數據 / 數據庫 |
| code / source code | 程式碼 / 原始碼 | 代碼 / 源碼 |
| software / hardware | 軟體 / 硬體 | 軟件 / 硬件 |
| server / client | 伺服器 / 用戶端 | 服務器 / 客戶端 |
| default / activate | 預設 / 啟用 | 默認 / 激活 |
| information / video | 資訊 / 影片 | 信息 / 視頻 |
| network / link | 網路 / 連結 | 網絡 / 鏈接 |
| configure / settings | 設定 / 設定 | 配置 / 設置 |
| interface / component | 介面 / 元件 | 接口 / 組件 |
| click / optimize | 點選 / 最佳化 | 點擊 / 優化 |

## Software and UI terminology

Use these patterns by default for product copy and technical documentation:

| English | Traditional Chinese (Taiwan) |
| --- | --- |
| app | 應用程式 |
| file / folder | 檔案 / 資料夾 |
| save / update | 儲存 / 更新 |
| sign in / sign out | 登入 / 登出 |
| enable / disable | 啟用 / 停用 |
| upload / download | 上傳 / 下載 |
| import / export | 匯入 / 匯出 |
| error / warning | 錯誤 / 警告 |
| settings | 設定 |
| sidebar / dashboard | 側邊欄 / 控制台 |

See `references/vocabulary.md` for a larger categorized reference, `EXAMPLES.md` for sentence-level examples, and `BENCHMARK.md` for quality spot-check cases.

## Register selection

Pick the register that best matches the task:

| Context | Preferred register |
| --- | --- |
| app UI, product copy, help center, blog, marketing | natural Taiwanese Mandarin |
| technical docs, developer guides, FAQs | Taiwanese Mandarin with consistent standard terminology |
| government-style notices, education, policy, public announcements | Taiwanese Mandarin phrasing with a more neutral ROC Mandarin written register |
| pronunciation, dictionary, or teaching materials | Taiwan education conventions, including Ministry of Education (MOE) terminology when relevant |

## Translation workflow

### 1. Understand

- Read the full source before translating.
- Identify audience, tone, and whether the text is UI copy, documentation, marketing, or general prose.
- Decide whether the output should stay in everyday Taiwanese Mandarin or move closer to a neutral ROC Mandarin written register.
- Note any terms that must stay in English.

### 2. Translate

- Translate by meaning, not by string replacement.
- Keep terminology consistent across the whole text.
- Prefer Taiwan's own standard and common wording over PRC-standardized wording.
- Preserve formatting, placeholders, variables, Markdown, and line structure.

### 3. Proofread

Check for:

- unnatural literal translation
- leftover Simplified Chinese or China-specific wording
- inconsistent terminology
- register drift: too colloquial for formal text, or too stiff for normal product copy
- punctuation or spacing issues
- broken placeholders, Markdown, or formatting
- translated code identifiers, commands, URLs, file paths, or placeholders
- inflated wording such as unnecessary `進行`, `操作`, `通過`, or `對...進行`

### 4. Polish

- Make the final text sound like something a Taiwan native speaker would actually write.
- Simplify stiff phrasing when meaning is unchanged.
- If the audience is broad, check that the wording still reads like a clear shared Taiwan standard.

## Domain-aware Taiwan wording check

When the content falls into one of these areas, actively watch for common wording drift:

| Domain | High-risk wording to catch |
| --- | --- |
| software / engineering | 數據、代碼、接口、配置、組件、運行、優化 |
| UI / product copy | 點擊、鏈接、默認、激活、下載安裝 |
| general business writing | 信息、通過、獲取、支持 |
| daily-life examples | 視頻、西紅柿、土豆、地鐵、出租車 |

Rewrite them into natural Taiwan usage when appropriate.

## Avoid translated-sounding sentence patterns

Prefer direct, natural Taiwan Mandarin sentence structure:

| Avoid | Prefer |
| --- | --- |
| 對資料進行處理 | 處理資料 |
| 進行設定操作 | 設定 |
| 通過連結來取得檔案 | 透過連結取得檔案 |
| 服務器返回的數據 | 伺服器回傳的資料 |
| 提供對此功能的支持 | 支援這項功能 |

## Quality checklist

- [ ] Meaning is accurate and complete.
- [ ] Tone matches the source.
- [ ] Wording sounds natural in Taiwan Mandarin.
- [ ] Register fits the audience: Taiwanese Mandarin by default, neutral ROC Mandarin when needed.
- [ ] The output is not more formal, stiff, or bureaucratic than the context requires.
- [ ] No Simplified Chinese or China-specific vocabulary remains.
- [ ] Terminology is consistent throughout.
- [ ] Formatting, placeholders, and structure are preserved.
- [ ] Code, commands, URLs, file paths, placeholders, and identifiers are preserved exactly.

## Response style

- By default, provide only the final translated Traditional Chinese text.
- If the user asks for localization review instead of full translation, point out unnatural or China-leaning wording and rewrite it into Taiwan usage.
- If multiple phrasings are all reasonable, prefer the most natural Taiwan wording unless the context calls for a more neutral ROC Mandarin written register.
