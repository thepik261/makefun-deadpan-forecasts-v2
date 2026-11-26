import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One deadpan weather forecast for Quillford, a city that does not exist.
// The gate requires /output/entry.txt to be UTF-8 text of 1 to 160 characters.
const LINE =
  "In Quillford, expect 9 centimetres of diagonal rain, a high of minus 1, and an 80 percent chance the mayor's umbrella is recalled for gross misconduct by noon.";

mkdirSync("/output", { recursive: true, mode: 0o755 });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
