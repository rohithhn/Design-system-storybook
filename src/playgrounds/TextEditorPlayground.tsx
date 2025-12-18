import React from 'react';
import { TextEditor } from '../components/TextEditor';
import { ColorSelect } from '../components/ColorSelect';
import { TextHighlight } from '../components/TextHighlight';
import { cn } from '../lib/utils';

export const TextEditorPlayground = () => {
    const [editorType, setEditorType] = React.useState<'default' | 'floating-toolbar'>('default');
    const [editorSize, setEditorSize] = React.useState<'sm' | 'md'>('md');
    const [toolbarType, setToolbarType] = React.useState<'simple' | 'advanced'>('advanced');
    const [showToolbar, setShowToolbar] = React.useState(true);
    const [selectedColor, setSelectedColor] = React.useState('#FFEB3B');

    const colors = ['#FFEB3B', '#FF5722', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800'];

    return (
        <div className="p-6 rounded-xl border border-border-secondary bg-bg-secondary/50 space-y-6">
            <h3 className="text-text-lg font-medium text-text-primary">Text Editor Playground</h3>

            <div className="flex flex-col xl:flex-row gap-8">
                {/* Controls */}
                <div className="w-full xl:w-1/3 space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-text-secondary block">Editor Type</label>
                        <div className="flex gap-2">
                            {(['default', 'floating-toolbar'] as const).map(t => (
                                <button
                                    key={t}
                                    onClick={() => setEditorType(t)}
                                    className={cn(
                                        "px-3 py-1 text-xs rounded-md border transition-colors",
                                        editorType === t
                                            ? "bg-brand-primary text-white border-brand-primary"
                                            : "bg-white text-text-secondary border-border-secondary hover:border-brand-primary"
                                    )}
                                >
                                    {t === 'default' ? 'Default' : 'Floating'}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium text-text-secondary block">Size</label>
                        <div className="flex gap-2">
                            {(['sm', 'md'] as const).map(s => (
                                <button
                                    key={s}
                                    onClick={() => setEditorSize(s)}
                                    className={cn(
                                        "px-3 py-1 text-xs rounded-md border transition-colors",
                                        editorSize === s
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
                        <label className="text-xs font-medium text-text-secondary block">Toolbar Type</label>
                        <div className="flex gap-2">
                            {(['simple', 'advanced'] as const).map(t => (
                                <button
                                    key={t}
                                    onClick={() => setToolbarType(t)}
                                    className={cn(
                                        "px-3 py-1 text-xs rounded-md border transition-colors",
                                        toolbarType === t
                                            ? "bg-brand-primary text-white border-brand-primary"
                                            : "bg-white text-text-secondary border-border-secondary hover:border-brand-primary"
                                    )}
                                >
                                    {t.charAt(0).toUpperCase() + t.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm text-text-primary">
                            <input
                                type="checkbox"
                                checked={showToolbar}
                                onChange={e => setShowToolbar(e.target.checked)}
                            />
                            Show Toolbar
                        </label>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium text-text-secondary block">Highlight Color</label>
                        <div className="flex gap-2 flex-wrap">
                            {colors.map(color => (
                                <ColorSelect
                                    key={color}
                                    color={color}
                                    selected={selectedColor === color}
                                    onSelect={setSelectedColor}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-border-tertiary">
                        <label className="text-xs font-medium text-text-secondary block">Text Highlight Demo</label>
                        <p className="text-sm text-text-primary">
                            This is <TextHighlight color={selectedColor}>highlighted text</TextHighlight> using the selected color.
                        </p>
                    </div>
                </div>

                {/* Preview */}
                <div className="w-full xl:w-2/3 flex items-start justify-center p-8 bg-bg-primary rounded-xl border border-border-tertiary border-dashed">
                    <div className="w-full max-w-2xl">
                        <TextEditor
                            type={editorType}
                            size={editorSize}
                            toolbarType={toolbarType}
                            showToolbar={showToolbar}
                            label="Rich Text Editor"
                            placeholder={editorType === 'floating-toolbar' ? "Select text to see the floating toolbar..." : "Start typing..."}
                            helperText={editorType === 'floating-toolbar' ? "Tip: Select text to show formatting options" : "Use the toolbar above to format your text"}
                            defaultValue="Try selecting this text to see the formatting toolbar appear!"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
