const { AwesomeList } = require('p6-projen-project-awesome-list');
const project = new AwesomeList({
  author: 'Philip M. Gollucci',
  authorAddress: 'pgollucci@p6m7g8.com',
  defaultReleaseBranch: 'main',
  devDeps: ['p6-projen-project-awesome-list@1.0.1'],
  name: 'awesome-projen',
  repositoryUrl: 'https://github.com/pgollucci/awesome-projen.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();