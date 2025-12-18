import React from 'react';
import { cn } from '../lib/utils';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    color?: string; // Optional overlap with className, typically uses currentColor
}

const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
};

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size = 'md', children, ...props }, ref) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn(sizeMap[size], className)}
                ref={ref}
                {...props}
            >
                {children}
            </svg>
        );
    }
);
Icon.displayName = "Icon";

// Example Usage Components (Simulating extracted assets)
export const ActivityIcon = (props: IconProps) => (
    <Icon {...props}>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </Icon>
);

export const HeartIcon = (props: IconProps) => (
    <Icon {...props}>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </Icon>
);

export const LinkIcon = (props: IconProps) => (
    <Icon {...props}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </Icon>
);
