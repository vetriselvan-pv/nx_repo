## STYLELINT

## Installation

1. Use npm to install stylelint and its standard configuration:

   npm install --save-dev stylelint stylelint-config-standard

2. Create a .stylelintrc.json configuration file in the root of your project:

   { "extends": "stylelint-config-standard"}

3. Run stylelint on, for example, all the CSS files in your project:
   npx stylelint "\*_/_.css"

But we not perform the step 3 and we configured in the lint staged file. To perform the lint only
for changed files .

Add the stylelint config in the lint stagged to perform style lint for the changed files (stagged files) in the git hooks
