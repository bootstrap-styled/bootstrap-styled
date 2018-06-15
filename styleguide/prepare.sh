#!/usr/bin/env bash

npx rollup-umd-scripts doc variable \
  PACKAGE_NAME=${PACKAGE_NAME} \
  PACKAGE_PEERS="$(npx rollup-umd-scripts peer npm-install-cmd)" \
  PACKAGE_VERSION=${PACKAGE_VERSION} \
  NODE_VERSION=${NODE_VERSION} \
  NPM_VERSION=${NPM_VERSION} \
  CI_REPOSITORY_URL=${CI_REPOSITORY_URL} \
  CI_PROJECT_URL=${CI_PROJECT_URL} \
  CI_PROJECT_NAMESPACE=${CI_PROJECT_NAMESPACE} \
  CI_PROJECT_NAME=${CI_PROJECT_NAME} \
  CLI_HELP="$(npx rollup-umd-scripts help)" \
  DECLINATION_LIST="$(npx rollup-umd-scripts declination list --with-link)" \
  IMG_SHIELD_PUBLISHING=$(npx rollup-umd-scripts publish status --badge)
