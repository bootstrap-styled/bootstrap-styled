# bootstrap-styled

bootstrap-styled npm package.

**Master**

[![build status](https://module.kopaxgroup.com/styled-components/bootstrap-styled/badges/master/build.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled/commits/master)
[![coverage report](https://module.kopaxgroup.com/styled-components/bootstrap-styled/badges/master/coverage.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled/commits/master)

**Dev**

[![build status](https://module.kopaxgroup.com/styled-components/bootstrap-styled/badges/dev/build.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled/commits/dev)
[![coverage report](https://module.kopaxgroup.com/styled-components/bootstrap-styled/badges/dev/coverage.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled/commits/dev)

## Table of Contents

  - [Changelog](#changelog)
  - [Quick start](#quick-start)
  - [License](#license)

---

## Changelog

  - View [Changelog](CHANGELOG.md)

## Quick start

Clone project

    git clone ssh://git@module.kopaxgroup.com:20024/styled-components/bootstrap-styled.git

Install dependencies

    npm install

Build project

    npm run build
    
Run unit test
     
    npm test
    
Watch unit test
     
    npm run test:watch

Watch the `/dist` directory

    npm run build:dist:watch

Watch the `/lib` directory

    npm run build:lib:watch

# Contribute

`master` is used to release the version. 

- `master` only accept merge requests from `dev`

`dev` is the developement branch. It should be used by developers for applying their merge requests.

If you wish to implement new functionalities you need to do a merge request including your change on the `dev` branch.

    git checkout dev
    git checkout $(whoami)-dev
    git push -u origin $(whoami)-dev 

## License

Licensed under the MIT License, Copyright © 2017-present Yeutech Company Limited.

See [LICENSE](LICENSE.md) for more information.
