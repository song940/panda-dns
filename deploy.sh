#!/usr/bin/env bash

cd dns-frontend
npm i
NODE_ENV=production npm run build
cd ..

git add .
git commit -m deploy
git push origin master
git subtree push --prefix dns-frontend origin gh-pages