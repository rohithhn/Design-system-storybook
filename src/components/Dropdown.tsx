import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Icon } from './Icons';

// --- Shared Types ---
export interface DropdownItemProps {
    label: string;
    icon?: React.ReactNode;
    secondaryText?: string;
    disabled?: boolean;
    selected?: boolean;
    onClick?: () => void;
    avatarSrc?: string;
    shortcut?: string; // e.g. "⌘K"
}

// --- Dropdown Item Component ---
const DropdownItem = ({
    label,
    icon,
    secondaryText,
    disabled,
    selected,
    onClick,
    avatarSrc,
    shortcut
}: DropdownItemProps) => {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={cn(
                "w-full flex items-center px-3 py-2 text-sm text-left rounded-md transition-colors",
                disabled ? "opacity-50 cursor-not-allowed text-gray-400" : "hover:bg-gray-50 text-gray-700",
                selected && "bg-gray-50 font-medium text-gray-900"
            )}
        >
            {/* Leading Icon/Avatar */}
            {icon && <span className="mr-2.5 text-gray-500 w-5 h-5 flex items-center justify-center">{icon}</span>}
            {avatarSrc && <img src={avatarSrc} alt="" className="mr-2.5 w-6 h-6 rounded-full object-cover" />}

            <div className="flex-1 flex flex-col">
                <span className="flex items-center justify-between">
                    <span>{label}</span>
                    {selected && <Icon className="w-4 h-4 text-brand-600 ml-2"><path d="M20 6L9 17l-5-5" /></Icon>}
                </span>
                {secondaryText && <span className="text-xs text-gray-500 mt-0.5">{secondaryText}</span>}
            </div>

            {shortcut && <span className="ml-4 text-xs text-gray-400 font-medium">{shortcut}</span>}
        </button>
    );
};

// --- Dropdown Header Component ---
const DropdownHeader = ({ children }: { children: React.ReactNode }) => (
    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        {children}
    </div>
);


// --- Divider Component ---
const DropdownDivider = () => <div className="h-px bg-gray-200 my-1 mx-3" />;


// --- Main Dropdown/Select Component ---
interface DropdownProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    align?: 'left' | 'right';
    className?: string;
}

const Dropdown = ({ trigger, children, align = 'left', className }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div onClick={() => setIsOpen(!isOpen)}>
                {trigger}
            </div>

            {isOpen && (
                <div
                    className={cn(
                        "absolute z-50 mt-2 w-64 rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none p-1.5 animate-in fade-in zoom-in-95 duration-100",
                        align === 'right' ? 'right-0' : 'left-0',
                        className
                    )}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

export { Dropdown, DropdownItem, DropdownHeader, DropdownDivider };
