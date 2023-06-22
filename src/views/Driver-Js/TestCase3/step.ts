import { popoverPosition } from '../../../utils/types';

const steps = [
    {
        element: '#startButton',
        popover: {
            title: 'Welcome!',
            description: 'Click this button to get started.',
            position: popoverPosition('bottom')
        }
    },
    {
        element: '#message',
        popover: {
            title: 'Important Message',
            description: 'Read this message carefully.',
            position: popoverPosition('top')
        }
    }
];

export { steps };