#!/bin/bash
git diff --diff-filter=d --cached --name-only --relative --exit-code -- '*.js' '*.jsx' '*.ts' '*.tsx' | xargs ./node_modules/.bin/prettier --write
