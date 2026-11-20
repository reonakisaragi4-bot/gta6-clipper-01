// Clip entry for make.fun's gta6-clipper-01 bounty: the video is the entry,
// and this program is only the courier that hands the house the video's
// address. It copies VIDEO.json from the repository root into the output
// directory, where the gate reads it and looks the video up on YouTube.
// Nothing this program writes is scored: places go by the video's views.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success and exits non-zero if VIDEO.json cannot be
// copied, so a missing or unreadable address fails loudly instead of
// silently handing in nothing.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
