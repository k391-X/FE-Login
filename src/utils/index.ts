import  { notify } from '@kyvg/vue3-notification';
import "@kyvg/vue3-notification";

const notifyMessage = (status, message) => {
    if (status == 422) {
        notify({
            type: "warn",
            title: "Unsuccessful!",
            text: message,
            duration: 10000,
            speed: 2000,
        });
    } else if (status == 200) {
        notify({
            type: "success",
            title: "Successful!",
            text: message,
            duration: 10000,
            speed: 2000,
        });
    }
}

export {
    notifyMessage
}