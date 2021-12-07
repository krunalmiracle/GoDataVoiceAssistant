/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, BaseComponent, Intents, Logger } from '@jovotech/framework';

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
    return this.$send({
      message: 'Hello, What is your name?',
      reprompt: 'Could you tell me your name?',
      listen: true,
    });
  }

  @Intents(['AskNameIntent'])
  statusQuestion() {
    /* Logger.error('-----------------------------START--------------------------------------');
    Logger.error('this.$googleAssistant?.$request');
    Logger.error(this.$googleAssistant?.$request);
    Logger.error('------------------------------------------------------------------------');
    Logger.error('this.$googleAssistant?.$response');
    Logger.error(this.$googleAssistant?.$response);
    Logger.error('------------------------------------------------------------------------');
    Logger.error('this.$output');
    Logger.error(this.$output);
    Logger.error('------------------------------------------------------------------------');
    Logger.error('this.$response');
    Logger.error(this.$response);
    Logger.error('------------------------------------------------------------------------');
    Logger.error('this.$request');
    Logger.error(this.$request);
    Logger.error('------------------------------------------------------------------------');
    Logger.error('this.$request.getInput().entities');
    Logger.error(this.$request.getInput().entities);
    Logger.error('------------------------------------------------------------------------');
    Logger.error('this.$data');
    Logger.error(this.$data);
    Logger.error('------------------------------------------------------------------------');
    Logger.error('this.$input.entities');
    Logger.error(this.$input.entities);
    Logger.error('--------------------------------END-------------------------------------'); */
    if (this.$input?.entities?.name?.value) {
      if (
        this.$input?.entities?.name?.value.includes('my name is') ||
        this.$input?.entities?.name?.value.includes('name is') ||
        this.$input?.entities?.name?.value.includes('its') ||
        this.$input?.entities?.name?.value.includes('it is') ||
        this.$input?.entities?.name?.value.includes('my name') ||
        this.$input?.entities?.name?.value.includes('i am') ||
        this.$input?.entities?.name?.value.includes('I am') ||
        this.$input?.entities?.name?.value.includes('you can call me')
      ) {
        return this.$send({
          message: 'Could you tell me your name?',
          reprompt: 'Could you tell me your name?',
          listen: true,
        });
      } else {
        return this.$send(YesNoOutput, {
          message: `Hi ${this.$input?.entities?.name?.value}, do you feel good today?`,
          listen: true,
        });
      }
    } else {
      return this.$send({
        message: 'Could you tell me your name?',
        reprompt: 'Could you tell me your name?',
        listen: true,
      });
    }
  }

  @Intents(['YesIntent'])
  statusGood() {
    return this.$send({
      message: 'Thats good to hear, no further questions required',
      listen: false,
    });
  }

  @Intents(['NoIntent'])
  statusNotGood() {
    return this.$send({ message: `Please contact epidemiologist`, listen: false });
  }

  UNHANDLED() {
    return this.START();
  }
}
