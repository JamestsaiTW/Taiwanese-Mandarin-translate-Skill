# Taiwanese Mandarin Translate Skill

English: [README.md](README.md)

將英文翻譯成 **台灣使用的繁體中文**，並把既有中文文案改寫成更自然的 **台灣華語**。這個 skill 目前以 **台灣華語** 作為預設語氣；若內容屬於正式或面向大眾的情境，則會適度借用 **中華民國國語** 書面語所強調的清楚、標準化，以及適合公共溝通的表達方式。

這個儲存庫目前以跨平台的結構封裝這個 skill，並附上一個小型安裝程式，可安裝到以下目標：

| 平台 | 目標名稱 | 使用者安裝路徑 |
| --- | --- | --- |
| Claude Code | `claude` | `~/.claude/skills/taiwanese-mandarin-translate/` |
| Codex CLI | `codex` | `~/.agents/skills/taiwanese-mandarin-translate/` |
| Gemini CLI | `gemini` | `~/.gemini/skills/taiwanese-mandarin-translate/` |
| GitHub Copilot | `copilot` | `~/.copilot/skills/taiwanese-mandarin-translate/` |

這裡的 `~` 是 Unix 風格的縮寫；在各平台上，這些路徑都會解析到你作業系統的使用者家目錄下，例如 Windows 的 `%USERPROFILE%`。

## 這個 skill 的重點

- 採用台灣偏好的軟體、UI 與技術文件用語
- 能辨識並改寫偏中國用法的措辭，調整成台灣常用說法
- 以台灣華語為預設風格，並可在台灣正式情境中切換到較中性的中華民國國語書面語氣
- 用詞在全台灣都容易理解，適合作為共享的公共語體
- 提供清楚的流程：理解 -> 翻譯 -> 校對 -> 潤飾
- 保留 Markdown、佔位符、程式碼、指令與原有結構

## 標準 skill 結構

這個 skill 的標準檔案結構如下：

```text
.agents/skills/taiwanese-mandarin-translate/
  SKILL.md
  EXAMPLES.md
  references/vocabulary.md
```

這個結構可直接用於支援專案層級 `.agents/skills` 的工具，而安裝程式也會把相同檔案複製到各工具的使用者層級 skill 目錄。

## 安裝

需要 Node.js 18 以上版本。

```bash
npm run install:all
```

安裝到單一平台：

```bash
node scripts/install-skill.mjs --target claude
node scripts/install-skill.mjs --target codex
node scripts/install-skill.mjs --target gemini
node scripts/install-skill.mjs --target copilot
```

注意事項：

- `claude`、`gemini` 與 `copilot` 會寫入各自原生的使用者 skill 資料夾。
- `codex` 會寫入 `~/.agents/skills/...`，這是共用的 Agent Skills 路徑，也可能被其他支援相同慣例的工具偵測到。
- 如果你已經把這個 skill 放在 `~/.agents/skills/...`，只更新或移除 `gemini` 目標時，Gemini 實際載入的內容可能不會改變，直到共用副本也一併更新或移除為止。

若只想預覽、不實際寫入檔案：

```bash
node scripts/install-skill.mjs --target all --dry-run
```

移除已安裝的副本：

```bash
node scripts/install-skill.mjs --uninstall --target all
```

## 使用時機

以下情況適合使用這個 skill：

- 將英文翻譯成適合台灣讀者的繁體中文
- 檢視並在地化既有中文文案
- 為 UI 文案、文件與產品文字改寫成自然的台灣用語

## 儲存庫結構

- `.agents/skills/taiwanese-mandarin-translate/SKILL.md`：主要的 skill 定義
- `.agents/skills/taiwanese-mandarin-translate/EXAMPLES.md`：句子層級的範例
- `.agents/skills/taiwanese-mandarin-translate/references/vocabulary.md`：分類整理的台灣用語參考
- `scripts/install-skill.mjs`：跨平台安裝程式
- `package.json`：CLI 入口與 npm scripts
