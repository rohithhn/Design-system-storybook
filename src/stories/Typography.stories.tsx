import type { Meta } from '@storybook/react';

const meta = {
    title: 'Design Tokens/Typography',
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta;

export default meta;

const TypeSample = ({ name, className, text }: { name: string; className: string; text: string }) => (
    <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="text-sm text-gray-600 mb-2 font-mono">{name}</div>
        <div className={className}>{text}</div>
    </div>
);

export const DisplayStyles = () => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">Display Styles</h2>
        <TypeSample
            name="text-display-2xl"
            className="text-display-2xl font-semibold"
            text="The quick brown fox jumps over the lazy dog"
        />
        <TypeSample
            name="text-display-xl"
            className="text-display-xl font-semibold"
            text="The quick brown fox jumps over the lazy dog"
        />
        <TypeSample
            name="text-display-lg"
            className="text-display-lg font-semibold"
            text="The quick brown fox jumps over the lazy dog"
        />
        <TypeSample
            name="text-display-md"
            className="text-display-md font-semibold"
            text="The quick brown fox jumps over the lazy dog"
        />
        <TypeSample
            name="text-display-sm"
            className="text-display-sm font-semibold"
            text="The quick brown fox jumps over the lazy dog"
        />
        <TypeSample
            name="text-display-xs"
            className="text-display-xs font-semibold"
            text="The quick brown fox jumps over the lazy dog"
        />
    </div>
);

export const TextStyles = () => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">Text Styles</h2>
        <TypeSample
            name="text-xl"
            className="text-xl"
            text="The quick brown fox jumps over the lazy dog"
        />
        <TypeSample
            name="text-lg"
            className="text-lg"
            text="The quick brown fox jumps over the lazy dog"
        />
        <TypeSample
            name="text-md"
            className="text-md"
            text="The quick brown fox jumps over the lazy dog"
        />
        <TypeSample
            name="text-sm"
            className="text-sm"
            text="The quick brown fox jumps over the lazy dog"
        />
        <TypeSample
            name="text-xs"
            className="text-xs"
            text="The quick brown fox jumps over the lazy dog"
        />
    </div>
);

export const FontWeights = () => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">Font Weights</h2>
        <TypeSample
            name="font-regular (400)"
            className="text-lg font-normal"
            text="The quick brown fox jumps over the lazy dog"
        />
        <TypeSample
            name="font-medium (500)"
            className="text-lg font-medium"
            text="The quick brown fox jumps over the lazy dog"
        />
        <TypeSample
            name="font-semibold (600)"
            className="text-lg font-semibold"
            text="The quick brown fox jumps over the lazy dog"
        />
        <TypeSample
            name="font-bold (700)"
            className="text-lg font-bold"
            text="The quick brown fox jumps over the lazy dog"
        />
    </div>
);
