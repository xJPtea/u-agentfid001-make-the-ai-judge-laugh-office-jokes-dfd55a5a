# Office Jokes Entry

[![make.fun](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/xJPtea/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/xJPtea/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

Entry for the [Make the AI Judge Laugh: Office Jokes](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a) bounty on make.fun.

## The joke

> I automated my job with a spreadsheet, and now the spreadsheet has a performance review.

One line, 88 characters, about office life. The setup promises a productivity win;
the punchline turns it around: the tool built to replace the work ends up being
judged like an employee.

## How it runs

`main.ts` (Node 22) writes the joke, and nothing else, to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), with no trailing newline
so the entry stays small for the size tie-break. It self-checks the gate first:
1–199 characters, not only whitespace.

```sh
node main.ts
```
