/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, BaseComponent, Global } from '@jovotech/framework';
//import { LoveHatePizzaComponent } from './LoveHatePizzaComponent';
import { GoDataComponent } from './GoDataComponent';
/*
|--------------------------------------------------------------------------
| Global Component
|--------------------------------------------------------------------------
|
| The global component handlers can be reached from anywhere in the app
| Learn more here: www.jovo.tech/docs/components#global-components
|
*/
@Global()
@Component()
export class GlobalComponent extends BaseComponent {
  LAUNCH() {
    return this.$redirect(GoDataComponent);
  }
}
