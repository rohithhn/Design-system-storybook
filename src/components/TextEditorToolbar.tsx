import React from 'react';
import { cn } from '../lib/utils';
import { TextEditorIcon, type TextEditorIconType } from './TextEditorIcon';
import { ColorSelect } from './ColorSelect';

export type TextEditorToolbarType = 'simple' | 'advanced';

export interface TextEditorToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: TextEditorToolbarType;
    activeFormats?: Set<TextEditorIconType>;
    selectedColor?: string;
    onFormatToggle?: (format: TextEditorIconType) => void;
    onColorSelect?: (color: string) => void;
}

const simpleIcons: TextEditorIconType[] = [
    'bold',
    'italic',
    'underline',
    'link',
];

const advancedIcons: TextEditorIconType[] = [
    'bold',
    'italic',
    'underline',
    'dot-points',
    'left-align',
    'center-align',
    'right-align',
    'link',
    'insert-image',
    'insert-video',
    'attach-file',
    'insert-code',
    'color-picker',
    'generate',
    'more-options',
];

const defaultColors = [
    '#000000',
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#FF00FF',
    '#00FFFF',
    '#FFFFFF',
];

export const TextEditorToolbar = React.forwardRef<HTMLDivElement, TextEditorToolbarProps>(
    ({
        type = 'simple',
        activeFormats = new Set(),
        selectedColor,
        onFormatToggle,
        onColorSelect,
        className,
        ...props
    }, ref) => {
        const [showColorPicker, setShowColorPicker] = React.useState(false);
        const icons = type === 'simple' ? simpleIcons : advancedIcons;

        const handleIconClick = (iconType: TextEditorIconType) => {
            if (iconType === 'color-picker') {
                setShowColorPicker(!showColorPicker);
            } else {
                onFormatToggle?.(iconType);
            }
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "flex items-center gap-1 p-1 bg-bg-primary border border-border-secondary rounded-lg",
                    type === 'advanced' && "flex-wrap",
                    className
                )}
                {...props}
            >
                {icons.map((iconType, idx) => (
                    <React.Fragment key={iconType}>
                        {/* Add divider before certain icons */}
                        {(iconType === 'dot-points' || iconType === 'link' || iconType === 'insert-image' || iconType === 'color-picker') && (
                            <div className="w-px h-6 bg-border-secondary mx-1" />
                        )}

                        <div className="relative">
                            <TextEditorIcon
                                type={iconType}
                                active={activeFormats.has(iconType)}
                                onClick={() => handleIconClick(iconType)}
                            />

                            {/* Color picker dropdown */}
                            {iconType === 'color-picker' && showColorPicker && (
                                <div className="absolute top-full mt-2 left-0 p-2 bg-bg-primary border border-border-secondary rounded-lg shadow-lg z-10">
                                    <div className="grid grid-cols-4 gap-2">
                                        {defaultColors.map((color) => (
                                            <ColorSelect
                                                key={color}
                                                color={color}
                                                selected={selectedColor === color}
                                                onSelect={(c) => {
                                                    onColorSelect?.(c);
                                                    setShowColorPicker(false);
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        );
    }
);

TextEditorToolbar.displayName = 'TextEditorToolbar';
