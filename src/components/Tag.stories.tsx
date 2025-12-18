import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
    title: 'Components/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['gray', 'brand', 'error', 'warning', 'success', 'gray-blue', 'blue-light', 'blue', 'indigo', 'purple', 'pink', 'orange'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gray: Story = {
    args: {
        variant: 'gray',
        size: 'md',
        children: 'Tag',
    },
};

export const Brand: Story = {
    args: {
        variant: 'brand',
        size: 'md',
        children: 'Featured',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <Tag variant="gray">Gray</Tag>
            <Tag variant="brand">Brand</Tag>
            <Tag variant="error">Error</Tag>
            <Tag variant="warning">Warning</Tag>
            <Tag variant="success">Success</Tag>
            <Tag variant="gray-blue">Gray Blue</Tag>
            <Tag variant="blue-light">Blue Light</Tag>
            <Tag variant="blue">Blue</Tag>
            <Tag variant="indigo">Indigo</Tag>
            <Tag variant="purple">Purple</Tag>
            <Tag variant="pink">Pink</Tag>
            <Tag variant="orange">Orange</Tag>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Tag variant="brand" size="sm">Small</Tag>
            <Tag variant="brand" size="md">Medium</Tag>
            <Tag variant="brand" size="lg">Large</Tag>
        </div>
    ),
};
