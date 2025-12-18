import React from 'react';
import { cn } from '../lib/utils';
import { Icon } from './Icons';
// import { Badge } from './Badge'; // Unused


interface TagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'> {
    size?: 'sm' | 'md' | 'lg';
    checked?: boolean; // For checkbox mode
    onRemove?: () => void;
    count?: number;
    label: string;
    avatarSrc?: string;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
    ({
        className,
        size = 'md',
        checked,
        onRemove,
        count,
        label,
        avatarSrc,
        onChange,
        disabled = false,
        ...props
    }, ref) => {

        // Tag styles
        const baseClasses = "inline-flex items-center rounded-lg border font-medium transition-colors cursor-pointer select-none";

        const sizeStyles = {
            sm: "px-2 py-0.5 text-xs h-[24px]",
            md: "px-2.5 py-1 text-sm h-[28px]",
            lg: "px-3 py-1.5 text-sm h-[32px]",
        };

        // State styles
        const defaultStyles = "bg-white text-gray-700 border-gray-300 hover:bg-gray-50";
        const checkedStyles = "bg-brand-50 text-brand-700 border-brand-200 hover:bg-brand-100";
        const disabledStyles = "opacity-50 cursor-not-allowed bg-gray-50 hover:bg-gray-50";

        const computedStyles = disabled
            ? disabledStyles
            : (checked ? checkedStyles : defaultStyles);

        const handleClick = () => {
            if (!disabled && onChange) {
                onChange(!checked);
            }
        };

        return (
            <span
                ref={ref}
                className={cn(baseClasses, sizeStyles[size], computedStyles, className)}
                onClick={handleClick}
                {...props}
            >
                {/* Checkbox Input (Hidden visual, handled via styles) */}
                {onChange && (
                    <span className={cn(
                        "mr-2 flex items-center justify-center border rounded w-3.5 h-3.5",
                        checked ? "bg-brand-600 border-brand-600" : "bg-white border-gray-300"
                    )}>
                        {checked && <Icon className="w-2.5 h-2.5 text-white"><path d="M10 3L4.5 9 2 6.5" /></Icon>}
                    </span>
                )}

                {avatarSrc && <img src={avatarSrc} alt="" className="w-4 h-4 rounded-full mr-1.5 object-cover" />}

                <span>{label}</span>

                {count !== undefined && (
                    <span className={cn(
                        "ml-1.5 px-1.5 py-0.5 rounded-full text-xs font-semibold",
                        "bg-white/10 text-current" // Subtle contrasting bg
                    )}>
                        {count}
                    </span>
                )}

                {onRemove && (
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove();
                        }}
                        disabled={disabled}
                        className="ml-1.5 hover:bg-black/5 rounded-full p-0.5 focus:outline-none"
                    >
                        <Icon className="w-3 h-3">
                            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" />
                        </Icon>
                    </button>
                )}
            </span>
        );
    }
);
Tag.displayName = "Tag";

export { Tag };
