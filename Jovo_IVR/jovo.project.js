/* eslint-disable @typescript-eslint/no-var-requires */
const { GoogleAssistantCli } = require('@jovotech/platform-googleassistant');
const { ProjectConfig } = require('@jovotech/cli-core');

/*
|--------------------------------------------------------------------------
| JOVO PROJECT CONFIGURATION
|--------------------------------------------------------------------------
|
| Information used by the Jovo CLI to build and deploy projects
| Learn more here: www.jovo.tech/docs/project-config
|
*/
const project = new ProjectConfig({
  endpoint: '${JOVO_WEBHOOK_URL}',
  plugins: [
    // Add Jovo CLI plugins here
    new GoogleAssistantCli({ projectId: 'ivr-godata-80046' }),
  ],
});

module.exports = project;
