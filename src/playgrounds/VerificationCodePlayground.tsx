import React from 'react';
import { VerificationCodeInput } from '../components/VerificationCodeInput';
import { cn } from '../lib/utils';

export const VerificationCodePlayground = () => {
    const [size, setSize] = React.useState<'sm' | 'md' | 'lg'>('md');
    const [length, setLength] = React.useState(4);
    const [error, setError] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);

    return (
        <div className="p-6 rounded-xl border border-border-secondary bg-bg-secondary/50 space-y-6">
            <h3 className="text-text-lg font-medium text-text-primary">Verification Code (OTP) Playground</h3>
            <div className="flex flex-col xl:flex-row gap-8">
                <div className="w-full xl:w-1/3 space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-text-secondary block">Size</label>
                        <div className="flex gap-2">
                            {(['sm', 'md', 'lg'] as const).map(s => (
                                <button key={s} onClick={() => setSize(s)}
                                    className={cn("px-2 py-1 text-xs rounded-md border", size === s ? "bg-brand-primary text-white" : "bg-white")}>
                                    {s.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-text-secondary block">Length: {length}</label>
                        <input type="range" min="3" max="8" value={length} onChange={e => setLength(Number(e.target.value))} className="w-full" />
                    </div>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" checked={error} onChange={e => setError(e.target.checked)} /> Error
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} /> Disabled
                        </label>
                    </div>
                </div>

                <div className="w-full xl:w-2/3 flex items-center justify-center p-12 bg-bg-primary rounded-xl border border-border-tertiary border-dashed">
                    <VerificationCodeInput
                        key={`${size}-${length}`} // Force remount on structure change
                        size={size}
                        length={length}
                        error={error}
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    );
};
