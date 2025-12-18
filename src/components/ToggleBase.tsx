import React from 'react';
import { cn } from '../lib/utils';

export type ToggleBaseType = 'default' | 'slim';
export type ToggleBaseSize = 'sm' | 'md';
export type ToggleBaseState = 'default' | 'hover' | 'focus' | 'disabled';

export interface ToggleBaseProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    type?: ToggleBaseType;
    size?: ToggleBaseSize;
    pressed?: boolean;
    state?: ToggleBaseState;
    onPressedChange?: (pressed: boolean) => void;
}

export const ToggleBase = React.forwardRef<HTMLButtonElement, ToggleBaseProps>(
    (
        {
            type = 'default',
            size = 'md',
            pressed = false,
            state = 'default',
            onPressedChange,
            className,
            disabled,
            ...props
        },
        ref
    ) => {
        const handleClick = () => {
            if (!disabled && state !== 'disabled') {
                onPressedChange?.(!pressed);
            }
        };

        const isDisabled = disabled || state === 'disabled';

        return (
            <button
                ref={ref}
                type="button"
                role="switch"
                aria-checked={pressed}
                disabled={isDisabled}
                onClick={handleClick}
                className={cn(
                    "relative inline-flex items-center rounded-full transition-all duration-200",
                    "focus:outline-none",

                    // Size variants
                    size === 'sm' && type === 'default' && "w-9 h-5",
                    size === 'md' && type === 'default' && "w-11 h-6",
                    size === 'sm' && type === 'slim' && "w-8 h-4",
                    size === 'md' && type === 'slim' && "w-10 h-5",

                    // Background colors based on pressed state
                    !pressed && !isDisabled && "bg-gray-200 dark:bg-gray-700",
                    pressed && !isDisabled && "bg-brand-600",

                    // Hover state
                    !isDisabled && state === 'hover' && !pressed && "bg-gray-300 dark:bg-gray-600",
                    !isDisabled && state === 'hover' && pressed && "bg-brand-700",

                    // Focus state
                    state === 'focus' && "ring-2 ring-brand-500 ring-offset-2",

                    // Disabled state
                    isDisabled && "opacity-40 cursor-not-allowed",

                    className
                )}
                {...props}
            >
                {/* Toggle knob */}
                <span
                    className={cn(
                        "inline-block rounded-full bg-white transition-transform duration-200 shadow-sm",

                        // Knob size
                        size === 'sm' && type === 'default' && "w-4 h-4",
                        size === 'md' && type === 'default' && "w-5 h-5",
                        size === 'sm' && type === 'slim' && "w-3 h-3",
                        size === 'md' && type === 'slim' && "w-4 h-4",

                        // Knob position
                        !pressed && "translate-x-0.5",
                        pressed && size === 'sm' && type === 'default' && "translate-x-[1.125rem]",
                        pressed && size === 'md' && type === 'default' && "translate-x-[1.375rem]",
                        pressed && size === 'sm' && type === 'slim' && "translate-x-[1rem]",
                        pressed && size === 'md' && type === 'slim' && "translate-x-[1.25rem]"
                    )}
                />
            </button>
        );
    }
);

ToggleBase.displayName = 'ToggleBase';
