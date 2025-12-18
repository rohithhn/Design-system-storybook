import React from 'react';
import { cn } from '../lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
    destructive?: boolean;
    ['data-tags']?: React.ReactNode;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({
        className,
        label,
        error,
        helperText,
        id,
        disabled,
        destructive,
        rows = 4,
        ...props
    }, ref) => {
        const textareaId = id || React.useId();

        return (
            <div className="flex flex-col gap-1.5 w-full">
                {label && (
                    <label
                        htmlFor={textareaId}
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        {label}
                    </label>
                )}

                <div className={cn(
                    "relative flex flex-col w-full rounded-lg border bg-white shadow-xs transition-all",

                    // Focus ring on container now, not just textarea
                    "focus-within:ring-2 focus-within:ring-brand-500 focus-within:border-brand-500",

                    // Border colors
                    (error || destructive)
                        ? "border-error-300 focus-within:ring-error-500 focus-within:border-error-500"
                        : "border-gray-300 dark:border-gray-700",

                    "dark:bg-gray-950 dark:border-gray-800",

                    disabled && "bg-gray-50 opacity-50 cursor-not-allowed",

                    className
                )}>
                    {/* Tags Section */}
                    {/* If tags are passed, render them here. We can add a simple prop for this later if needed, 
                        or user can compositionally render them if we expose a slot. 
                        For now, implementing the Visual structure. 
                    */}

                    {props['data-tags'] && (
                        <div className="flex flex-wrap gap-2 p-2 pb-0">
                            {props['data-tags']}
                        </div>
                    )}

                    <textarea
                        id={textareaId}
                        ref={ref}
                        disabled={disabled}
                        rows={rows}
                        className={cn(
                            "flex w-full bg-transparent px-3.5 py-3 text-md text-gray-900 dark:text-gray-50 placeholder:text-gray-500",
                            "focus:outline-none focus:ring-0 border-0 resize-none", // Remove default focus/border so container handles it
                            "disabled:cursor-not-allowed",
                        )}
                        {...props}
                    />

                    {/* Resize handle simulated by standard browser behavior or custom if needed */}
                </div>

                {/* Optional: Add a custom resize handle icon here if strictly needed, 
                        but native resize handle is usually sufficient and more accessible. 
                        The Figma design shows a specific handle, which we can simulate if needed 
                        but standard browser behavior is safer for MVP. 
                    */}
                {/* Helper Text / Error Message */}
                {(error || helperText) && (
                    <p className={cn(
                        "text-sm",
                        error ? "text-error-500" : "text-gray-600 dark:text-gray-400"
                    )}>
                        {error || helperText}
                    </p>
                )}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export { Textarea };
