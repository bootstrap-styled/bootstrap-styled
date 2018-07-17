# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a 
   build.
2. Format your commit messages with [commitizen](#creating-releases).
3. You may merge the Pull Request in once you have the sign-off of two other developers, or if you 
   do not have permission to do that, you may request the second reviewer to merge it for you.

## Creating releases

[commitizen](https://github.com/commitizen/cz-cli) uses [semantic-release](https://github.com/semantic-release/semantic-release)
to release new versions automatically.

*  Commits of type `fix` will trigger bugfix releases, think `0.0.1`
*  Commits of type `feat` will trigger feature releases, think `0.1.0`
*  Commits with `BREAKING CHANGE` in body or footer will trigger breaking releases, think `1.0.0`

All other commit types will trigger no new release.
