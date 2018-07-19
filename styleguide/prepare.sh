#!/usr/bin/env bash

npx rollup-umd-scripts doc variable \
  PACKAGE_NAME=$(node -p "require('./package.json').name") \
  PACKAGE_DESCRIPTION=$(node -p "require('./package.json').description") \
  PACKAGE_PEERS="$(npx rollup-umd-scripts peer npm-install-cmd)" \
  PACKAGE_VERSION=$(node -p "require('./package.json').version") \
  NODE_VERSION=$(node --version) \
  NPM_VERSION=$(npm --version) \
  CI_REPOSITORY_URL=${CI_REPOSITORY_URL} \
  CI_PROJECT_URL=${CI_PROJECT_URL} \
  CI_PROJECT_NAMESPACE=${CI_PROJECT_NAMESPACE} \
  CI_PROJECT_NAME=${CI_PROJECT_NAME} \
  DECLINATION_LIST="$(npx rollup-umd-scripts declination list --with-link)" \
  IMG_SHIELD_PUBLISHING=$(npx rollup-umd-scripts publish status --badge)
