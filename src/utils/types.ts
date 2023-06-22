type PopoverPosition = 'top' | 'right' | 'bottom' | 'left';

export const popoverPosition = (position:string) => {
    let result:PopoverPosition = 'bottom';
    if (position === 'top') {
        result = 'top';
    } else if (position === 'right') {
        result = 'right';
    } else if (position === 'left') {
        result = 'left';
    }

    return result;
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