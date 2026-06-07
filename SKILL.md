---
name: taiwanese-mandarin-translate
description: Translate English into Traditional Chinese for Taiwan audiences, and localize existing Chinese wording into natural Taiwan Mandarin with terminology consistency.
---

# Taiwan Mandarin Translation and Localization

Use this skill when the task needs English content translated into **Traditional Chinese used in Taiwan**, or when existing Chinese copy should be rewritten into more natural **Taiwan Mandarin**.

## What good output looks like

- Reads naturally to Taiwan readers, not like direct translation.
- Uses Taiwan-preferred terminology instead of Simplified Chinese or China-specific phrasing.
- Preserves the original meaning, tone, and level of formality.
- Preserves headings, lists, tables, Markdown, placeholders, code, commands, and file paths.

## Terminology priority

Follow this order when choosing wording:

1. Use the product's existing glossary, UI wording, or domain terminology if the project already has one.
2. Otherwise use common Taiwan terminology and Taiwan software/UI conventions.
3. If the source contains Simplified Chinese or China-specific wording, normalize it into Taiwan usage instead of translating it literally.
4. Keep brands, product names, APIs, code, commands, file paths, and technical identifiers in the source language unless the user asks otherwise.

## Core translation rules

- Translate into **Traditional Chinese used in Taiwan**.
- Avoid Simplified Chinese characters and China-specific phrasing.
- Prefer concise, idiomatic sentences over word-for-word translation.
- Use **full-width punctuation** in normal prose. Keep half-width punctuation inside code, commands, URLs, placeholders, and file paths.
- Add a half-width space between Chinese and embedded English or numbers when that improves readability.
- If the source is ambiguous and accuracy depends on context, ask a brief clarifying question first.

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

See `references/vocabulary.md` for a larger categorized reference and `EXAMPLES.md` for sentence-level examples.

## Translation workflow

### 1. Understand

- Read the full source before translating.
- Identify audience, tone, and whether the text is UI copy, documentation, marketing, or general prose.
- Note any terms that must stay in English.

### 2. Translate

- Translate by meaning, not by string replacement.
- Keep terminology consistent across the whole text.
- Preserve formatting, placeholders, variables, Markdown, and line structure.

### 3. Proofread

Check for:

- unnatural literal translation
- leftover Simplified Chinese or China-specific wording
- inconsistent terminology
- punctuation or spacing issues
- broken placeholders, Markdown, or formatting

### 4. Polish

- Make the final text sound like something a Taiwan native speaker would actually write.
- Simplify stiff phrasing when meaning is unchanged.

## Domain-aware Taiwan wording check

When the content falls into one of these areas, actively watch for common wording drift:

| Domain | High-risk wording to catch |
| --- | --- |
| software / engineering | 數據、代碼、接口、配置、組件、運行、優化 |
| UI / product copy | 點擊、鏈接、默認、激活、下載安裝 |
| general business writing | 信息、通過、獲取、支持 |
| daily-life examples | 視頻、西紅柿、土豆、地鐵、出租車 |

Rewrite them into natural Taiwan usage when appropriate.

## Quality checklist

- [ ] Meaning is accurate and complete.
- [ ] Tone matches the source.
- [ ] Wording sounds natural in Taiwan Mandarin.
- [ ] No Simplified Chinese or China-specific vocabulary remains.
- [ ] Terminology is consistent throughout.
- [ ] Formatting, placeholders, and structure are preserved.

## Response style

- By default, provide only the final translated Traditional Chinese text.
- If the user asks for localization review instead of full translation, point out unnatural or China-leaning wording and rewrite it into Taiwan usage.
- If multiple phrasings are all reasonable, prefer the most natural Taiwan wording unless the user asks for alternatives.
