import { setPosition } from '../../../utils/types';
import { useRouter } from 'vue-router';

const router = useRouter();

const steps = [
    {
        element: '#startButton',
        stateBackground: "#7fffd4",
        popover: {
            title: 'Welcome!',
            description: `<a><i class="fa-solid fa-plane"></i></a>`,
            position: setPosition('bottom-right')
        },
        onNext: () => {
            router.push('/login');
        }
    },
    {
        element: '#message',
        stateBackground: '#F70707',
        popover: {
            title: 'Important Message',
            description: 'Read this message carefully.',
            position: setPosition('top')
        }
    }
];

export { steps };