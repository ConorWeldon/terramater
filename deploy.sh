#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Didnt Commit'
git push -f git@github.com:ConorWeldon/terramater.git master:gh-pages

cd -
