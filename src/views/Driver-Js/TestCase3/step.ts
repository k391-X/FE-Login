import { setPosition } from '../../../utils/types';

const steps = [
    {
        element: '#startButton',
        stateBackground: "#7fffd4",
        popover: {
            title: 'Welcome!',
            description: 'Click this button to get started.',
            position: setPosition('bottom-right')
        }
    },
    {
        element: '#message',
        popover: {
            title: 'Important Message',
            description: 'Read this message carefully.',
            position: setPosition('top')
        }
    }
];

export { steps };