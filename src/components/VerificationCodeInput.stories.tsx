import type { Meta, StoryObj } from '@storybook/react';
import { VerificationCodeInput } from './VerificationCodeInput';
import { useState } from 'react';

const meta = {
    title: 'Components/VerificationCodeInput',
    component: VerificationCodeInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        length: {
            control: { type: 'number', min: 4, max: 8 },
        },
    },
} satisfies Meta<typeof VerificationCodeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        length: 6,
    },
};

export const FourDigits: Story = {
    args: {
        length: 4,
    },
};

export const WithLabel: Story = {
    render: () => (
        <div className="space-y-2">
            <label className="block text-sm font-medium">Enter verification code</label>
            <VerificationCodeInput length={6} />
            <p className="text-sm text-gray-600">Check your email for the code</p>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <div className="space-y-4">
                <VerificationCodeInput
                    length={6}
                    value={value}
                    onChange={setValue}
                />
                <p className="text-sm text-gray-600">Current value: {value || 'empty'}</p>
            </div>
        );
    },
};
