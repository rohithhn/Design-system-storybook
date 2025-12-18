import React from 'react';
import { Input } from '../components/Input';
import { cn } from '../lib/utils';

export const InputPlayground = () => {
    const [inputSize, setInputSize] = React.useState<'sm' | 'md'>('md');
    const [inputVariant, setInputVariant] = React.useState<'default' | 'payment' | 'trailing-dropdown'>('default');
    const [inputDestructive, setInputDestructive] = React.useState(false);
    const [inputDisabled, setInputDisabled] = React.useState(false);
    const [inputError, setInputError] = React.useState('');
    const [inputLabel, setInputLabel] = React.useState('Interactive Input');
    const [inputHelper, setInputHelper] = React.useState('Helper text goes here');

    return (
        <div className="p-6 rounded-xl border border-border-secondary bg-bg-secondary/50 space-y-6">
            <h3 className="text-text-lg font-medium text-text-primary">Input Playground</h3>
            <div className="flex flex-col xl:flex-row gap-8">
                {/* Controls */}
                <div className="w-full xl:w-1/3 space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-text-secondary block">Size</label>
                        <div className="flex gap-2">
                            {(['sm', 'md'] as const).map(s => (
                                <button
                                    key={s}
                                    onClick={() => setInputSize(s)}
                                    className={cn(
                                        "px-2 py-1 text-xs rounded-md border transition-colors",
                                        inputSize === s
                                            ? "bg-brand-primary text-white border-brand-primary"
                                            : "bg-white text-text-secondary border-border-secondary hover:border-brand-primary"
                                    )}
                                >
                                    {s.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium text-text-secondary block">Variant</label>
                        <select
                            value={inputVariant}
                            onChange={(e) => setInputVariant(e.target.value as any)}
                            className="w-full rounded-md border border-border-secondary text-sm p-2"
                        >
                            <option value="default">Default</option>
                            <option value="payment">Payment</option>
                            <option value="trailing-dropdown">Trailing Dropdown</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium text-text-secondary block">States</label>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center gap-2 text-sm text-text-primary">
                                <input type="checkbox" checked={inputDestructive} onChange={e => setInputDestructive(e.target.checked)} />
                                Destructive
                            </label>
                            <label className="flex items-center gap-2 text-sm text-text-primary">
                                <input type="checkbox" checked={inputDisabled} onChange={e => setInputDisabled(e.target.checked)} />
                                Disabled
                            </label>
                            <label className="flex items-center gap-2 text-sm text-text-primary">
                                <input type="checkbox" checked={!!inputError} onChange={e => setInputError(e.target.checked ? 'Error message' : '')} />
                                Has Error
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-text-secondary">Label</label>
                            <input
                                type="text"
                                value={inputLabel}
                                onChange={(e) => setInputLabel(e.target.value)}
                                className="w-full rounded text-xs border border-border-secondary px-2 py-1"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-medium text-text-secondary">Helper Text</label>
                            <input
                                type="text"
                                value={inputHelper}
                                onChange={(e) => setInputHelper(e.target.value)}
                                className="w-full rounded text-xs border border-border-secondary px-2 py-1"
                            />
                        </div>
                    </div>
                </div>

                {/* Preview */}
                <div className="w-full xl:w-2/3 flex items-center justify-center p-8 bg-bg-primary rounded-xl border border-border-tertiary border-dashed">
                    <div className="w-full max-w-sm">
                        <Input
                            label={inputLabel}
                            size={inputSize}
                            variant={inputVariant as any}
                            destructive={inputDestructive}
                            disabled={inputDisabled}
                            error={inputError}
                            helperText={inputHelper}
                            placeholder="Type something..."
                            trailingAddon={inputVariant === 'trailing-dropdown' ? (
                                <div className="h-full">
                                    <select className="h-full rounded-r-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm">
                                        <option>USD</option>
                                        <option>EUR</option>
                                    </select>
                                </div>
                            ) : undefined}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
