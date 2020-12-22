const { NodeProject } = require('projen');

const project = new NodeProject({
  name: 'awesome-projen',

  antitamper: false,
  gitpod: true,
  releaseBranches: ['main'],

  deps: [
    'awesome-lint'
  ],

  /* NodeProjectCommonOptions */
  // allowLibraryDependencies: true,                                           /* Allow the project to include `peerDependencies` and `bundledDependencies`. */
  // antitamper: true,                                                         /* Checks that after build there are no modified files on git. */
  // autoDetectBin: true,                                                      /* Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. */
  // bin: undefined,                                                           /* Binary programs vended with your module. */
  // buildWorkflow: undefined,                                                 /* Define a GitHub workflow for building PRs. */
  // bundledDeps: undefined,                                                   /* List of dependencies to bundle into this module. */
  // codeCov: false,                                                           /* Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret. */
  // codeCovTokenSecret: undefined,                                            /* Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. */
  // copyrightOwner: undefined,                                                /* License copyright owner. */
  // copyrightPeriod: undefined,                                               /* The copyright years to put in the LICENSE file. */
  // defaultReleaseBranch: 'master',                                           /* The name of the main release branch. */
  // dependabot: true,                                                         /* Include dependabot configuration. */
  // dependabotOptions: undefined,                                             /* Options for dependabot. */
  // deps: [],                                                                 /* Runtime dependencies of this module. */
  // devDeps: [],                                                              /* Build dependencies for this module. */
  // entrypoint: 'lib/index.js',                                               /* Module entrypoint (`main` in `package.json`). */
  // keywords: undefined,                                                      /* Keywords to include in `package.json`. */
  // libdir: 'lib',                                                            /* Compiler artifacts output directory. */
  // maxNodeVersion: undefined,                                                /* Minimum node.js version to require via `engines` (inclusive). */
  // mergify: true,                                                            /* Adds mergify configuration. */
  // mergifyAutoMergeLabel: 'auto-merge',                                      /* Automatically merge PRs that build successfully and have this label. */
  // mergifyOptions: undefined,                                                /* Options for mergify. */
  // minNodeVersion: undefined,                                                /* Minimum Node.js version to require via package.json `engines` (inclusive). */
  // npmDistTag: 'latest',                                                     /* The dist-tag to use when releasing to npm. */
  // npmignore: undefined,                                                     /* Additional entries to .npmignore. */
  // npmignoreEnabled: true,                                                   /* Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. */
  // npmRegistry: 'registry.npmjs.org',                                        /* The registry url to use when releasing packages. */
  // npmTaskExecution: NpmTaskExecution.PROJEN,                                /* Determines how tasks are executed when invoked as npm scripts (yarn/npm run xyz). */
  // packageManager: NodePackageManager.YARN,                                  /* The Node Package Manager used to execute scripts. */
  // peerDependencyOptions: undefined,                                         /* Options for `peerDeps`. */
  // peerDeps: [],                                                             /* Peer dependencies for this module. */
  // projenCommand: 'npx projen',                                              /* The shell command to use in order to run the projen CLI. */
  // projenDevDependency: true,                                                /* Indicates of "projen" should be installed as a devDependency. */
  // projenUpgradeAutoMerge: undefined,                                        /* Automatically merge projen upgrade PRs when build passes. */
  // projenUpgradeSchedule: [ '0 6 * * *' ],                                   /* Customize the projenUpgrade schedule in cron expression. */
  // projenUpgradeSecret: undefined,                                           /* Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`). */
  // projenVersion: Semver.latest(),                                           /* Version of projen to install. */
  // pullRequestTemplate: true,                                                /* Include a GitHub pull request template. */
  // pullRequestTemplateContents: undefined,                                   /* The contents of the pull request template. */
  // rebuildBot: undefined,                                                    /* Installs a GitHub workflow which is triggered when the comment "@projen rebuild" is added to a pull request. */
  // rebuildBotCommand: 'rebuild',                                             /* The pull request bot command to use in order to trigger a rebuild and commit of the contents of the branch. */
  // releaseBranches: [ 'master' ],                                            /* Branches which trigger a release. */
  // releaseEveryCommit: true,                                                 /* Automatically release new versions every commit to one of branches in `releaseBranches`. */
  // releaseSchedule: undefined,                                               /* CRON schedule to trigger new releases. */
  // releaseToNpm: false,                                                      /* Automatically release to npm when new versions are introduced. */
  // releaseWorkflow: undefined,                                               /* Define a GitHub workflow for releasing from "master" when new versions are bumped. */
  // scripts: {},                                                              /* npm scripts to include. */
  // srcdir: 'src',                                                            /* Typescript sources directory. */
  // testdir: 'test',                                                          /* Tests directory. */
  // workflowBootstrapSteps: 'yarn install --frozen-lockfile && yarn projen',  /* Workflow steps to use in order to bootstrap this repo. */
  // workflowContainerImage: undefined,                                        /* Container image to use for GitHub workflows. */
  // workflowNodeVersion: undefined,                                           /* The node version to use in GitHub workflows. */

  /* NodeProjectOptions */
  // authorEmail: undefined,                                                   /* Author's e-mail. */
  // authorName: undefined,                                                    /* Author's name. */
  // authorOrganization: undefined,                                            /* Author's Organization. */
  // authorUrl: undefined,                                                     /* Author's URL / Website. */
  // description: undefined,                                                   /* The description is just a string that helps people understand the purpose of the package. */
  // gitignore: undefined,                                                     /* Additional entries to .gitignore. */
  // homepage: undefined,                                                      /* Package's Homepage / Website. */
  // jest: true,                                                               /* Setup jest unit tests. */
  // jestOptions: undefined,                                                   /* Jest options. */
  // license: undefined,                                                       /* License's SPDX identifier. */
  // licensed: true,                                                           /* Indicates if a license should be added. */
  // repository: undefined,                                                    /* The repository is the location where the actual code for your package lives. */
  // repositoryDirectory: undefined,                                           /* If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. */
  // stability: undefined,                                                     /* Package's Stability. */

  /* ProjectOptions */
  // clobber: true,                                                            /* Add a `clobber` task which resets the repo to origin. */
  // gitpod: false,                                                            /* Adds a gitpod configuration. */
  // outdir: '.',                                                              /* The root directory of the project. */
  // parent: undefined,                                                        /* The parent project, if this project is part of a bigger project. */
});

project.github.addMergifyRules({
  name: 'Label core contributions',
  actions: {
    label: {
      add: ['contribution/core'],
    },
  },
  conditions: [
    'author~=^(pgollucci)$',
    'label!=contribution/core',
  ],
});

project.github.addMergifyRules({
  name: 'Label auto-merge for core',
  actions: {
    label: {
      add: ['auto-merge'],
    },
  },
  conditions: [
    'label=contribution/core',
    'label!=auto-merge',
  ],
});

project.gitpod.addTasks({
  name: 'Setup',
  init: 'yarn install',
  command: 'npx projen build',
});

const awesomeLintTask = project.addTask("awesome-lint");
awesomeLintTask.exec('awesome-lint');

project.buildTask.spawn(awesomeLintTask)

project.synth();
