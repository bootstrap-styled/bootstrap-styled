# Changelog

All notable changes to this project will be documented in this file.

## [1.2.2] - 2017-09-01

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
 - Corrected branch not having the proper `dist` and `lib` on release
 - Releasing to master will now checkout to `dev` for bumping the version preventing concurrent build to fail the push of version bumping on `dev`
 - Move to [dependency](https://module.kopaxgroup.com/dev-tools/map-to-css-modules) [mapToCssModules](https://www.npmjs.com/package/map-to-css-modules)
 - upgrade `react` 15.5.4 to 15.6.1
 - upgrade `styled-components` 2.0.0 to 2.1.0
 - upgrade `babel-cli` 6.22.2 to 6.24.1
 - upgrade `babel-core` 6.22.1 to 6.24.1
 - upgrade `babel-eslint` 7.1.1 to 7.2.3
 - upgrade `babel-loader` 6.2.10 to 7.0.0
 - upgrade `babel-plugin-transform-es2015-modules-commonjs` 6.22.0 to 6.24.1
 - upgrade `babel-preset-env` 1.2.0 to 1.4.0
 - upgrade `babel-preset-stage-0` 6.22.0 to 6.24.1
 - upgrade `eslint` 3.11.1 to 3.19.0
 - upgrade `eslint` 3.11.1 to 3.19.0
 - upgrade `react` 15.5.4 to 15.6.1
 - upgrade `react-addons-test-utils` 15.5.1 to 15.6.0
 - upgrade `react-dom` 15.5.4 to 15.6.1
 - upgrade `react-test-renderer` 15.5.4 to 15.6.1

## [1.1.2]

 - Added props `alwaysShow`, `offsetColor` and `shadowHeader` to `<HeaderNavBar />`
 - Fixed `size` props in Button

## [1.1.1]

 - Added tag on CI master
 
## [1.1.0]

 - Corrected version react-transition-group to fit peer
 - Corrected tooltip error since 15.5
 - Upgraded styled-components to v2.0.0 
 - Added test for getReactTransition
 - Corrected HeaderNavbar
 - Improve code quality
 - Inject body css in BootstrapProvider and Modal
  
## [1.0.2]

 - Corrected tooltip error since 15.5

## [1.0.1]

 - Corrected React 15.5 warnings

## [1.0.0]
 
Release V1

 - added animations components
 - rename mixins exports
 - handle tag within each components
 - created documentation
 - 93% code coverage

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
