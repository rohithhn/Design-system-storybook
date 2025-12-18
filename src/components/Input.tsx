import React from 'react';
import { cn } from '../lib/utils';

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    error?: string;
    helperText?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    destructive?: boolean;
    variant?: 'default' | 'payment' | 'trailing-dropdown';
    size?: 'sm' | 'md';
    trailingAddon?: React.ReactNode; // For the dropdown trigger
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({
        className,
        type,
        label,
        error,
        helperText,
        startIcon,
        endIcon,
        disabled,
        destructive,
        variant = 'default',
        size = 'md',
        trailingAddon,
        ...props
    }, ref) => {

        const sizeClasses = {
            sm: "px-3 py-2 text-text-sm h-9", // 36px
            md: "px-3.5 py-2.5 text-text-md h-11", // 44px
        };

        // Auto-inject Credit Card icon for payment variant if startIcon not provided
        const finalStartIcon = startIcon || (variant === 'payment' && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ));

        return (
            <div className="w-full space-y-1.5">
                {label && (
                    <label
                        className={cn(
                            "text-text-sm font-medium text-text-secondary block",
                            disabled && "text-text-disabled"
                        )}
                        htmlFor={props.id}
                    >
                        {label}
                    </label>
                )}
                <div className="relative flex">
                    {/* Start Icon Container */}
                    {finalStartIcon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary z-10 pointer-events-none">
                            {finalStartIcon}
                        </div>
                    )}

                    <input
                        type={type}
                        className={cn(
                            "flex w-full rounded-md border bg-bg-primary text-text-primary shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/20",

                            // Size
                            sizeClasses[size],

                            // Border colors
                            (error || destructive)
                                ? "border-border-error focus-visible:border-border-error focus-visible:ring-border-error/20"
                                : "border-border-secondary focus-visible:border-border-brand",

                            // Trailing Dropdown Integration (Right side flat if addon present)
                            trailingAddon && "rounded-r-none border-r-0",

                            // Disabled state
                            disabled && "cursor-not-allowed bg-bg-disabled text-text-disabled opacity-50",

                            // Icon padding adjustments
                            finalStartIcon && "pl-10",
                            endIcon && "pr-10",

                            className
                        )}
                        ref={ref}
                        disabled={disabled}
                        {...props}
                    />

                    {/* End Icon Container */}
                    {endIcon && !trailingAddon && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none">
                            {endIcon}
                        </div>
                    )}

                    {/* Trailing Addon (e.g. Dropdown Trigger) */}
                    {trailingAddon && (
                        <div className="relative -ml-px">
                            {trailingAddon}
                        </div>
                    )}
                </div>
                {(error || helperText) && (
                    <p
                        className={cn(
                            "text-text-sm",
                            error ? "text-text-error-primary-600" : "text-text-tertiary",
                            disabled && "text-text-disabled"
                        )}
                    >
                        {error || helperText}
                    </p>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
