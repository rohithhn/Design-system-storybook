import type { Meta } from '@storybook/react';

const meta = {
    title: 'Design Tokens/Colors',
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta;

export default meta;

const ColorSwatch = ({ name, lightValue, darkValue, description }: {
    name: string;
    lightValue: string;
    darkValue?: string;
    description?: string
}) => (
    <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
        <div className="flex gap-2">
            <div
                className="w-16 h-16 rounded-lg border border-gray-300 shadow-sm"
                style={{ backgroundColor: lightValue }}
                title={`Light: ${lightValue}`}
            />
            {darkValue && (
                <div
                    className="w-16 h-16 rounded-lg border border-gray-300 shadow-sm"
                    style={{ backgroundColor: darkValue }}
                    title={`Dark: ${darkValue}`}
                />
            )}
        </div>
        <div className="flex-1">
            <div className="font-mono text-sm font-semibold">{name}</div>
            <div className="font-mono text-xs text-gray-600">
                Light: {lightValue}
                {darkValue && <> • Dark: {darkValue}</>}
            </div>
            {description && <div className="text-sm text-gray-500 mt-1">{description}</div>}
        </div>
    </div>
);

export const BrandColors = () => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Brand Colors (Blue Dark)</h2>
        <p className="text-sm text-gray-600 mb-4">Primary brand colors used throughout the design system</p>
        <div className="grid grid-cols-1 gap-4">
            <ColorSwatch name="brand-25" lightValue="#F5F8FF" description="Lightest brand tint" />
            <ColorSwatch name="brand-50" lightValue="#EFF4FF" />
            <ColorSwatch name="brand-100" lightValue="#D1E0FF" />
            <ColorSwatch name="brand-200" lightValue="#B2CCFF" />
            <ColorSwatch name="brand-300" lightValue="#84ADFF" />
            <ColorSwatch name="brand-400" lightValue="#528BFF" />
            <ColorSwatch name="brand-500" lightValue="#2970FF" description="Primary brand color" />
            <ColorSwatch name="brand-600" lightValue="#155EEF" description="Primary hover/active" />
            <ColorSwatch name="brand-700" lightValue="#004EEB" />
            <ColorSwatch name="brand-800" lightValue="#0040C1" />
            <ColorSwatch name="brand-900" lightValue="#00359E" />
            <ColorSwatch name="brand-950" lightValue="#002266" description="Darkest brand shade" />
        </div>
    </div>
);

export const GrayColors = () => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Gray Colors (Light & Dark Mode)</h2>
        <p className="text-sm text-gray-600 mb-4">Neutral colors with light and dark mode variants</p>
        <div className="grid grid-cols-1 gap-4">
            <ColorSwatch name="gray-25" lightValue="#FCFCFD" darkValue="#161616" />
            <ColorSwatch name="gray-50" lightValue="#F9FAFB" darkValue="#1F1F1F" />
            <ColorSwatch name="gray-100" lightValue="#F2F4F7" darkValue="#292929" />
            <ColorSwatch name="gray-200" lightValue="#EAECF0" darkValue="#333333" />
            <ColorSwatch name="gray-300" lightValue="#D0D5DD" darkValue="#474747" />
            <ColorSwatch name="gray-400" lightValue="#98A2B3" darkValue="#666666" />
            <ColorSwatch name="gray-500" lightValue="#667085" darkValue="#858585" />
            <ColorSwatch name="gray-600" lightValue="#475467" darkValue="#A3A3A3" />
            <ColorSwatch name="gray-700" lightValue="#344054" darkValue="#C2C2C2" />
            <ColorSwatch name="gray-800" lightValue="#1D2939" darkValue="#E0E0E0" />
            <ColorSwatch name="gray-900" lightValue="#101828" darkValue="#EBEBEB" />
            <ColorSwatch name="gray-950" lightValue="#0C111D" darkValue="#F5F5F5" />
        </div>
    </div>
);

export const ErrorColors = () => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Error Colors</h2>
        <p className="text-sm text-gray-600 mb-4">Used for error states, destructive actions, and critical alerts</p>
        <div className="grid grid-cols-1 gap-4">
            <ColorSwatch name="error-25" lightValue="#FFFBFA" />
            <ColorSwatch name="error-50" lightValue="#FEF3F2" />
            <ColorSwatch name="error-100" lightValue="#FEE4E2" />
            <ColorSwatch name="error-200" lightValue="#FECDCA" />
            <ColorSwatch name="error-300" lightValue="#FDA29B" />
            <ColorSwatch name="error-400" lightValue="#F97066" />
            <ColorSwatch name="error-500" lightValue="#F04438" description="Primary error color" />
            <ColorSwatch name="error-600" lightValue="#D92D20" description="Error hover/active" />
            <ColorSwatch name="error-700" lightValue="#B42318" />
            <ColorSwatch name="error-800" lightValue="#912018" />
            <ColorSwatch name="error-900" lightValue="#7A271A" />
            <ColorSwatch name="error-950" lightValue="#55160C" />
        </div>
    </div>
);

export const WarningColors = () => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Warning Colors</h2>
        <p className="text-sm text-gray-600 mb-4">Used for warning states and cautionary messages</p>
        <div className="grid grid-cols-1 gap-4">
            <ColorSwatch name="warning-25" lightValue="#FFFCF5" />
            <ColorSwatch name="warning-50" lightValue="#FFFAEB" />
            <ColorSwatch name="warning-100" lightValue="#FEF0C7" />
            <ColorSwatch name="warning-200" lightValue="#FEDF89" />
            <ColorSwatch name="warning-300" lightValue="#FEC84B" />
            <ColorSwatch name="warning-400" lightValue="#FDB022" />
            <ColorSwatch name="warning-500" lightValue="#F79009" description="Primary warning color" />
            <ColorSwatch name="warning-600" lightValue="#DC6803" description="Warning hover/active" />
            <ColorSwatch name="warning-700" lightValue="#B54708" />
            <ColorSwatch name="warning-800" lightValue="#93370D" />
            <ColorSwatch name="warning-900" lightValue="#7A2E0E" />
            <ColorSwatch name="warning-950" lightValue="#4E1D09" />
        </div>
    </div>
);

export const SuccessColors = () => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Success Colors</h2>
        <p className="text-sm text-gray-600 mb-4">Used for success states and positive feedback</p>
        <div className="grid grid-cols-1 gap-4">
            <ColorSwatch name="success-25" lightValue="#F6FEF9" />
            <ColorSwatch name="success-50" lightValue="#ECFDF3" />
            <ColorSwatch name="success-100" lightValue="#D1FADF" />
            <ColorSwatch name="success-200" lightValue="#A6F4C5" />
            <ColorSwatch name="success-300" lightValue="#6CE9A6" />
            <ColorSwatch name="success-400" lightValue="#32D583" />
            <ColorSwatch name="success-500" lightValue="#12B76A" description="Primary success color" />
            <ColorSwatch name="success-600" lightValue="#039855" description="Success hover/active" />
            <ColorSwatch name="success-700" lightValue="#027A48" />
            <ColorSwatch name="success-800" lightValue="#05603A" />
            <ColorSwatch name="success-900" lightValue="#054F31" />
            <ColorSwatch name="success-950" lightValue="#053321" />
        </div>
    </div>
);

export const BlueColors = () => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Blue Colors (Standard)</h2>
        <p className="text-sm text-gray-600 mb-4">Additional blue palette for UI elements</p>
        <div className="grid grid-cols-1 gap-4">
            <ColorSwatch name="blue-25" lightValue="#F5FAFF" />
            <ColorSwatch name="blue-50" lightValue="#EFF8FF" />
            <ColorSwatch name="blue-100" lightValue="#D1E9FF" />
            <ColorSwatch name="blue-200" lightValue="#B2DDFF" />
            <ColorSwatch name="blue-300" lightValue="#84CAFF" />
            <ColorSwatch name="blue-400" lightValue="#53B1FD" />
            <ColorSwatch name="blue-500" lightValue="#2E90FA" />
            <ColorSwatch name="blue-600" lightValue="#1570EF" />
            <ColorSwatch name="blue-700" lightValue="#175CD3" />
            <ColorSwatch name="blue-800" lightValue="#1849A9" />
            <ColorSwatch name="blue-900" lightValue="#194185" />
            <ColorSwatch name="blue-950" lightValue="#102A56" />
        </div>
    </div>
);

export const ExtendedColors = () => (
    <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-bold mb-4">Purple Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorSwatch name="purple-500" lightValue="#9E77ED" />
                <ColorSwatch name="purple-600" lightValue="#7F56D9" />
                <ColorSwatch name="purple-700" lightValue="#6941C6" />
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-4">Pink Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorSwatch name="pink-500" lightValue="#EE46BC" />
                <ColorSwatch name="pink-600" lightValue="#DD2590" />
                <ColorSwatch name="pink-700" lightValue="#C11574" />
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-4">Orange Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorSwatch name="orange-500" lightValue="#EF6820" />
                <ColorSwatch name="orange-600" lightValue="#E04F16" />
                <ColorSwatch name="orange-700" lightValue="#B93815" />
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-4">Indigo Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorSwatch name="indigo-500" lightValue="#6172F3" />
                <ColorSwatch name="indigo-600" lightValue="#444CE7" />
                <ColorSwatch name="indigo-700" lightValue="#3538CD" />
            </div>
        </div>
    </div>
);

export const SemanticTokens = () => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Semantic Tokens</h2>
        <p className="text-sm text-gray-600 mb-4">CSS variables used in components (light/dark mode aware)</p>
        <div className="grid grid-cols-1 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Text Colors</h3>
                <div className="space-y-2 text-sm font-mono">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--text-primary)' }} />
                        <span>--text-primary</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--text-secondary)' }} />
                        <span>--text-secondary</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--text-tertiary)' }} />
                        <span>--text-tertiary</span>
                    </div>
                </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Background Colors</h3>
                <div className="space-y-2 text-sm font-mono">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border" style={{ backgroundColor: 'var(--bg-primary)' }} />
                        <span>--bg-primary</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border" style={{ backgroundColor: 'var(--bg-secondary)' }} />
                        <span>--bg-secondary</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border" style={{ backgroundColor: 'var(--bg-tertiary)' }} />
                        <span>--bg-tertiary</span>
                    </div>
                </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Border Colors</h3>
                <div className="space-y-2 text-sm font-mono">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border-2" style={{ borderColor: 'var(--border-primary)' }} />
                        <span>--border-primary</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border-2" style={{ borderColor: 'var(--border-secondary)' }} />
                        <span>--border-secondary</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
