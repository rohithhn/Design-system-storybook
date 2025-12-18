import React from 'react';
import { cn } from '../lib/utils';
// import { IconProps } from './Icons'; // Removing unused import


type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'secondary-brand'
    | 'tertiary'
    | 'link-color'
    | 'link-gray'
    | 'destructive-primary'
    | 'destructive-secondary'
    | 'destructive-tertiary'
    | 'destructive-link';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    iconOnly?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant = 'primary',
        size = 'md',
        isLoading = false,
        startIcon,
        endIcon,
        iconOnly = false,
        children,
        disabled,
        ...props
    }, ref) => {

        // Base styles
        const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50";

        // Size styles
        const sizeStyles = {
            xs: iconOnly ? "p-1.5 rounded-md" : "px-2 py-1.5 text-text-xs rounded-md",
            sm: iconOnly ? "p-2" : "px-3 py-2 text-text-sm",
            md: iconOnly ? "p-2.5" : "px-4 py-2.5 text-text-sm",
            lg: iconOnly ? "p-3" : "px-4.5 py-2.5 text-text-md",
            xl: iconOnly ? "p-3.5" : "px-5 py-3 text-text-md",
            '2xl': iconOnly ? "p-4" : "px-6 py-3.5 text-text-lg",
        };

        // Variant styles (using design system CSS variables)
        const variantStyles = {
            primary: `
        bg-bg-brand-solid text-white
        hover:bg-bg-brand-solid-hover
        focus:ring-brand-primary/25
        border border-transparent
        shadow-sm
      `,
            secondary: `
        bg-bg-primary text-text-secondary-700
        hover:bg-bg-secondary-hover
        text-text-primary-900
        border border-border-secondary
        focus:ring-gray-light-mode-100
        shadow-sm
      `,
            'secondary-brand': `
        bg-bg-brand-primary-alt text-text-brand-binary-700
        hover:bg-bg-brand-primary-alt
        border border-transparent
        text-text-brand-secondary-700
        focus:ring-brand-primary/25
      `,
            tertiary: `
        bg-transparent text-text-tertiary-600
        hover:bg-bg-secondary-hover hover:text-text-secondary-700
        focus:ring-gray-light-mode-100
      `,
            'link-color': `
        bg-transparent text-text-brand-secondary-700
        hover:text-text-brand-primary-900
        p-0 h-auto
        focus:ring-0
      `,
            'link-gray': `
        bg-transparent text-text-tertiary-600
        hover:text-text-primary-900
        p-0 h-auto
        focus:ring-0
      `,
            // Destructive Variants
            'destructive-primary': `
          bg-bg-error-solid text-white
          hover:bg-bg-error-solid-hover
          focus:ring-error-primary/25
          border border-transparent
          shadow-sm
      `,
            'destructive-secondary': `
          bg-bg-primary text-text-error-primary-900
          hover:bg-bg-error-primary-alt
          border border-border-error
          focus:ring-error-primary/25
          shadow-sm
      `,
            'destructive-tertiary': `
          bg-transparent text-text-error-primary-600
          hover:bg-bg-error-primary-alt hover:text-text-error-primary-900
          focus:ring-error-primary/25
      `,
            'destructive-link': `
          bg-transparent text-text-error-primary-600
          hover:text-text-error-primary-900
          p-0 h-auto
          focus:ring-0
      `
        };

        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                className={cn(
                    baseStyles,
                    sizeStyles[size],
                    variantStyles[variant],
                    className
                )}
                {...props}
            >
                {isLoading && (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                )}
                {!isLoading && startIcon && <span className={cn("mr-2", iconOnly && "mr-0")}>{startIcon}</span>}
                {!iconOnly && children}
                {!isLoading && endIcon && <span className="ml-2">{endIcon}</span>}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
