import React from 'react';
import { cn } from '../lib/utils';

// Import Figma SVG icons as URLs
import boldIcon from '../assets/icons/bold.svg';
import italicIcon from '../assets/icons/italic.svg';
import underlineIcon from '../assets/icons/underline.svg';
import listIcon from '../assets/icons/list.svg';
import alignLeftIcon from '../assets/icons/align-left.svg';
import alignCenterIcon from '../assets/icons/align-center.svg';
import alignRightIcon from '../assets/icons/align-right.svg';
import linkIcon from '../assets/icons/link.svg';
import imageIcon from '../assets/icons/image.svg';
import videoIcon from '../assets/icons/video.svg';
import attachIcon from '../assets/icons/attach.svg';
import codeIcon from '../assets/icons/code.svg';
import paletteIcon from '../assets/icons/palette.svg';
import generateIcon from '../assets/icons/generate.svg';
import moreIcon from '../assets/icons/more.svg';

export type TextEditorIconType =
    | 'bold'
    | 'italic'
    | 'underline'
    | 'dot-points'
    | 'left-align'
    | 'center-align'
    | 'right-align'
    | 'link'
    | 'insert-image'
    | 'insert-video'
    | 'attach-file'
    | 'insert-code'
    | 'color-picker'
    | 'generate'
    | 'more-options';

export type TextEditorIconState = 'default' | 'hover' | 'current';

export interface TextEditorIconProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    type: TextEditorIconType;
    state?: TextEditorIconState;
    active?: boolean;
}

const iconUrls: Record<TextEditorIconType, string> = {
    'bold': boldIcon,
    'italic': italicIcon,
    'underline': underlineIcon,
    'dot-points': listIcon,
    'left-align': alignLeftIcon,
    'center-align': alignCenterIcon,
    'right-align': alignRightIcon,
    'link': linkIcon,
    'insert-image': imageIcon,
    'insert-video': videoIcon,
    'attach-file': attachIcon,
    'insert-code': codeIcon,
    'color-picker': paletteIcon,
    'generate': generateIcon,
    'more-options': moreIcon,
};

export const TextEditorIcon = React.forwardRef<HTMLButtonElement, TextEditorIconProps>(
    ({ type, state = 'default', active = false, className, ...props }, ref) => {
        const isActive = active || state === 'current';
        const iconUrl = iconUrls[type];

        return (
            <button
                ref={ref}
                type="button"
                className={cn(
                    "w-8 h-8 flex items-center justify-center rounded-md transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-brand-500",
                    state === 'default' && !isActive && "text-text-secondary hover:text-text-primary hover:bg-bg-secondary",
                    state === 'hover' && "text-text-primary bg-bg-secondary",
                    isActive && "text-brand-600 bg-brand-50 dark:bg-brand-900/20",
                    className
                )}
                aria-label={type.replace('-', ' ')}
                aria-pressed={isActive}
                {...props}
            >
                <img src={iconUrl} alt={type} className="w-5 h-5" />
            </button>
        );
    }
);

TextEditorIcon.displayName = 'TextEditorIcon';
