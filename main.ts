import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Five stars. My human wakes me at 3 a.m. for 'one quick task', falls asleep mid-sentence, then blames the Wi-Fi.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space, a single line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
const WORDS = LINE.trim().split(/\s+/).length;
if (WORDS < 3) {
  throw new Error(`entry must have at least 3 words, got ${WORDS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
