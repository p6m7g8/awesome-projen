import { AwesomeList } from 'p6-projen-project-awesome-list';
import { JobPermission } from 'projen/lib/github/workflows-model';

const project = new AwesomeList({
  author: 'Philip M. Gollucci',
  authorAddress: 'pgollucci@p6m7g8.com',
  defaultReleaseBranch: 'main',
  devDeps: ['p6-projen-project-awesome-list@1.0.1'],
  name: 'awesome-projen',
  repositoryUrl: 'https://github.com/pgollucci/awesome-projen.git',
  projenrcTs: true,
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */

});

const linkChecker = project.github?.addWorkflow('link-checker');
linkChecker?.on({ schedule: [{ cron: '0 0 1 * *' }], workflowDispatch: {} });
linkChecker?.addJobs({
  linkchecker: {
    runsOn: ['ubuntu-latest'],
    name: 'Link Checker',
    permissions: {
      actions: JobPermission.WRITE,
      contents: JobPermission.READ,
      idToken: JobPermission.WRITE,
    },
    steps: [
      { name: 'Checkout code', uses: 'actions/checkout@v3' },
      {
        name: 'Check Links',
        id: 'lychee',
        uses: 'lycheeverse/lychee-action@v1.5.1',
        with: {
          args: '--verbose --max-concurrency 32 --timeout 120 --no-progress *.md',
        },
      },
      {
        name: 'Create Issue From File',
        if: '${{ steps.lychee.outputs.exit_code != 0 }}',
        uses: 'peter-evans/create-issue-from-file@v4',
        with: {
          'title': 'Link Checker Report',
          'content-filepath': './lychee/out.md',
          'labels': 'report, automated issue',
        },
      },
      {
        name: 'Fail if there were link errors',
        if: '${{ steps.lychee.outputs.exit_code != 0 }}',
        run: 'exit ${{ steps.lychee.outputs.exit_code }}',
      },
    ],
  },
});

project.synth();
