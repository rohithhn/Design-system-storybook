import React from 'react';
import { cn } from '../lib/utils';
import { ToggleBase, type ToggleBaseType, type ToggleBaseSize, type ToggleBaseState } from './ToggleBase';

export interface ToggleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    type?: ToggleBaseType;
    size?: ToggleBaseSize;
    pressed?: boolean;
    text?: boolean;
    state?: ToggleBaseState;
    label?: string;
    description?: string;
    onPressedChange?: (pressed: boolean) => void;
    disabled?: boolean;
}

export const Toggle = React.forwardRef<HTMLDivElement, ToggleProps>(
    (
        {
            type = 'default',
            size = 'md',
            pressed = false,
            text = false,
            state = 'default',
            label,
            description,
            onPressedChange,
            disabled,
            className,
            ...props
        },
        ref
    ) => {
        const isDisabled = disabled || state === 'disabled';

        if (!text) {
            // Just the toggle switch without text
            return (
                <div ref={ref} className={cn("inline-flex", className)} {...props}>
                    <ToggleBase
                        type={type}
                        size={size}
                        pressed={pressed}
                        state={state}
                        onPressedChange={onPressedChange}
                        disabled={isDisabled}
                    />
                </div>
            );
        }

        // Toggle with text labels
        return (
            <div
                ref={ref}
                className={cn(
                    "flex items-center justify-between gap-3",
                    size === 'sm' && "min-w-[344px]",
                    size === 'md' && "min-w-[344px]",
                    className
                )}
                {...props}
            >
                <div className="flex-1">
                    {label && (
                        <label
                            className={cn(
                                "block font-medium text-text-primary",
                                size === 'sm' && "text-sm",
                                size === 'md' && "text-sm",
                                isDisabled && "opacity-40"
                            )}
                        >
                            {label}
                        </label>
                    )}
                    {description && (
                        <p
                            className={cn(
                                "text-text-tertiary mt-0.5",
                                size === 'sm' && "text-xs",
                                size === 'md' && "text-sm",
                                isDisabled && "opacity-40"
                            )}
                        >
                            {description}
                        </p>
                    )}
                </div>
                <ToggleBase
                    type={type}
                    size={size}
                    pressed={pressed}
                    state={state}
                    onPressedChange={onPressedChange}
                    disabled={isDisabled}
                />
            </div>
        );
    }
);

Toggle.displayName = 'Toggle';
