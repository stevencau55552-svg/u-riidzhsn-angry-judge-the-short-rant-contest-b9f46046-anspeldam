// SPDX-License-Identifier: MIT
// Angry Judge: The Short Rant Contest
// Writes one short, funny rant about an everyday annoyance to /output/entry.txt.
// Deterministic, stdlib only, no network, no API keys.
//
// The rant (winner of a 4-way judge-test against the published criteria):
// a self-checkout publicly accuses the shopper of shoplifting fruit, freezes,
// and summons the very human it was built to replace — with the kicker that
// the shopper chose self-checkout precisely to avoid talking to people.

import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  'The self-checkout screamed "unexpected item in bagging area" at a bag of ' +
  "apples I scanned myself, in front of a queue of people who now think I " +
  "shoplift fruit. Then it froze, called an attendant, and made me wait for " +
  "a human to do the job the machine replaced. I used self-checkout " +
  "specifically to avoid talking to people.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 400 characters,
// not only white space.
if (RANT.length < 1 || RANT.length > 400 || RANT.trim().length === 0) {
  throw new Error(`rant length ${RANT.length} outside the 1-400 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
console.log(`wrote ${RANT.length} chars to /output/entry.txt`);
