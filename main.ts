// One-line office joke entry for Make the AI Judge Laugh: Office Jokes.
// The program writes exactly one joke, and nothing else, to entry.txt.
// No trailing newline: every byte counts toward the size tie-break.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I automated my job with a spreadsheet, and now the spreadsheet has a performance review.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Self-check the gate before writing: 1-199 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`joke fails the gate at ${JOKE.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
