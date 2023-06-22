import { notify } from '@kyvg/vue3-notification'
import Driver from "driver.js"
import "driver.js/dist/driver.min.css"

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
const highlighting = (selectorName: string) => {
  let selector = `#${selectorName}`;
  console.log(selector);
  return driver.highlight({
    element: selector,
    popover: {
      title: 'Title for the Popover',
      description: 'Description for the Popover',
      position: 'left',
    }
  });
}

export { notifyMessage, highlighting }
