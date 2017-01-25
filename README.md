# Bootstrap-styled

Bootstrap 4.0 made in styled components

## Table of Contents

  - [Dependencies](#dependencies)
  - [Installation](#installation)
  - [Basic Usage](#basic-usage)
  - [Documentation](#documentation)
  - [Developers](#developers)
  - [License](#license)

---

## Dependencies

This modules require the following peerDependencies : 
    
    "peerDependencies": {
        "react": "^15.4.2",
        "styled-components": "^1.3.1"
    },
    
It will automatically install the following dependencies :

    "dependencies": {
        "classnames": "2.2.5",
        "color": "1.0.3"
    },


## Installation

// Todo create link

    npm install bootstrap-styled --save

## Basic Usage

    import {
        DropDown,
        Button,
    } from 'bootstrap-styled;

If you want just part of your bootstrap for building a package to distribute for example you can also do

    import Button from 'bootstrap-styled/lib/components/Button';

## Documentation

The complete documentation is available at [http://doc.bootstrap.com](http://doc.bootstrap.com)

## Developers

Create a new distribution build (including distribution file and lib)

    npm run dist
    
Test driven development

    npm run tdd
    
Automatically build dist (do not build lib)

    npm run build:watch

## License

Copyright (c) 2017 Kopax Ltd. For more information `contact@kopaxgroup.com`.
