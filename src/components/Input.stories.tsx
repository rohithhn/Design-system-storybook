import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md'],
        },
        state: {
            control: 'select',
            options: ['default', 'error'],
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter your email',
        size: 'md',
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Email address',
        placeholder: 'you@example.com',
        size: 'md',
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Email',
        placeholder: 'you@example.com',
        helperText: 'We\'ll never share your email with anyone else.',
        size: 'md',
    },
};

export const WithError: Story = {
    args: {
        label: 'Email',
        placeholder: 'you@example.com',
        state: 'error',
        helperText: 'Please enter a valid email address.',
        size: 'md',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Email',
        placeholder: 'you@example.com',
        disabled: true,
        size: 'md',
    },
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex flex-col gap-4 w-80">
            <Input label="Small" placeholder="Small input" size="sm" />
            <Input label="Medium" placeholder="Medium input" size="md" />
        </div>
    ),
};
