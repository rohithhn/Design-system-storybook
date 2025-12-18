import type { Meta } from '@storybook/react';

const meta = {
    title: 'Design Tokens/Colors',
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta;

export default meta;

const ColorSwatch = ({ name, value, description }: { name: string; value: string; description?: string }) => (
    <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
        <div
            className="w-16 h-16 rounded-lg border border-gray-300 shadow-sm"
            style={{ backgroundColor: value }}
        />
        <div className="flex-1">
            <div className="font-mono text-sm font-semibold">{name}</div>
            <div className="font-mono text-xs text-gray-600">{value}</div>
            {description && <div className="text-sm text-gray-500 mt-1">{description}</div>}
        </div>
    </div>
);

export const BrandColors = () => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Brand Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ColorSwatch name="brand-25" value="#F5F8FF" description="Lightest brand tint" />
            <ColorSwatch name="brand-50" value="#EFF4FF" />
            <ColorSwatch name="brand-100" value="#D1E0FF" />
            <ColorSwatch name="brand-200" value="#B2CCFF" />
            <ColorSwatch name="brand-300" value="#84ADFF" />
            <ColorSwatch name="brand-400" value="#528BFF" />
            <ColorSwatch name="brand-500" value="#2970FF" description="Primary brand color" />
            <ColorSwatch name="brand-600" value="#155EEF" />
            <ColorSwatch name="brand-700" value="#004EEB" />
            <ColorSwatch name="brand-800" value="#0040C1" />
            <ColorSwatch name="brand-900" value="#00359E" />
            <ColorSwatch name="brand-950" value="#002266" description="Darkest brand shade" />
        </div>
    </div>
);

export const GrayColors = () => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Gray Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ColorSwatch name="gray-25" value="#FCFCFD" />
            <ColorSwatch name="gray-50" value="#F9FAFB" />
            <ColorSwatch name="gray-100" value="#F2F4F7" />
            <ColorSwatch name="gray-200" value="#EAECF0" />
            <ColorSwatch name="gray-300" value="#D0D5DD" />
            <ColorSwatch name="gray-400" value="#98A2B3" />
            <ColorSwatch name="gray-500" value="#667085" />
            <ColorSwatch name="gray-600" value="#475467" />
            <ColorSwatch name="gray-700" value="#344054" />
            <ColorSwatch name="gray-800" value="#1D2939" />
            <ColorSwatch name="gray-900" value="#101828" />
            <ColorSwatch name="gray-950" value="#0C111D" />
        </div>
    </div>
);

export const SemanticColors = () => (
    <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-bold mb-4">Error Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorSwatch name="error-500" value="#F04438" description="Primary error color" />
                <ColorSwatch name="error-600" value="#D92D20" />
                <ColorSwatch name="error-700" value="#B42318" />
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-4">Warning Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorSwatch name="warning-500" value="#F79009" description="Primary warning color" />
                <ColorSwatch name="warning-600" value="#DC6803" />
                <ColorSwatch name="warning-700" value="#B54708" />
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-4">Success Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorSwatch name="success-500" value="#12B76A" description="Primary success color" />
                <ColorSwatch name="success-600" value="#039855" />
                <ColorSwatch name="success-700" value="#027A48" />
            </div>
        </div>
    </div>
);
