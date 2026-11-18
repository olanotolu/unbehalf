// Validates the static site: every local file referenced by index.html must
// exist, and no inline <style> or inline <script> may have crept back in.
import { readFileSync, existsSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const failures = [];

// local href/src references (skip data:, http(s):, #, mailto:)
const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((r) => !/^(data:|https?:|#|mailto:)/.test(r));
for (const ref of new Set(refs)) {
  if (!existsSync(ref)) failures.push(`missing referenced file: ${ref}`);
}
if (/<style[\s>]/.test(html)) failures.push("inline <style> block found (CSS lives in styles.css)");
if (/<script(?![^>]*\bsrc=)[^>]*>/.test(html)) failures.push("inline <script> found (JS lives in app.js)");
if (!/<title>[^<]+<\/title>/.test(html)) failures.push("no <title> found");

if (failures.length) {
  for (const f of failures) console.error(`check failed: ${f}`);
  process.exit(1);
}
console.log(`check passed: ${refs.length} referenced file(s) OK, no inline CSS/JS`);
