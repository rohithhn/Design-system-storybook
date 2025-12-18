import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta = {
    title: 'Components/Textarea',
    component: Textarea,
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
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter your message...',
        size: 'md',
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Message',
        placeholder: 'Type your message here...',
        size: 'md',
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Description',
        placeholder: 'Enter description...',
        helperText: 'Provide a detailed description of your project.',
        size: 'md',
    },
};

export const WithError: Story = {
    args: {
        label: 'Comments',
        placeholder: 'Enter comments...',
        state: 'error',
        helperText: 'This field is required.',
        size: 'md',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled textarea',
        placeholder: 'Cannot edit...',
        disabled: true,
        size: 'md',
    },
};
