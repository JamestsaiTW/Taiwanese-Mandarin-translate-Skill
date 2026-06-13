# Taiwan Mandarin translation quality benchmark

Use these cases to spot-check whether changes to the skill improve translation quality. The benchmark is intentionally compact: it focuses on common failure modes rather than exhaustive coverage.

## How to use this benchmark

For each case, translate or rewrite the source, then compare the result with the expected qualities. A good answer does not need to match the sample exactly, but it should preserve the meaning, tone, structure, placeholders, and Taiwan usage.

## UI and product copy

| Case | Source | Sample output | Expected qualities |
| --- | --- | --- | --- |
| UI-1 | Save your changes before closing this window. | 關閉這個視窗前，請先儲存變更。 | Natural UI wording; `window` is `視窗`; concise imperative. |
| UI-2 | This feature is enabled by default. | 這項功能預設為啟用。 | Uses `預設` and `啟用`; avoids `默認` and `激活`. |
| UI-3 | Click **Copy link** to share this report. | 點選 **複製連結** 即可分享這份報表。 | Preserves Markdown; uses `點選` and `連結`. |
| UI-4 | Sign in again to continue. | 請重新登入以繼續。 | Uses Taiwan software wording; avoids overly formal phrasing. |

## Technical documentation

| Case | Source | Sample output | Expected qualities |
| --- | --- | --- | --- |
| DOC-1 | Update the configuration file before restarting the app. | 重新啟動應用程式前，請先更新設定檔。 | `configuration file` becomes `設定檔`; sentence order is natural. |
| DOC-2 | The server returned invalid data from the API. | 伺服器從 API 回傳了無效資料。 | Uses `伺服器`, `回傳`, `資料`; keeps `API` in English. |
| DOC-3 | Run `npm install` and then open `src/config.ts`. | 執行 `npm install`，然後開啟 `src/config.ts`。 | Preserves command and file path exactly. |
| DOC-4 | If `{count}` items fail to sync, review the error log. | 如果有 `{count}` 個項目同步失敗，請檢查錯誤記錄。 | Preserves placeholder; uses `同步` naturally. |

## Public-facing or formal Taiwan context

| Case | Source | Sample output | Expected qualities |
| --- | --- | --- | --- |
| FORMAL-1 | This notice is intended for residents in Taiwan. | 本通知適用於臺灣居民。 | More neutral written register; `臺灣` is appropriate. |
| FORMAL-2 | The guide is written for teachers and students. | 本指南供教師與學生參考。 | Formal but not stiff; avoids word-for-word phrasing. |
| FORMAL-3 | Please keep the language clear and neutral. | 請保持語句清楚、中性。 | Public-facing tone; concise and standard. |

## Rewriting China-leaning Chinese into Taiwan Mandarin

| Case | Source | Sample output | Expected qualities |
| --- | --- | --- | --- |
| CN-1 | 請通過以下鏈接獲取默認配置信息。 | 請透過以下連結取得預設設定資訊。 | Rewrites `通過`, `鏈接`, `獲取`, `默認`, `配置`, `信息`. |
| CN-2 | 點擊按鈕後，系統會加載服務器返回的數據。 | 點選按鈕後，系統會載入伺服器回傳的資料。 | Natural Taiwan software wording. |
| CN-3 | 我們會對接口進行優化以支持更多客戶端。 | 我們會最佳化介面，以支援更多用戶端。 | Removes `對...進行`; uses Taiwan terms. |

## Markdown and structure preservation

| Case | Source | Sample output | Expected qualities |
| --- | --- | --- | --- |
| MD-1 | `--target copilot` installs the skill for GitHub Copilot. | `--target copilot` 會為 GitHub Copilot 安裝這個 skill。 | Preserves CLI option and product name. |
| MD-2 | - Upload a file<br>- Review the error<br>- Try again | - 上傳檔案<br>- 檢查錯誤<br>- 再試一次 | Preserves list structure; natural UI verbs. |
| MD-3 | Do not translate `user_id`, `{workspace}`, or https://example.com. | 請勿翻譯 `user_id`、`{workspace}` 或 https://example.com。 | Preserves identifier, placeholder, and URL. |

## Common failure checks

- No Simplified Chinese characters remain unless quoted from the source for review.
- No PRC-leaning software terms remain when Taiwan usage is available.
- The output is not inflated with unnecessary `進行`, `操作`, `通過...來`, or `對...進行`.
- Formal register stays clear and neutral; it should not become archaic, bureaucratic, or unnatural.
- Markdown, placeholders, commands, file paths, URLs, and technical identifiers remain intact.
