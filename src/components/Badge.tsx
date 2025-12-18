import React from 'react';
import { cn } from '../lib/utils';
import { Icon } from './Icons';

type BadgeSize = 'sm' | 'md' | 'lg';
type BadgeType = 'pill' | 'modern';
type BadgeColor =
    | 'gray' | 'brand' | 'error' | 'warning' | 'success'
    | 'gray-blue' | 'blue-light' | 'blue' | 'indigo' | 'purple' | 'pink' | 'orange';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: BadgeSize;
    type?: BadgeType;
    color?: BadgeColor;
    iconLeading?: React.ReactNode;
    iconTrailing?: React.ReactNode;
    avatarSrc?: string;
    onClose?: () => void;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({
        className,
        size = 'md',
        type = 'pill',
        color = 'gray',
        children,
        iconLeading,
        iconTrailing,
        avatarSrc,
        onClose,
        ...props
    }, ref) => {

        // Size styles
        const sizeStyles = {
            sm: "px-1.5 py-0.5 text-text-xs", // 22px height
            md: "px-2 py-0.5 text-text-sm",    // 24px height
            lg: "px-2.5 py-1 text-text-sm",     // 28px height
        };

        // Base styles
        const baseClasses = "inline-flex items-center font-medium rounded-full border bg-opacity-50";

        // Modern badge has different border radius
        const radiusClasses = type === 'modern' ? "rounded-md" : "rounded-full";

        // Color maps (Bg, Text, Border)
        // Simplified mapping based on design system patterns
        const colorClasses: Record<BadgeColor, string> = {
            gray: "bg-gray-100 text-gray-700 border-gray-200",
            brand: "bg-brand-50 text-brand-700 border-brand-200",
            error: "bg-error-50 text-error-700 border-error-200",
            warning: "bg-warning-50 text-warning-700 border-warning-200",
            success: "bg-success-50 text-success-700 border-success-200",
            'gray-blue': "bg-gray-blue-50 text-gray-blue-700 border-gray-blue-200",
            'blue-light': "bg-blue-light-50 text-blue-light-700 border-blue-light-200",
            blue: "bg-blue-50 text-blue-700 border-blue-200",
            indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
            purple: "bg-purple-50 text-purple-700 border-purple-200",
            pink: "bg-pink-50 text-pink-700 border-pink-200",
            orange: "bg-orange-50 text-orange-700 border-orange-200",
        };

        return (
            <span
                ref={ref}
                className={cn(
                    baseClasses,
                    radiusClasses,
                    sizeStyles[size],
                    colorClasses[color],
                    className
                )}
                {...props}
            >
                {avatarSrc && (
                    <img src={avatarSrc} alt="" className="w-4 h-4 rounded-full mr-1.5 -ml-0.5 object-cover" />
                )}
                {iconLeading && <span className="mr-1.5 -ml-0.5">{iconLeading}</span>}
                {children}
                {iconTrailing && <span className="ml-1.5 -mr-0.5">{iconTrailing}</span>}
                {onClose && (
                    <button
                        type="button"
                        onClick={onClose}
                        className="ml-1.5 -mr-0.5 hover:bg-black/5 rounded-full p-0.5 focus:outline-none"
                    >
                        <Icon className="w-3 h-3">
                            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </Icon>
                    </button>
                )}
            </span>
        );
    }
);
Badge.displayName = "Badge";

export { Badge };
