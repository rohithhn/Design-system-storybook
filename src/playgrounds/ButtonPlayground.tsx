import React from 'react';
import { Button } from '../components/Button';
import { Icon } from '../components/Icons';
import { cn } from '../lib/utils';

export const ButtonPlayground = () => {
    const [variant, setVariant] = React.useState<any>('primary');
    const [size, setSize] = React.useState<any>('md');
    const [disabled, setDisabled] = React.useState(false);
    const [showStartIcon, setShowStartIcon] = React.useState(false);
    const [showEndIcon, setShowEndIcon] = React.useState(false);
    const [label, setLabel] = React.useState('Button');

    const variants = [
        'primary', 'secondary', 'tertiary', 'link',
        'destructive-primary', 'destructive-secondary', 'destructive-tertiary', 'destructive-link'
    ];
    const sizes = ['sm', 'md', 'lg', 'xl', '2xl'];

    return (
        <div className="p-6 rounded-xl border border-border-secondary bg-bg-secondary/50 space-y-6">
            <h3 className="text-text-lg font-medium text-text-primary">Button Playground</h3>
            <div className="flex flex-col xl:flex-row gap-8">
                {/* Controls */}
                <div className="w-full xl:w-1/3 space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-text-secondary block">Variant</label>
                        <select
                            value={variant}
                            onChange={(e) => setVariant(e.target.value)}
                            className="w-full rounded-md border border-border-secondary text-sm p-2"
                        >
                            {variants.map(v => <option key={v} value={v}>{v}</option>)}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium text-text-secondary block">Size</label>
                        <div className="flex flex-wrap gap-2">
                            {sizes.map(s => (
                                <button
                                    key={s}
                                    onClick={() => setSize(s)}
                                    className={cn(
                                        "px-2 py-1 text-xs rounded-md border transition-colors",
                                        size === s
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
                        <label className="text-xs font-medium text-text-secondary block">Options</label>
                        <div className="flex flex-wrap gap-2">
                            <label className="flex items-center gap-2 text-sm text-text-primary">
                                <input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} />
                                Disabled
                            </label>
                            <label className="flex items-center gap-2 text-sm text-text-primary">
                                <input type="checkbox" checked={showStartIcon} onChange={e => setShowStartIcon(e.target.checked)} />
                                Start Icon
                            </label>
                            <label className="flex items-center gap-2 text-sm text-text-primary">
                                <input type="checkbox" checked={showEndIcon} onChange={e => setShowEndIcon(e.target.checked)} />
                                End Icon
                            </label>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium text-text-secondary block">Label</label>
                        <input
                            type="text"
                            value={label}
                            onChange={e => setLabel(e.target.value)}
                            className="w-full rounded text-sm border border-border-secondary p-2"
                        />
                    </div>
                </div>

                {/* Preview */}
                <div className="w-full xl:w-2/3 flex items-center justify-center p-12 bg-bg-primary rounded-xl border border-border-tertiary border-dashed">
                    <Button
                        variant={variant}
                        size={size}
                        disabled={disabled}
                        startIcon={showStartIcon ? <Icon><path d="M12 4v16m8-8H4" /></Icon> : undefined}
                        endIcon={showEndIcon ? <Icon><path d="M5 12h14m-7-7l7 7-7 7" /></Icon> : undefined}
                    >
                        {label}
                    </Button>
                </div>
            </div>
        </div>
    );
};
