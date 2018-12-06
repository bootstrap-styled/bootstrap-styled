{
  "only": [
    "src",
    "styleguide"
  ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": [
    "array-includes",
    "@babel/plugin-proposal-class-properties",
    "styled-components",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-json-strings",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions"
  ],
  "env": {
    "production": {
      "plugins": [
        "add-module-exports",
        "@babel/plugin-transform-modules-commonjs"
      ]
    },
    "test": {
      "plugins": [
        "@babel/plugin-transform-modules-commonjs",
        "dynamic-import-node"
      ]
    }
  }
}
