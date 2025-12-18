import React from 'react';
import { cn } from '../lib/utils';

export interface TextHighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: string;
    children: React.ReactNode;
}

export const TextHighlight = React.forwardRef<HTMLSpanElement, TextHighlightProps>(
    ({ color = '#FFEB3B', children, className, style, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(
                    "px-1 rounded-sm",
                    className
                )}
                style={{
                    backgroundColor: color,
                    ...style
                }}
                {...props}
            >
                {children}
            </span>
        );
    }
);

TextHighlight.displayName = 'TextHighlight';
