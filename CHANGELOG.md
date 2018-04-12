# Changelog

All notable changes to this project will be documented in this file.

## [?NEXT?] - ????-??-??

- TODO: write changelog before preparing next tag

## [v1.5.13] - 2018-04-12

- Rename `makeTheme` to `theme` and removed `theme.js`.
- Improve `makeTheme`, first arg can accept a list of makeTheme instead of the object override.
- Using state instead of props in `BootstrapProvider`.

## [v1.5.12] - 2018-04-12

- Removed argument in `UtilityProvider` based on a mistake in `bootstrap-styled-mixin`.

## [v1.5.11] - 2018-04-07

- Corrected bug in `BootstrapProvider`.

## [v1.5.10] - 2018-04-05

- Improve sonar coverage


## [v1.5.9] - 2018-03-28

- Add color `white` to Card.

## [v1.5.8] - 2018-03-27

- Change all `getRef` with `innerRef`.

## [v1.5.7] - 2018-03-27

- Unfix dependency [react-portal](https://www.npmjs.com/package/react-portal) ^4.1.2.
- No singleton dependency [babel-plugin-styled-components](https://www.npmjs.com/package/babel-plugin-styled-components) from ^1.3.0 to ^1.5.1.
- No singleton dependency [prop-types](https://www.npmjs.com/package/prop-types) from ^15.6.0 to ^15.6.1.
- No singleton dependency [styled-components](https://www.npmjs.com/package/styled-components) from ^2.2.3 to ^3.2.3.
- No singleton dependency [styled-components](https://www.npmjs.com/package/styled-components) from ^2.1.2 to ^3.2.3.

## [v1.5.6] - 2018-03-27

- TODO: write change before preparing next tag

## [1.4.5] - 2018-02-15

- Added styleguide [WIP].
- Upgrade dependency react-transition-group from 1.2.0 to 2.2.1.
- Upgrade dependency bootstrap-styled-utils from 1.0.0 to 1.0.1.
- Updated Modal, Fade and Alert components to fit with react-transition-group v2.2.1.
- Added props uncontrolled to Alert component to avoid having to set closing function and state.
- Added props toggle to allow Close Button on Alert component.
- Added props autoHideDuration to set timer for auto-closing Alert component.
- Added dependency [react-portal](https://www.npmjs.com/package/react-portal) 4.1.2.

## [1.4.4] - 2018-01-15

- Removed `isLocked` props from `Modal`.
- Updated some z-index values to assure front position to `Modal` component.
- Automatically add CHANGELOG next todo on release.
- Added props `theme` to `Row` and omitted the props as with other components.
- Upgrade dependency [bootstrap-styled-mixins](https://www.npmjs.com/package/bootstrap-styled-mixins) from 1.0.0 to 1.0.1.

## [1.4.3] - 2017-11-10

- Added variable `$label-margin-bottom` to component `Label`.

## [1.4.2] - 2017-11-06

- Upgrade dependency [babel-plugin-styled-components](https://www.npmjs.com/package/babel-plugin-styled-components) from ^1.2.0 to ^1.3.0.
- Upgrade dependency [styled-components](https://www.npmjs.com/package/styled-components) from ^2.1.2 to ^2.2.3.
- Remove `v` to version prefix (Issue https://module.kopaxgroup.com/styled-components/bootstrap-styled/issues/6)
- Added possibility to override original variables `$font-size-h1` to `$font-size-h6`.
- Added possibility to override original variables `$display1-size` to `f$display4-size`.
- Added possibility to override original variables `$display1-weight` to `$display4-weight`.
- Fixed variables `$line-height-lg` and `$line-height-sm` so that they display accurate relative values.
- Fixed props `block` and `color` in Cards to be properly applied.
- Updated Row Component added `noGutters`, `cssModules` and `tag` props.
- Updated Badge Component so that `pill` props displays `badge-pill` css correctly.
- Removed a css rule from `Form` that would make an InputSelect way to large.
- Changed script CI config for auto version bumping.
- Add makeTheme for each components using theme

## [1.4.1] - 2017-09-29

- Deleted HeaderNavBar -> find it in the module navigation-bar instead
- In package.json
  - Added `rollup-umd` to scripts.
  - Updated Keywords and Author.
  - Added dependency `enzyme-adapter-react-16` v.1.0.0.
  - Added dependency `raf` v.3.3.2.
  - Upgraded `enzyme` from 2.9.1 to 3.0.0.
  - Upgraded `prop-types` from 15.5.10 to 15.6.0.
  - Upgraded `react` from 15.6.1 to 16.0.0.
  - Upgraded `react-dom` from 15.6.1 to 16.0.0.
  - Upgraded `react-test-renderer` from 15.6.1 to 16.0.0.
  - Upgraded `rimraf` from 2.6.1 to 2.6.2.
  - Added `setFiles` & `setupTestFrameworkScriptFile` to jest config.
- Created `internals/testing/test-bundler.js` following new `enzyme` version 3.0.0.
- In rollup.config.js
  - Added `immutable` to nameExports.
  - Moved `json()` config from below the `babel()` one to above.
- Fixed tests all around due to new version of `react` and `enzyme`.
- Added fix to `Modal` after new `react` version created bug.
- Decreased `test coverage` for functions from 93 to 92.
  
## [1.4.0] - 2017-09-26

- /!\ Move up all components within `src/components/` into `src/`.
- /!\ Reorganize `index.js` imports (API broken).
- Utilities, mixing have now their own packages.
  - Extract directory utils `tools` into package: [bootstrap-styled-utils](https://module.kopaxgroup.com/styled-components/bootstrap-styled-utils).
  - Extract mixins and utilities into package: [bootstrap-styled-mixins](https://module.kopaxgroup.com/styled-components/bootstrap-styled-mixins).
- Motion components are removed.
  - Motion variables are also removed.
  - Motion components and variables moved to separate package: [bootstrap-styled-motion](https://module.kopaxgroup.com/styled-components/bootstrap-styled-motion)
- Add dependency [bootstrap-styled-utils](https://module.kopaxgroup.com/styled-components/bootstrap-styled-utils) v1.0.0.
- Add dependency [bootstrap-styled-mixins](https://module.kopaxgroup.com/styled-components/bootstrap-styled-mixins) v1.0.0.
- Added css rules to `<Overlay />` and added `$zindex-overlay` variable.
- Folder `Forms` renamed `Form`.
- Added props `inline` to motion component with default value `true`.
- Replaced `jasmin.clock` with jest [timer-mock](https://facebook.github.io/jest/docs/en/timer-mocks.html).
- Upgrade `math-utils` from 0.3.0 to 0.3.1.
- Upgrade `color` from 1.0.3 to 2.5.0.
- Upgrade `rollup` from 0.49.3 to 0.50.0.
- Upgrade `sinon` from 2.3.2 to 3.3.0.  
- Upgrade `babel-cli` from 6.24.1 to 6.26.0. 
- Upgrade `babel-core` from 6.24.1 to 6.26.0. 
- Upgrade `babel-jest` from 20.0.3 to 21.0.2. 
- Upgrade `babel-plugin-transform-es2015-modules-commonjs` from 6.24.1 to 6.26.0.
- Upgrade `babel-plugin-transform-react-remove-prop-types` from 0.4.6 to 0.4.8.
- Upgrade `babel-preset-env` from 1.4.0 to 1.6.0.
- Upgrade `enzyme` from 2.8.2 to 2.9.1.
- Upgrade `jest-cli` from 19.0.1 to 21.1.0.
- Upgrade `jest-sonar-reporter` from 1.1.1 to 1.3.0.
- **prebuild** script does not trigger `npm run test` anymore.
- Remove fix `utils/fix`.
- CI: display minimized js size on build.

## [1.3.4] - 2017-09-19

- Added variable $menu-offset-nav-bg-color to the OffsetNav.
- Added variable $overlay-bg to the Overlay. 

## [1.3.3] - 2017-09-14

- body overflow class replaced `overflow` with `overflow-x`.
- mixin `body` improved in `<Modal />` and `<UtilityProvider />`.
- `getGlobalStyleNoBootrapProvider` added in reboot utils for those who don't use `<BootstrapProvider />`
- `getGlobalStyles` is now for those who use `<BootstrapProvider />`.
- Upgraded `rollup` from `v0.49.2` to `v0.49.3`.
- Upgraded `rollup-plugin-commonjs` from `v8.2.0` to `v8.2.1`.
- Improved HeaderNavBar css, properly displays push menus.
- `npm run build` now does not trigger `npm run test`.
- CI: job test now trigger `npm run test` before sending to sonarqube.

## [1.3.2] - 2017-09-13

- Renamed export of `unitMixins` in `unit`.

## [1.3.1] - 2017-09-13

- Added `parseTransition` to exports.
- Replaced props `alwaysShow` by `showMenu` and improved props validation and rendering of menu to `<HeaderNavBar />`.
- Corrected `tag` propTypes in `<Dropdown />`. 

## [1.3.0] - 2017-09-01

- Added `mapToCssModules` to `HeaderNavBar` and `OffsetNav` components.
- Added eslint rules `react/no-find-dom-node` since warning appears.
- Corrected `gitlab-ci.yml` to checkout from `CI_COMMIT_SHA`.
- Corrected `gitlab-ci.yml` to push `/lib` and `/div` on `HEAD:dev`.
- Upgraded `styled-components` from `v2.1.0` to `v2.1.2`.
- Upgraded `babel-plugin-styled-components` from `v1.1.4` to `v1.2.0`.
- Upgraded `react-transition-group` from `v1.1.2` to `v1.2.0`.
- Fixed `react-transition-group` version.
- Upgraded `rollup` from `v0.43.0` to `v0.49.2`.
- Upgraded `rollup-plugin-babel` from `v2.7.1` to `v3.0.2`.
- Upgraded `rollup-plugin-commonjs` from `v8.0.2` to `v8.2.0`.
- Upgraded `rollup-watch` from `v4.0.0` to `v4.3.1`.
- Added missing `react-transition-group` in `rollup.config.js` externals.
 
## [1.2.0] - 2017-06-20

- Replaced webpack with rollup module bundler for es module.
- Using `tether-fix` instead of `tether` for es module compatibility.
- Corrected branch not having the proper `dist` and `lib` on release.
- Releasing to master will now checkout to `dev` for bumping the version preventing concurrent build to fail the push of version bumping on `dev`.
- Move to [dependency](https://module.kopaxgroup.com/dev-tools/map-to-css-modules) [mapToCssModules](https://www.npmjs.com/package/map-to-css-modules)
- upgrade `react` 15.5.4 to 15.6.1.
- upgrade `styled-components` 2.0.0 to 2.1.0.
- upgrade `babel-cli` 6.22.2 to 6.24.1.
- upgrade `babel-core` 6.22.1 to 6.24.1.
- upgrade `babel-eslint` 7.1.1 to 7.2.3.
- upgrade `babel-loader` 6.2.10 to 7.0.0.
- upgrade `babel-plugin-transform-es2015-modules-commonjs` 6.22.0 to 6.24.1.
- upgrade `babel-preset-env` 1.2.0 to 1.4.0.
- upgrade `babel-preset-stage-0` 6.22.0 to 6.24.1.
- upgrade `eslint` 3.11.1 to 3.19.0.
- upgrade `eslint` 3.11.1 to 3.19.0.
- upgrade `react` 15.5.4 to 15.6.1.
- upgrade `react-addons-test-utils` 15.5.1 to 15.6.0.
- upgrade `react-dom` 15.5.4 to 15.6.1.
- upgrade `react-test-renderer` 15.5.4 to 15.6.1.

## [1.1.2]

- Added props `alwaysShow`, `offsetColor` and `shadowHeader` to `<HeaderNavBar />`.
- Fixed `size` props in Button.

## [1.1.1]

- Added tag on CI master.
 
## [1.1.0]

- Corrected version react-transition-group to fit peer.
- Corrected tooltip error since 15.5.
- Upgraded styled-components to v2.0.0 .
- Added test for getReactTransition.
- Corrected HeaderNavbar.
- Improve code quality.
- Inject body css in BootstrapProvider and Modal.
  
## [1.0.2]

- Corrected tooltip error since 15.5.

## [1.0.1]

- Corrected React 15.5 warnings.

## [1.0.0]
 
- Aadded animations components.
- Rename mixins exports.
- Handle tag within each components.
- Created documentation.
- 93% code coverage.

## [0.1.0] 

First release.
 
Include following :

## Components :
 - 
 - A
 - Pre
 - P
 - Tfoot
 - CardGroup
 - Button
 - Small
 - Code
 - CardDeckWrapper
 - IssueIcon
 - Fieldset
 - Option
 - Img
 - Alert
 - Input
 - Tr
 - Form
 - DropDown
 - Card
 - Ol
 - ContainerFluid
 - Table
 - Td
 - Output
 - Label
 - Row
 - Address
 - DocBootstrap
 - Container
 - Hr
 - H5
 - Dt
 - Caption
 - Area
 - H1
 - Details
 - Close
 - Dl
 - Mark
 - H3
 - Li
 - Textarea
 - H6
 - Breadcrumb
 - Summary
 - Tag
 - Footer
 - InputGroup
 - HeaderNavBar
 - Article
 - H4
 - H2
 - Section
 - Tbody
 - Th
 - Blockquote
 - Clearfix
 - Select
 - Ul
 - Nav
 - CardDeck
 - ButtonGroup
 - Abbr
 - CardColumns
 - Figure
 - NavBar
 - Map
 - Pagination
 - ListGroup
 - Legend
 - Header
 - Thead
 - Dd
 - Col
 - Progress
 - Kbd

## Mixins :

 - alert
 - transition
 - animation
 - text-truncate
 - variables
 - badge
 - size
 - grid
 - background-variant
 - pagination
 - lists
 - image
 - text-emphasis
 - tag
 - progress
 - clearfix
 - text-hide
 - box-shadow
 - float
 - unit
 - border-radius
 - button
 - forms
 - navbar-toggleable
 - reset-filter
 - nav-divider
 - gradients
 - list-group
 - cards
 - reset-text
 - visibility
 - conditional
 - navbar-align
 - grid-framework
 - resize
 - hover
 - tab-focus
 - screen-reader
 - table-row
 - breakpoints
 
## Utilities :

 - a
 - background
 - spacing
 - buttonGroup
 - visibility
 - button
 - text
 - display
 - flex
 - align
 - clearfix
 - screenreaders
 - nav
 - float
 - typography
 - borders
 - navbar
