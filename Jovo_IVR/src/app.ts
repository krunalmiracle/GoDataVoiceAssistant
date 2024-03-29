import { GoogleAssistantPlatform } from '@jovotech/platform-googleassistant';
import { CorePlatform } from '@jovotech/platform-core';
import { App } from '@jovotech/framework';

import { GlobalComponent } from './components/GlobalComponent';
import { GoDataComponent } from './components/GoDataComponent';

/*
|--------------------------------------------------------------------------
| APP CONFIGURATION
|--------------------------------------------------------------------------
|
| All relevant components, plugins, and configurations for your Jovo app
| Learn more here: www.jovo.tech/docs/app-config
|
*/
const app = new App({
  /*
  |--------------------------------------------------------------------------
  | Components
  |--------------------------------------------------------------------------
  |
  | Components contain the Jovo app logic
  | Learn more here: www.jovo.tech/docs/components
  |
  */
  components: [GlobalComponent, GoDataComponent],

  /*
  |--------------------------------------------------------------------------
  | Plugins
  |--------------------------------------------------------------------------
  |
  | Includes platforms, database integrations, third-party plugins, and more
  | Learn more here: www.jovo.tech/marketplace
  |
  */
  plugins: [
    // Add Jovo plugins here
    new GoogleAssistantPlatform(),
    new CorePlatform(),
  ],

  /*
  |--------------------------------------------------------------------------
  | Other options
  |--------------------------------------------------------------------------
  |
  | Includes all other configuration options like logging
  | Learn more here: www.jovo.tech/docs/app-config
  |
  */
  logging: {
    enabled: true,
    request: true,
    response: true,
    // ...
  },

  routing: {
    intentMap: {
      'AMAZON.StopIntent': 'END',
    },
  },
});

export { app };
