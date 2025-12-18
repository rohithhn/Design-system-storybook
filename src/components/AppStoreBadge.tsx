import React from 'react';
import { cn } from '../lib/utils';
import { Icon } from './Icons';

type StoreType = 'app-store' | 'google-play' | 'mac-app-store';
type BadgeStyle = 'black' | 'white' | 'outline';

interface AppStoreBadgeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    store: StoreType;
    badgeStyle?: BadgeStyle;
}

const AppStoreBadge = React.forwardRef<HTMLAnchorElement, AppStoreBadgeProps>(
    ({ className, store, badgeStyle = 'black', ...props }, ref) => {

        // Store configurations
        const storeConfig = {
            'app-store': {
                label: "Download on the",
                name: "App Store",
                icon: (
                    <Icon className="w-6 h-6 mb-1" fill="currentColor">
                        <path d="M13.43 11.235c.08 1.995 1.765 2.66 1.785 2.67-.015.045-.28.95-.915 1.88-.55.805-1.125 1.61-2.025 1.625-.89.015-1.175-.525-2.195-.525-1.025 0-1.345.51-2.2.54-.88.03-1.55-.88-2.115-1.7-.58-.84-1.485-2.395-1.485-3.83 0-2.4 1.555-3.665 3.085-3.695 1.05-.02 1.825.795 2.395.795.57 0 1.64-.985 2.76-.84.475.02 1.815.195 2.67 1.445-.065.04-1.595 0.93-1.6 2.635ZM10.51 3.99c.565-.685 0.945-1.635 0.84-2.585-.815.035-1.805.545-2.39 1.225-.525.605-.98 1.59-.855 2.505.905.07 1.83-.45 2.405-1.145Z" />
                    </Icon>
                )
            },
            'google-play': {
                label: "GET IT ON",
                name: "Google Play",
                icon: (
                    <Icon className="w-5 h-5" fill="currentColor">
                        <path d="M4 2.5v19l15-9.5-15-9.5Z" />
                    </Icon>
                )
            },
            'mac-app-store': {
                label: "Download on the",
                name: "Mac App Store",
                icon: (
                    <Icon className="w-6 h-6 mb-1" fill="currentColor">
                        <path d="M13.43 11.235c.08 1.995 1.765 2.66 1.785 2.67-.015.045-.28.95-.915 1.88-.55.805-1.125 1.61-2.025 1.625-.89.015-1.175-.525-2.195-.525-1.025 0-1.345.51-2.2.54-.88.03-1.55-.88-2.115-1.7-.58-.84-1.485-2.395-1.485-3.83 0-2.4 1.555-3.665 3.085-3.695 1.05-.02 1.825.795 2.395.795.57 0 1.64-.985 2.76-.84.475.02 1.815.195 2.67 1.445-.065.04-1.595 0.93-1.6 2.635ZM10.51 3.99c.565-.685 0.945-1.635 0.84-2.585-.815.035-1.805.545-2.39 1.225-.525.605-.98 1.59-.855 2.505.905.07 1.83-.45 2.405-1.145Z" />
                    </Icon>
                )
            }
        };

        const config = storeConfig[store];

        // Style variants
        const styleClasses = {
            black: "bg-black text-white hover:bg-gray-800 border-transparent",
            white: "bg-white text-black border border-gray-300 hover:bg-gray-50",
            outline: "bg-transparent text-black border border-gray-300 hover:bg-gray-50",
        };

        return (
            <a
                ref={ref}
                href="#"
                className={cn(
                    "inline-flex items-center rounded-lg px-2 py-1 transition-colors border",
                    styleClasses[badgeStyle],
                    className
                )}
                {...props}
            >
                <div className="mr-2 flex items-center justify-center">
                    {config.icon}
                </div>
                <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-medium opacity-80">{config.label}</span>
                    <span className="text-sm font-bold tracking-tight">{config.name}</span>
                </div>
            </a>
        );
    }
);
AppStoreBadge.displayName = "AppStoreBadge";

export { AppStoreBadge };
