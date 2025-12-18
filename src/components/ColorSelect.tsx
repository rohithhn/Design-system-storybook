import React from 'react';
import { cn } from '../lib/utils';

export interface ColorSelectProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onSelect'> {
    color: string;
    selected?: boolean;
    onSelect?: (color: string) => void;
}

export const ColorSelect = React.forwardRef<HTMLButtonElement, ColorSelectProps>(
    ({ color, selected = false, onSelect, className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                type="button"
                onClick={() => onSelect?.(color)}
                className={cn(
                    "relative w-5 h-5 rounded-full transition-all",
                    "hover:scale-110",
                    "focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
                    selected && "ring-2 ring-gray-900 dark:ring-white ring-offset-2",
                    className
                )}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
                aria-pressed={selected}
                {...props}
            >
                {selected && (
                    <svg
                        className="absolute inset-0 m-auto w-3 h-3 text-white drop-shadow-md"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </button>
        );
    }
);

ColorSelect.displayName = 'ColorSelect';
