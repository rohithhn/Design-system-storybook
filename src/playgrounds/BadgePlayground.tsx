import React from 'react';
import { Badge } from '../components/Badge';
import { cn } from '../lib/utils';

export const BadgePlayground = () => {
    const [size, setSize] = React.useState<'sm' | 'md' | 'lg'>('md');
    const [type, setType] = React.useState<'modern' | 'pill'>('modern');
    const [color, setColor] = React.useState<any>('brand');
    const [label, setLabel] = React.useState('Badge');

    // Simple color picker choices
    const colors = ['brand', 'gray', 'error', 'warning', 'success', 'fuchsia', 'pink', 'orange', 'purple', 'blue-light'];

    return (
        <div className="p-6 rounded-xl border border-border-secondary bg-bg-secondary/50 space-y-6">
            <h3 className="text-text-lg font-medium text-text-primary">Badge Playground</h3>
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
                        <label className="text-xs font-medium text-text-secondary block">Type</label>
                        <div className="flex gap-2">
                            {(['modern', 'pill'] as const).map(t => (
                                <button key={t} onClick={() => setType(t)}
                                    className={cn("px-2 py-1 text-xs rounded-md border", type === t ? "bg-brand-primary text-white" : "bg-white")}>
                                    {t.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-text-secondary block">Color</label>
                        <select value={color} onChange={e => setColor(e.target.value)} className="w-full p-2 text-sm border rounded">
                            {colors.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-text-secondary block">Label</label>
                        <input type="text" value={label} onChange={e => setLabel(e.target.value)} className="w-full rounded text-sm border p-2" />
                    </div>
                </div>

                <div className="w-full xl:w-2/3 flex items-center justify-center p-12 bg-bg-primary rounded-xl border border-border-tertiary border-dashed">
                    <Badge size={size} type={type} color={color}>{label}</Badge>
                </div>
            </div>
        </div>
    );
};
