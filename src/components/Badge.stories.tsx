import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['gray', 'brand', 'error', 'warning', 'success'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gray: Story = {
    args: {
        variant: 'gray',
        size: 'md',
        children: 'Badge',
    },
};

export const Brand: Story = {
    args: {
        variant: 'brand',
        size: 'md',
        children: 'New',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        size: 'md',
        children: 'Error',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        size: 'md',
        children: 'Warning',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        size: 'md',
        children: 'Success',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Badge variant="gray">Gray</Badge>
            <Badge variant="brand">Brand</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="success">Success</Badge>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Badge variant="brand" size="sm">Small</Badge>
            <Badge variant="brand" size="md">Medium</Badge>
            <Badge variant="brand" size="lg">Large</Badge>
        </div>
    ),
};
