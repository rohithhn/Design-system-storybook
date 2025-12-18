import React from 'react';
import { cn } from '../lib/utils';
import { TextEditorToolbar } from './TextEditorToolbar';
import { TextEditorTooltip } from './TextEditorTooltip';
import { type TextEditorIconType } from './TextEditorIcon';

export type TextEditorType = 'default' | 'floating-toolbar';
export type TextEditorSize = 'sm' | 'md';

export interface TextEditorProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    type?: TextEditorType;
    size?: TextEditorSize;
    label?: string;
    helperText?: string;
    error?: string;
    showToolbar?: boolean;
    toolbarType?: 'simple' | 'advanced';
}

export const TextEditor = React.forwardRef<HTMLTextAreaElement, TextEditorProps>(
    ({
        type = 'default',
        size = 'md',
        label,
        helperText,
        error,
        showToolbar = true,
        toolbarType = 'advanced',
        className,
        ...props
    }, ref) => {
        const [activeFormats, setActiveFormats] = React.useState<Set<TextEditorIconType>>(new Set());
        const [selectedColor, setSelectedColor] = React.useState<string>('#000000');
        const [showFloatingToolbar, setShowFloatingToolbar] = React.useState(false);
        const [toolbarPosition, setToolbarPosition] = React.useState({ x: 0, y: 0 });
        const textareaRef = React.useRef<HTMLTextAreaElement>(null);

        React.useImperativeHandle(ref, () => textareaRef.current!);

        const handleFormatToggle = (format: TextEditorIconType) => {
            setActiveFormats(prev => {
                const next = new Set(prev);
                if (next.has(format)) {
                    next.delete(format);
                } else {
                    next.add(format);
                }
                return next;
            });
        };

        const handleTextSelect = () => {
            const selection = window.getSelection();
            if (selection && selection.toString().length > 0 && type === 'floating-toolbar') {
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                setToolbarPosition({
                    x: rect.left + rect.width / 2,
                    y: rect.top - 50,
                });
                setShowFloatingToolbar(true);
            } else {
                setShowFloatingToolbar(false);
            }
        };

        const sizeClasses = {
            sm: 'min-h-[200px] text-sm',
            md: 'min-h-[300px] text-base',
        };

        return (
            <div className="w-full space-y-2">
                {label && (
                    <label className="block text-sm font-medium text-text-primary">
                        {label}
                    </label>
                )}

                <div className="relative">
                    {/* Default toolbar (top) */}
                    {type === 'default' && showToolbar && (
                        <div className="mb-2">
                            <TextEditorToolbar
                                type={toolbarType}
                                activeFormats={activeFormats}
                                selectedColor={selectedColor}
                                onFormatToggle={handleFormatToggle}
                                onColorSelect={setSelectedColor}
                            />
                        </div>
                    )}

                    {/* Textarea */}
                    <textarea
                        ref={textareaRef}
                        onMouseUp={handleTextSelect}
                        onKeyUp={handleTextSelect}
                        className={cn(
                            "w-full px-4 py-3 rounded-lg border transition-colors resize-y",
                            "bg-bg-primary text-text-primary placeholder:text-text-tertiary",
                            "focus:outline-none focus:ring-2 focus:ring-brand-500",
                            error
                                ? "border-error-500 focus:border-error-500 focus:ring-error-500"
                                : "border-border-secondary focus:border-brand-500",
                            sizeClasses[size],
                            className
                        )}
                        {...props}
                    />

                    {/* Floating toolbar */}
                    {type === 'floating-toolbar' && showFloatingToolbar && (
                        <TextEditorTooltip
                            type={toolbarType === 'simple' ? 'simple' : 'advanced'}
                            activeFormats={activeFormats}
                            onFormatToggle={handleFormatToggle}
                            position={toolbarPosition}
                        />
                    )}
                </div>

                {/* Helper text or error */}
                {(helperText || error) && (
                    <p className={cn(
                        "text-sm",
                        error ? "text-error-500" : "text-text-tertiary"
                    )}>
                        {error || helperText}
                    </p>
                )}
            </div>
        );
    }
);

TextEditor.displayName = 'TextEditor';
