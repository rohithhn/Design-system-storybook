import React from 'react';
import { cn } from '../lib/utils';

interface SwatchCardProps {
    name: string;
    value: string; // The hex or color value to display text
    colorClass?: string; // Tailwind class for the background color/gradient
    style?: React.CSSProperties; // For raw styles if needed
}

export function SwatchCard({ name, value, colorClass, style }: SwatchCardProps) {
    return (
        <div className="flex flex-col items-start overflow-hidden relative rounded-xl w-full">
            {/* Container matching Figma: bg-primary, border-secondary */}
            <div className="bg-bg-primary border border-b-[2px] border-border-secondary flex flex-col gap-4 p-3 rounded-xl w-full h-full">

                {/* Swatch Area */}
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative border border-black/5">
                    <div className={cn("absolute inset-0", colorClass)} style={style} />
                </div>

                {/* Text details */}
                <div className="flex flex-col items-start w-full">
                    <p className="font-medium text-text-lg text-text-primary w-full truncate">
                        {name}
                    </p>
                    <p className="font-regular text-text-md text-text-tertiary w-full truncate">
                        {value}
                    </p>
                </div>
            </div>
        </div>
    );
}
