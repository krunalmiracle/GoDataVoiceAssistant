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
  endpoint: 'https://webhook.jovo.cloud/9c2e2631-ca5b-40df-a919-aaaf0f5804bc',
  plugins: [
    // Add Jovo CLI plugins here
    new GoogleAssistantCli({ projectId: 'ivr-godata-80046', locales: 'en' }),
  ],
});

module.exports = project;
