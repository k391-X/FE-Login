import { PopoverPosition } from '../../../utils/types';

const bottom: PopoverPosition = 'bottom';
const top: PopoverPosition = 'top';
const left: PopoverPosition = 'left';
const right: PopoverPosition = 'right';

const steps = [
    {
        element: '#startButton',
        popover: {
            title: 'Welcome!',
            description: 'Click this button to get started.',
            position: bottom
        }
    },
    {
        element: '#message',
        popover: {
            title: 'Important Message',
            description: 'Read this message carefully.',
            position: top
        }
    }
];

export { steps };