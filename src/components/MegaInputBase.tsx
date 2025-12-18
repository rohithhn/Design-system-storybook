import React from 'react';
import { cn } from '../lib/utils';
import { Icon } from './Icons';

interface MegaInputBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'md' | 'lg';
    active?: boolean;
    label?: string; // Optional label inside?
    icon?: React.ReactNode;
}

const MegaInputBase = React.forwardRef<HTMLButtonElement, MegaInputBaseProps>(
    ({ className, size = 'md', active, label, icon, disabled, ...props }, ref) => {

        const sizeClasses = {
            sm: "w-16 h-16 rounded-xl text-display-md", // Assuming ~36px font
            md: "w-20 h-20 rounded-2xl text-display-lg", // 48px font from Figma
            lg: "w-24 h-24 rounded-2xl text-display-xl", // 60px font from Figma
        };

        return (
            <button
                ref={ref}
                disabled={disabled}
                className={cn(
                    "flex flex-col items-center justify-center border transition-all duration-200 outline-none",
                    sizeClasses[size],

                    // Default State
                    "bg-white border-gray-200 text-gray-500 shadow-sm hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600",

                    // Active/Selected State
                    active && "border-brand-600 bg-brand-50 text-brand-600 ring-1 ring-brand-600",

                    // Disabled State
                    disabled && "opacity-50 cursor-not-allowed bg-gray-50 border-gray-200 hover:bg-gray-50 hover:border-gray-200 hover:text-gray-500",

                    // Focus
                    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500",

                    // Dark mode
                    "dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800",
                    active && "dark:bg-emerald-950/30 dark:border-brand-500 dark:text-brand-400",

                    className
                )}
                {...props}
            >
                {icon && <span className={cn("mb-1", active ? "text-brand-600" : "text-current")}>{icon}</span>}
                {label && <span className="text-xs font-medium">{label}</span>}
            </button>
        );
    }
);

MegaInputBase.displayName = "MegaInputBase";

export { MegaInputBase };
