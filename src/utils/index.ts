import { notify } from '@kyvg/vue3-notification';
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
import { HighlightOptions, Step } from './types';

const notifyMessage = (status: number, message: string) => {
  if (status == 422) {
    notify({
      type: 'warn',
      title: 'Unsuccessful!',
      text: message,
      duration: 10000,
      speed: 2000,
    })
  } else if (status == 200) {
    notify({
      type: 'success',
      title: 'Successful!',
      text: message,
      duration: 10000,
      speed: 2000,
    })
  }
}

const driver = new Driver();

const singleHighlight = (selectorName: string, options:HighlightOptions) => {
  let selector = `#${selectorName}`;
  return driver.highlight({
    element: selector,
    popover: {
      title: options.title,
      description: options.description || 'Default Description',
      position: options.position || 'bottom',
    }
  });
}


const stepGuild = (steps: Step[]) => {
  driver.defineSteps(steps);
  driver.start();
}

export { notifyMessage, singleHighlight, stepGuild }
