/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, BaseComponent, Intents } from '@jovotech/framework';

import { YesNoOutput } from '../output/YesNoOutput';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| A component consists of handlers that respond to specific user requests
| Learn more here: www.jovo.tech/docs/components, jovo.tech/docs/handlers
|
*/
@Component()
export class GoDataComponent extends BaseComponent {
  START() {
    return this.$send(YesNoOutput, {
      message: 'Hello, What is your name?',
      reprompt: 'Could you tell me your name?',
      listen: true,
    });
  }
  /* @Intents(['MyNameIsHealtyIntent'])
  getName() {
    return this.$send(YesNoOutput, {
      message: 'Do You feel Good?',
      reprompt: 'Could you tell me how you feel?',
      listen: true,
    });
  } */
  /* "MyNameIsIntent" : {
    "phrases": [
      "{name}",
      "my name is {name}",
      "i am {name}",
      "you can call me {name}"
    ],
    "entities": {
      "name": {
        "value": "Max"
      }
    },
    "inputs": [
      {
        "type": {
          "alexa": "AMAZON.US_FIRST_NAME",
          "dialogflow": "@sys.given-name"
        }
      }
    ]
  }, */
  @Intents(['YesIntent'])
  statusGood() {
    return this.$send({
      message: 'Thats good to hear, no further question required',
      listen: false,
    });
  }

  @Intents(['NoIntent'])
  statusNotGood() {
    return this.$send({ message: `That's too bad, please contact epidemiologist`, listen: false });
  }

  UNHANDLED() {
    return this.START();
  }
}
