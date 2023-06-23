type PopoverPosition =
    'left' | 'left-center' | 'left-bottom' |
    'top' | 'top-center' | 'top-right' |
    'right' | 'right-center' | 'right-bottom' |
    'bottom' | 'bottom-center' | 'bottom-right' |
    'mid-center';

export const setPosition = (position: PopoverPosition) => {
    return position;
}

export interface HighlightOptions {
    title?: string;
    description?: string;
    position: PopoverPosition;
}

export interface Step {
    element: string | HTMLElement;
    popover: {
        title: string;
        description: string;
        position: PopoverPosition;
    }
};