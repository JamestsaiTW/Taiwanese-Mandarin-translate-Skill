#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const skillName = "taiwanese-mandarin-translate";
const skillSourceDir = path.join(repoRoot, ".agents", "skills", skillName);

const targetRoots = {
  claude: path.join(homedir(), ".claude", "skills"),
  codex: path.join(homedir(), ".agents", "skills"),
  gemini: path.join(homedir(), ".gemini", "skills"),
  copilot: path.join(homedir(), ".copilot", "skills")
};

const sharedAgentSkillDir = path.join(targetRoots.codex, skillName);

function parseArgs(argv) {
  const options = {
    target: "all",
    dryRun: false,
    uninstall: false,
    help: false
  };

  let commandSet = false;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (!arg.startsWith("-")) {
      if (commandSet) {
        throw new Error(`Unexpected positional argument: ${arg}`);
      }

      if (arg === "install" || arg === "init") {
        commandSet = true;
        continue;
      }

      if (arg === "uninstall" || arg === "remove") {
        options.uninstall = true;
        commandSet = true;
        continue;
      }

      if (arg === "help") {
        options.help = true;
        commandSet = true;
        continue;
      }

      throw new Error(`Unknown command: ${arg}`);
    }

    if (arg === "--target" || arg === "-t") {
      const nextValue = argv[index + 1];
      if (!nextValue) {
        throw new Error("Missing value for --target.");
      }
      options.target = nextValue;
      index += 1;
      continue;
    }

    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }

    if (arg === "--uninstall") {
      options.uninstall = true;
      commandSet = true;
      continue;
    }

    if (arg === "--help" || arg === "-h") {
      options.help = true;
      commandSet = true;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function printHelp() {
  console.log(
    [
      "Install or remove the Taiwan Mandarin translation skill.",
      "",
      "Usage:",
      "  npx taiwanese-mandarin-translate-skill [install|init] [--target <claude|codex|gemini|copilot|all>] [--dry-run]",
      "  npx taiwanese-mandarin-translate-skill uninstall [--target <claude|codex|gemini|copilot|all>] [--dry-run]",
      "  node scripts/install-skill.mjs [install|init] [--target <claude|codex|gemini|copilot|all>] [--dry-run]",
      "  node scripts/install-skill.mjs uninstall [--target <claude|codex|gemini|copilot|all>] [--dry-run]"
    ].join("\n")
  );
}

function resolveTargets(target) {
  if (target === "all") {
    return Object.keys(targetRoots);
  }

  if (Object.hasOwn(targetRoots, target)) {
    return [target];
  }

  throw new Error(`Unsupported target: ${target}`);
}

function ensureSkillSource() {
  if (!existsSync(skillSourceDir)) {
    throw new Error(`Skill source not found: ${skillSourceDir}`);
  }
}

function assertRequiredFiles() {
  const requiredPaths = [
    path.join(skillSourceDir, "SKILL.md"),
    path.join(skillSourceDir, "EXAMPLES.md"),
    path.join(skillSourceDir, "references", "vocabulary.md")
  ];

  for (const requiredPath of requiredPaths) {
    if (!existsSync(requiredPath)) {
      throw new Error(`Missing required skill file: ${requiredPath}`);
    }
  }
}

function listRelativeFiles(baseDir, currentDir = baseDir) {
  const entries = readdirSync(currentDir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listRelativeFiles(baseDir, fullPath));
      continue;
    }

    if (entry.isFile()) {
      results.push(path.relative(baseDir, fullPath));
    }
  }

  return results.sort();
}

function copySkill(targetDir, dryRun) {
  if (dryRun) {
    return;
  }

  rmSync(targetDir, { recursive: true, force: true });
  mkdirSync(path.dirname(targetDir), { recursive: true });
  cpSync(skillSourceDir, targetDir, { recursive: true });
}

function removeSkill(targetDir, dryRun) {
  if (dryRun) {
    return;
  }

  rmSync(targetDir, { recursive: true, force: true });
}

function formatOperationLabel(uninstall) {
  return uninstall ? "Would remove" : "Would install";
}

function formatDoneLabel(uninstall) {
  return uninstall ? "Removed" : "Installed";
}

function printSharedPathNotes(target, uninstall) {
  if (target === "codex") {
    console.warn(
      uninstall
        ? `Note: codex uses the shared Agent Skills path: ${sharedAgentSkillDir}. Other tools may still discover a copy if it remains.`
        : `Note: codex installs to the shared Agent Skills path: ${sharedAgentSkillDir}. Other tools may also discover that copy.`
    );
    return;
  }

  if (target !== "gemini" || !existsSync(sharedAgentSkillDir)) {
    return;
  }

  if (uninstall) {
    console.warn(
      `Note: Gemini may still discover the shared Agent Skills copy at ${sharedAgentSkillDir}. Remove or update that copy if you want Gemini to stop using it.`
    );
    return;
  }

  console.warn(
    `Note: a shared Agent Skills copy already exists at ${sharedAgentSkillDir}. Gemini may prefer that copy when it exists; update it too if you want Gemini to use the latest version.`
  );
}

function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    printHelp();
    return;
  }

  ensureSkillSource();
  assertRequiredFiles();

  const selectedTargets = resolveTargets(options.target);
  const relativeFiles = listRelativeFiles(skillSourceDir);

  for (const target of selectedTargets) {
    const targetDir = path.join(targetRoots[target], skillName);

    if (options.uninstall) {
      if (options.dryRun) {
        console.log(`${formatOperationLabel(true)} ${target}: ${targetDir}`);
        printSharedPathNotes(target, true);
      } else {
        removeSkill(targetDir, false);
        console.log(`${formatDoneLabel(true)} ${target}: ${targetDir}`);
        printSharedPathNotes(target, true);
      }
      continue;
    }

    if (options.dryRun) {
      console.log(`${formatOperationLabel(false)} ${target}: ${targetDir}`);
      for (const relativeFile of relativeFiles) {
        console.log(`  - ${relativeFile}`);
      }
      printSharedPathNotes(target, false);
      continue;
    }

    copySkill(targetDir, false);

    if (!statSync(targetDir).isDirectory()) {
      throw new Error(`Install failed for ${target}: ${targetDir}`);
    }

    console.log(`${formatDoneLabel(false)} ${target}: ${targetDir}`);
    printSharedPathNotes(target, false);
  }
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
