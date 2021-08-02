## CONVENTIONAL LINT

Official Github:
https://github.com/conventional-changelog/commitlint

## Installation :

## Install commitlint cli and conventional config

npm install --save-dev @commitlint/{config-conventional,cli}

# For Windows:

npm install --save-dev @commitlint/config-conventional @commitlint/cli
To lint commits before they are created you can use Husky's commit-msg hook:

# Add hook

npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

# # Configure commitlint to use conventional config

echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

## Config

Configuration is picked up from commitlint.config.js, .commitlintrc.js, .commitlintrc.json, or .commitlintrc.yml file or a commitlint field in package.json

## CONVENTIONAL COMMIT RULES

https://raw.githubusercontent.com/conventional-changelog/commitlint/master/docs/referencerules.md

Add the convenstional commit config in the husky hook to perform convenstional lint for the changed files (stagged files) in the git hooks

npx husky add .husky/commit-msg 'npx --no-install commitlint --edit'

## FYR :

commit-msg --> git hook name

'npx --no-install commitlint --edit' --> inside that single hooks script or message need to do during that git hook
