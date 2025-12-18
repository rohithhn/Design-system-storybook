import React from 'react';
import { cn } from '../lib/utils';
import { Icon } from './Icons';

type CloseButtonSize = 'sm' | 'md' | 'lg';

interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: CloseButtonSize;
    darkMode?: boolean;
}

const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(
    ({ className, size = 'md', darkMode = false, ...props }, ref) => {

        const sizeMap = {
            sm: 'p-2', // 36px
            md: 'p-2.5', // 40px
            lg: 'p-3', // 44px
        };

        const iconSizeMap = {
            sm: 'w-5 h-5',
            md: 'w-5 h-5',
            lg: 'w-5 h-5',
        };

        const themeStyles = darkMode
            ? "text-white/60 hover:text-white/80 hover:bg-white/10 focus:ring-white/20"
            : "text-text-tertiary-600 hover:text-text-secondary-700 hover:bg-bg-secondary-hover focus:ring-gray-light-mode-100";

        return (
            <button
                ref={ref}
                type="button"
                className={cn(
                    "inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none focus:ring-4",
                    sizeMap[size],
                    themeStyles,
                    className
                )}
                {...props}
            >
                <span className="sr-only">Close</span>
                <Icon className={iconSizeMap[size]}>
                    <path d="M18 6L6 18M6 6l12 12" />
                </Icon>
            </button>
        );
    }
);
CloseButton.displayName = "CloseButton";

export { CloseButton };
