#!/usr/bin/env bash
# Homo Goetia PWA App Wrapper Launcher

if [ -d "/Applications/Google Chrome.app" ]; then
  open -na "Google Chrome" --args --app="https://westkitty.github.io/Homo_Goetia/"
else
  open "https://westkitty.github.io/Homo_Goetia/"
fi
