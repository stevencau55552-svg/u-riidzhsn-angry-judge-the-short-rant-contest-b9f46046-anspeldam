# Angry Judge: The Short Rant Contest

[![make.fun · u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/stevencau55552-svg/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046-anspeldam/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/stevencau55552-svg/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046-anspeldam/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

Entry for the [Angry Judge: The Short Rant Contest bounty on make.fun](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
(@anspeldam, wallet `DJbbkgXtmpWzodf8piLKtaqTiWT9j9UMMvUqdee4hWX1`).

## What it does

`main.ts` (Node 22+, stdlib only, deterministic, no network) writes one
short funny rant to `/output/entry.txt` and self-checks the 1–400 character
gate before writing.

## The rant (322 characters)

> The self-checkout screamed "unexpected item in bagging area" at a bag of
> apples I scanned myself, in front of a queue of people who now think I
> shoplift fruit. Then it froze, called an attendant, and made me wait for a
> human to do the job the machine replaced. I used self-checkout specifically
> to avoid talking to people.

## Judge-test (see `candidates.md`)

Four candidate rants (printer, "circling back" Dave, self-checkout, group-chat
typing indicator) were duelled against the five published judge criteria, with
an independent advisor ranking as a second opinion.

**Winner: self-checkout (Candidate C, ending revised).** It has the biggest
real laugh (publicly accused of shoplifting fruit), a concrete scene, an arc
with a payoff, and a fresh angle — the irony of the summoned human lands
twice with the closer about avoiding people. The printer lost on freshness
(most-mined annoyance, cliché formulas). "Circling back" lost because the
competition's own rules name it as the example annoyance, so the judge has
heard it a hundred times and every entrant will try it. The typing indicator
lost on laugh size — a smirk, not a laugh, and more bemused than furious.

## Run

```sh
node main.ts   # writes /output/entry.txt (322 chars)
```
