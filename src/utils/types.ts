export type PopoverPosition = 'top' | 'right' | 'bottom' | 'left';

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