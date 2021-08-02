## LINT STAGED

## Installation :

    First, we need to install a package:

           npm install lint-staged --save-dev

Create a file called .lintstagedrc in the root of the application and based on whether you are
using Prettier or ESLint, paste the proper code into it:
.lintstagedrc for Prettier: .lintstagedrc for ESLint:

Inside the .lintstagedrc

            {
                "_.{ts,json,md,scss,html,js}":
                    [ "prettier --write"],

                "_.ts":
                [ "eslint --fix" ],

                "\*.scss":
                ["stylelint --fix" ]

            }

## Enable the lint staged in the pre commit hook :

    If you not found .husky folder and pre-commit file . run the below cli

    npx husky add .husky/pre-commit

    this wil create a file and inside that you have to call the lint-staged as look below

    npx lint-staged

    easier way is run the cli with script

    npx husky add .husky/pre-commit 'npx lint-staged'
