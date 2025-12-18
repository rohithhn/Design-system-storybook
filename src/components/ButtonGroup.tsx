import React from 'react';
import { cn } from '../lib/utils';

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex rounded-lg shadow-sm",
                    // Apply negative margin to children to merge borders
                    "[&>*:not(:first-child)]:-ml-px",
                    // Radius handling for first child
                    "[&>*:first-child]:rounded-r-none",
                    // Radius handling for last child
                    "[&>*:last-child]:rounded-l-none",
                    // Radius handling for middle children
                    "[&>*:not(:first-child):not(:last-child)]:rounded-none",
                    // Focus ring handling: ensure focused button is above others
                    "[&>*:focus]:relative [&>*:focus]:z-10",
                    // Hover state handling for z-index
                    "[&>*:hover]:z-10",
                    className
                )}
                role="group"
                {...props}
            >
                {children}
            </div>
        );
    }
);
ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
