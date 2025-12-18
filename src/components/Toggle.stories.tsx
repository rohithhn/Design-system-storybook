import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';
import { useState } from 'react';

const meta = {
    title: 'Components/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['default', 'slim'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md'],
        },
        text: {
            control: 'boolean',
        },
        pressed: {
            control: 'boolean',
        },
        state: {
            control: 'select',
            options: ['default', 'hover', 'focus', 'disabled'],
        },
    },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'default',
        size: 'md',
        pressed: false,
        text: false,
    },
};

export const WithText: Story = {
    args: {
        type: 'default',
        size: 'md',
        pressed: false,
        text: true,
        label: 'Enable notifications',
        description: 'Receive email notifications for important updates',
    },
};

export const Slim: Story = {
    args: {
        type: 'slim',
        size: 'md',
        pressed: false,
        text: false,
    },
};

export const Interactive: Story = {
    render: () => {
        const [pressed, setPressed] = useState(false);
        return (
            <Toggle
                type="default"
                size="md"
                text={true}
                pressed={pressed}
                onPressedChange={setPressed}
                label="Dark mode"
                description="Use dark theme across the application"
            />
        );
    },
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex flex-col gap-6">
            <div>
                <p className="text-sm text-gray-600 mb-2">Small</p>
                <Toggle type="default" size="sm" pressed={false} />
            </div>
            <div>
                <p className="text-sm text-gray-600 mb-2">Medium</p>
                <Toggle type="default" size="md" pressed={false} />
            </div>
        </div>
    ),
};

export const AllTypes: Story = {
    render: () => (
        <div className="flex gap-6">
            <div>
                <p className="text-sm text-gray-600 mb-2">Default</p>
                <Toggle type="default" size="md" pressed={true} />
            </div>
            <div>
                <p className="text-sm text-gray-600 mb-2">Slim</p>
                <Toggle type="slim" size="md" pressed={true} />
            </div>
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        type: 'default',
        size: 'md',
        pressed: true,
        text: true,
        state: 'disabled',
        label: 'Premium feature',
        description: 'This feature is only available for premium users',
    },
};
