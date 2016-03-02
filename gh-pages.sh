#!/bin/bash -e


if [ -d tmp ]; then rm -Rf tmp; fi
mkdir tmp && cd tmp
git clone git@github.com:angiolep/algojs.git --single-branch
cd algojs
git checkout --orphan gh-pages
git rm -rf .

jsdoc -c ../../jsdoc.json -t ../../node_modules/ink-docstrap/template -R ../../README.md -r ../../index.js -d .

git add -A .
git commit -am 'seed gh-pages'
git push -u origin gh-pages --force
