// Runs before every build (npm "prebuild"). If a required file is missing or changed, the build
// fails, so Netlify keeps the last good version live instead of deploying a site without it.

import { readFileSync } from "node:fs";

const REQUIRED = [
  {
    // Google Search Console ownership proof. Deleting it un-verifies the site in Search Console.
    path: "public/google369fc32a9de6c8d6.html",
    content: "google-site-verification: google369fc32a9de6c8d6.html",
  },
];

let ok = true;
for (const file of REQUIRED) {
  let text;
  try {
    text = readFileSync(file.path, "utf8").trim();
  } catch {
    console.error(`✖ Missing required file: ${file.path}`);
    ok = false;
    continue;
  }
  if (text !== file.content) {
    console.error(`✖ Required file was changed: ${file.path}\n  expected: ${file.content}\n  found:    ${text}`);
    ok = false;
  }
}

if (!ok) {
  console.error("\nBuild stopped. Restore the file(s) above (see CLAUDE.md).");
  process.exit(1);
}
console.log("✓ Required files present");
