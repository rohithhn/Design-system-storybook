import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from './CloseButton';

const meta = {
    title: 'Components/CloseButton',
    component: CloseButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        size: 'sm',
    },
};

export const Medium: Story = {
    args: {
        size: 'md',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <CloseButton size="sm" />
            <CloseButton size="md" />
            <CloseButton size="lg" />
        </div>
    ),
};
