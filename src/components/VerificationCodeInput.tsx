import React, { useRef, useState, useEffect } from 'react';
import { cn } from '../lib/utils';
// import { Input } from './Input';


interface VerificationCodeInputProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    onComplete?: (value: string) => void;
    disabled?: boolean;
    error?: boolean;
    type?: 'text' | 'number';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const VerificationCodeInput = ({
    length = 4,
    value = '',
    onChange,
    onComplete,
    disabled = false,
    error = false,
    type = 'text',
    size = 'md',
    className,
}: VerificationCodeInputProps) => {

    const sizeClasses = {
        sm: "w-12 h-12 text-md rounded-lg",
        md: "w-16 h-16 text-display-xs rounded-xl",
        lg: "w-20 h-20 text-display-sm rounded-xl",
    };
    // Internal state if uncontrolled (though typical usage is controlled)
    // We'll trust the parent to manage `value` if provided, otherwise standard internal.
    // For simplicity, let's assume fully controlled or handle internal derivation.

    const [internalValue, setInternalValue] = useState(Array(length).fill(''));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        // Sync internal arrays with external string value
        if (value) {
            const arr = value.split('').slice(0, length);
            while (arr.length < length) arr.push('');
            setInternalValue(arr);
        } else {
            setInternalValue(Array(length).fill(''));
        }
    }, [value, length]);

    const handleInputChange = (index: number, val: string) => {
        if (disabled) return;

        // Handle pasting or single char
        const newArr = [...internalValue];

        // Take only the last char if multiple typed (unless standard paste handling)
        // Ideally we just want one char per slot.
        const char = val.slice(-1);
        newArr[index] = char;

        // Call change
        const newValueString = newArr.join('');
        onChange?.(newValueString);

        // Auto-advance
        if (char && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }

        // Check complete
        if (newValueString.length === length && !newArr.includes('')) {
            onComplete?.(newValueString);
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (disabled) return;

        // Backspace
        if (e.key === 'Backspace') {
            if (!internalValue[index] && index > 0) {
                // If empty, move back and delete prev
                const newArr = [...internalValue];
                newArr[index - 1] = '';
                onChange?.(newArr.join(''));
                inputsRef.current[index - 1]?.focus();
            } else {
                // Just clear current
                const newArr = [...internalValue];
                newArr[index] = '';
                onChange?.(newArr.join(''));
            }
        }

        // Left Arrow
        if (e.key === 'ArrowLeft' && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }

        // Right Arrow
        if (e.key === 'ArrowRight' && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        if (disabled) return;

        const pasteData = e.clipboardData.getData('text').slice(0, length).split('');
        const newArr = [...internalValue];

        pasteData.forEach((char, i) => {
            if (i < length) newArr[i] = char;
        });

        const newValueString = newArr.join('');
        onChange?.(newValueString);

        // Focus last filled or first empty
        const lastIndex = Math.min(pasteData.length, length - 1);
        inputsRef.current[lastIndex]?.focus();

        if (newValueString.length === length && !newArr.includes('')) {
            onComplete?.(newValueString);
        }
    };

    return (
        <div className={cn("flex gap-3", className)}>
            {Array.from({ length }).map((_, i) => (
                <div key={i} className="relative">
                    {/* Using standard input but styled as big box */}
                    <input
                        ref={(el) => { inputsRef.current[i] = el }}
                        type={type === 'number' ? 'tel' : 'text'}
                        inputMode={type === 'number' ? 'numeric' : 'text'}
                        maxLength={1}
                        value={internalValue[i]}
                        disabled={disabled}
                        onChange={(e) => handleInputChange(i, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                        onPaste={handlePaste}
                        className={cn(
                            "text-center font-semibold border bg-white shadow-xs transition-all",
                            sizeClasses[size],

                            "focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:outline-none focus:z-10",
                            "disabled:bg-gray-50 disabled:cursor-not-allowed",
                            "dark:bg-gray-950 dark:border-gray-800 dark:text-white",
                            // Error state
                            error
                                ? "border-error-300 text-error-600 focus:ring-error-500 focus:border-error-500"
                                : "border-gray-300 text-brand-600"
                        )}
                    />
                </div>
            ))}
        </div>
    );
};

export { VerificationCodeInput };
