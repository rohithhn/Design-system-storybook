import React from 'react';
import { cn } from '../lib/utils';
import { TextEditorIcon, type TextEditorIconType } from './TextEditorIcon';

export type TextEditorTooltipType = 'simple' | 'advanced';

export interface TextEditorTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: TextEditorTooltipType;
    activeFormats?: Set<TextEditorIconType>;
    onFormatToggle?: (format: TextEditorIconType) => void;
    position?: { x: number; y: number };
}

const simpleTooltipIcons: TextEditorIconType[] = [
    'bold',
    'italic',
    'underline',
    'link',
];

const advancedTooltipIcons: TextEditorIconType[] = [
    'bold',
    'italic',
    'underline',
    'link',
    'insert-code',
    'color-picker',
];

export const TextEditorTooltip = React.forwardRef<HTMLDivElement, TextEditorTooltipProps>(
    ({
        type = 'simple',
        activeFormats = new Set(),
        onFormatToggle,
        position,
        className,
        ...props
    }, ref) => {
        const icons = type === 'simple' ? simpleTooltipIcons : advancedTooltipIcons;

        return (
            <div
                ref={ref}
                className={cn(
                    "flex items-center gap-0.5 p-1 bg-gray-900 dark:bg-gray-800 border border-gray-700 rounded-lg shadow-xl",
                    "animate-in fade-in zoom-in-95 duration-200",
                    className
                )}
                style={position ? { position: 'absolute', left: position.x, top: position.y } : undefined}
                {...props}
            >
                {icons.map((iconType, idx) => (
                    <React.Fragment key={iconType}>
                        {iconType === 'link' && idx > 0 && (
                            <div className="w-px h-6 bg-gray-700 mx-1" />
                        )}
                        <TextEditorIcon
                            type={iconType}
                            active={activeFormats.has(iconType)}
                            onClick={() => onFormatToggle?.(iconType)}
                            className="text-white hover:bg-gray-700"
                        />
                    </React.Fragment>
                ))}
            </div>
        );
    }
);

TextEditorTooltip.displayName = 'TextEditorTooltip';
