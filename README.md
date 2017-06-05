# Bootstrap-styled

Bootstrap 4.0 made in styled components

**Master**

[![build status](https://module.kopaxgroup.com/styled-components/bootstrap-styled/badges/master/build.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled/commits/master)
[![coverage report](https://module.kopaxgroup.com/styled-components/bootstrap-styled/badges/master/coverage.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled/commits/master)

**Dev**

[![build status](https://module.kopaxgroup.com/styled-components/bootstrap-styled/badges/dev/build.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled/commits/dev)
[![coverage report](https://module.kopaxgroup.com/styled-components/bootstrap-styled/badges/dev/coverage.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled/commits/dev)

## Table of Contents

  - [Dependencies](#dependencies)
  - [Installation](#installation)
  - [Basic Usage](#basic-usage)
  - [Mixins](#mixins)
  - [Utilities](#utilities)
  - [Documentation](#documentation)
  - [Developers](#developers)
  - [License](#license)

---

## Changelog

 - View [changelog](CHANGELOG.md)

## Dependencies

This modules require peerDependencies, see `package.json`.

## Installation

    npm install ssh://git@module.kopaxgroup.com:20024/styled-components/bootstrap-styled.git --save

## Basic Usage

bootstrap-styled is made on top of [styled-components](https://github.com/styled-components/styled-components)

__Wrapper your application within a `<BootstrapProvider>` __instead of__ a `<ThemeProvider>`__

    import { BootstrapProvider } from 'bootstrap-styled';
    // ... then in your render
    <BootstrapProvider theme={theme}>
        <App />
    </BootstrapProvider>
    
This will execute all the compatiblity fix for all the different browsers.

For more information see `src/components/BootstrapProvider/index.js`

__Import bootstrap-styled component__
    
    import {
        A,
        Ul,
        Li,
        Pre,
        Form,
        DropDown,
        Button,
    } from 'bootstrap-styled;

If you want just part of your bootstrap for building a package to distribute for example you can also do

    import Button from 'bootstrap-styled/lib/components/Button';
    
## Mixins

Example of import of the __breapoints__ mixins

    import { bp } from 'bootstrap-styled';

## Utilities

Example of import of the __visibility__ utility

    import { visibilityUtils } from 'bootstrap-styled';

## Documentation

The complete documentation is available at [http://bootstrap-styled.kopaxgroup.com](http://bootstrap-styled.kopaxgroup.com)

## Developers

### Contribute

`master` is used to release the version. 

- `master` only accept merge requests from `dev`

`dev` is the developement branch. It should be used by developers for applying their merge requests.

If you wish to implement new functionalities you need to do a merge request including your change on the `dev` branch.

    git checkout dev
    git checkout $(whoami)-dev
    git push -u origin $(whoami)-dev 

You can now start working on your branch. Don't forget to check `Delete branch when merged`.

### Guide

Create a new distribution build (including distribution file and lib)

    npm run dist
    
Test driven development

    npm run tdd
    
Automatically build dist (do not build lib)

    npm run build:watch
    
Exports are done in `src/index.js`, the suffix __Utils__ and __Mixins__ are reserved for mixins and utilities.

Utilities available in the API are exported in `src/utilities`;

Mixins available in the API are exported in `src/mixins`;

## License

Copyright (c) 2017 Kopax Ltd. For more information `contact@kopaxgroup.com`.
