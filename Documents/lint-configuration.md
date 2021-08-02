LINT CONFIGURATION IN NX MONOREPO
Introduction :
In this Doc we are learn about different lint and how we perform the lint during commit
and various git hooks. Git Hooks -- > Git hooks are scripts that run automatically every time a particular
event occurs in a Git repository. They let you customize Git's internal behavior and trigger
customizable actions at key points in the development life cycle. Husky --.> Husky is a tool that allows us to easily wrangle Git hooks and run the
scripts we want at those stages. It works by including an object right within our package. json
file that configures Husky to run the scripts we specify. After that, Husky handles managing at
which point in the Git lifecycle our scripts will run. Eslint --> ESLint is a tool for identifying and reporting on patterns found in
ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In
many ways, it is similar to JSLint and JSHint with a few exceptions: ESLint uses Espree for
JavaScript parsing. stylelint --> A mighty, modern linter that helps you avoid errors and enforce
conventions in your styles.

## HUSKY

Installation :

# Install Husky

npm install husky --save-dev

# or

yarn add husky --dev

then we need to enable Git Hook:

npx husky-init && npm install

After the last command, make sure your project has a new directory .husky which you can find a
file called pre-commit . This file is related to the hook that will invoke before you commit. Also, make sure you see the following line of code in your package.json file under scriptsobject: "prepare": "husky install" The next step would be creating a file in the Husky directory for the purpose of linting commit
messages:

npx husky add .husky/commit-msg 'npx --no-install

commitlint --edit'  Message or script need to run inside file .  commit-msg --> file name (hooks name)
Supported Hooks

Husky supports all Git hooks except server side hooks (pre-receive, update and post-receive).  applypatch-msg - This hook is invoked by git-am. It takes a single parameter, the name of
the file that holds the proposed commit log message. Exiting with a non-zero status
causes git am to abort before applying the patch.  pre-applypatch - This hook is invoked by git-am. It takes no parameter, and is invoked after
the patch is applied, but before a commit is made.  post-applypatch - This hook is invoked by git-am. It takes no parameter, and is invoked after
the patch is applied and a commit is made.  pre-commit - This hook is invoked by git-commit, and can be bypassed with the --no- verify option. It takes no parameters, and is invoked before obtaining the proposed
commit log message and making a commit.  prepare-commit-msg - This hook is invoked by git-commit right after preparing the default
log message, and before the editor is started.
 commit-msg - This hook is invoked by git-commit and git-merge, and can be bypassed with
the --no-verify option. It takes a single parameter, the name of the file that holds the
proposed commit log message.  post-commit - This hook is invoked by git-commit. It takes no parameters, and is invoked
after a commit is made.  pre-rebase - This hook is called by git-rebase and can be used to prevent a branch from
getting rebased.  post-checkout - This hook is invoked when a git-checkout is run after having updated the
worktree.  post-merge - This hook is invoked by git-merge, which happens when a git pull is done on a
local repository.  pre-push - This hook is called by git-push and can be used to prevent a push from taking
place.  pre-auto-gc This hook is invoked by git gc --auto.  git-gc runs a number of housekeeping tasks within the current repository, such as
compressing file revisions (to reduce disk space and increase performance), removing
unreachable objects which may have been created from prior invocations of git add, packing refs, pruning reflog, rerere metadata or stale working trees.  post-rewrite - This hook is invoked by commands that rewrite commits (git-commit when
called with --amend and git-rebase. There are other less popular hooks, you can check them in git documentation
STYLELINT

1. Use npm to install stylelint and its standard configuration:
   npm install --save-dev stylelint stylelint-config-standard
2. Create a .stylelintrc.json configuration file in the root of your project:
   { "extends": "stylelint-config-standard"}
3. Run stylelint on, for example, all the CSS files in your project:
   npx stylelint "\*_/_.css" But we not perform the step 3 and we configured in the lint staged file. To perform the lint only
   for changed files .
   CONVENTIONAL LINT
   Official Github:
   https://github.com/conventional-changelog/commitlint
   Installation :

# Install commitlint cli and conventional config

npm install --save-dev @commitlint/{config-conventional,cli}

# For Windows:

npm install --save-dev @commitlint/config-conventional @commitlint/cli
To lint commits before they are created you can use Husky's commit-msg hook:

# Add hook

npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' # Configure commitlint to use conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
Config
Configuration is picked up from commitlint.config.js, .commitlintrc.js, .commitlintrc.json, or .commitlintrc.yml file or a commitlint field in package.json
CONVENTIONAL COMMIT RULES
https://raw.githubusercontent.com/conventional-changelog/commitlint/master/docs/referencerules.md
LINT STAGED
First, we need to install a package:
npm install lint-staged --save-dev
Create a file called .lintstagedrc in the root of the application and based on whether you are
using Prettier or ESLint, paste the proper code into it:
.lintstagedrc for Prettier: .lintstagedrc for ESLint:
Inside the .lintstagedrc
{
"_.{ts,json,md,scss,html,js}": [ "prettier --write"
],"_.ts": [ "eslint --fix"
],"\*.scss": ["stylelint --fix"
]
}
