import React from 'react';
import { Textarea } from '../components/Textarea';
import { Tag } from '../components/Tag';
import { cn } from '../lib/utils';

export const TextareaPlayground = () => {
    const [destructive, setDestructive] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);
    const [showTags, setShowTags] = React.useState(false);
    const [label, setLabel] = React.useState('Interactive Textarea');

    return (
        <div className="p-6 rounded-xl border border-border-secondary bg-bg-secondary/50 space-y-6">
            <h3 className="text-text-lg font-medium text-text-primary">Textarea Playground</h3>
            <div className="flex flex-col xl:flex-row gap-8">
                {/* Controls */}
                <div className="w-full xl:w-1/3 space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-text-secondary block">States</label>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center gap-2 text-sm text-text-primary">
                                <input type="checkbox" checked={destructive} onChange={e => setDestructive(e.target.checked)} />
                                Destructive
                            </label>
                            <label className="flex items-center gap-2 text-sm text-text-primary">
                                <input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} />
                                Disabled
                            </label>
                            <label className="flex items-center gap-2 text-sm text-text-primary">
                                <input type="checkbox" checked={hasError} onChange={e => setHasError(e.target.checked)} />
                                Has Error
                            </label>
                            <label className="flex items-center gap-2 text-sm text-text-primary">
                                <input type="checkbox" checked={showTags} onChange={e => setShowTags(e.target.checked)} />
                                Show Tags (Interests)
                            </label>
                        </div>
                    </div>
                </div>

                {/* Preview */}
                <div className="w-full xl:w-2/3 flex items-center justify-center p-12 bg-bg-primary rounded-xl border border-border-tertiary border-dashed">
                    <div className="w-full max-w-md">
                        <Textarea
                            label={label}
                            destructive={destructive}
                            disabled={disabled}
                            error={hasError ? "This is an error message" : undefined}
                            placeholder="Type something..."
                            data-tags={showTags ? (
                                <>
                                    <Tag label="Design" onRemove={() => { }} />
                                    <Tag label="Engineering" onRemove={() => { }} />
                                </>
                            ) : undefined}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
