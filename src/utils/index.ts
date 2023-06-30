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

const driver = new Driver({
  
  // Called when element is about to be highlighted
  onHighlightStarted: () => {
    console.log('Event onHighlightStarted');  
  },

  // Called when element is fully highlighted
  onHighlighted: () => {
    console.log('Event onHighlighted');
    getApiMethodsDriverJS();
  },

  // Called when element has been deselected
  onDeselected: () => {
    console.log('Event onDeselected');
  },

  // Called when overlay is about to be cleared
  onReset: () => {
    console.log('Event onReset');
  },

  // Called when moving to next step on any step
  onNext: () => {
    console.log('Event onNext');
  },

  // Called when moving to previous step on any step 
  onPrevious: () => {
    console.log('Event onPrevious');
  }
}
);

const singleHighlight = (selectorName: string, options?: HighlightOptions) => {
  let selector = `#${selectorName}`;
  return driver.highlight({
    element: selector,
    popover: {
      title: options?.title,
      description: options?.description || 'Default Description',
      position: options?.position,
    }
  });
}

const getApiMethodsDriverJS = () => {
  if (driver.isActivated) {
    console.log('Driver is active');
  }

  if (driver.hasNextStep()) {
    console.log('Driver has next step');
  }

  if (driver.hasPreviousStep()) {
    console.log('Driver has previous step');
  }

  if (driver.hasHighlightedElement()) {
    console.log('There is an element hightLighted');
  }

  const activeElement = driver.getHighlightedElement();
  console.log('Active element:');
  console.log(activeElement);

  const lastActiveElement = driver.getLastHighlightedElement();
  console.log('Last active element: ' + lastActiveElement);
  console.log(lastActiveElement);
}


const stepGuild = (steps: Step[]) => {
  driver.defineSteps(steps);
  driver.start();
}

export { notifyMessage, singleHighlight, stepGuild }
