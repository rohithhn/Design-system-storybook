import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary', 'link-color', 'link-gray', 'destructive-primary', 'destructive-secondary', 'destructive-tertiary'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl', '2xl'],
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'md',
        children: 'Button',
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        size: 'md',
        children: 'Button',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive-primary',
        size: 'md',
        children: 'Delete',
    },
};

export const LinkColor: Story = {
    args: {
        variant: 'link-color',
        size: 'md',
        children: 'Learn more',
    },
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" size="xl">Extra Large</Button>
            <Button variant="primary" size="2xl">2X Large</Button>
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="link-color">Link Color</Button>
            <Button variant="link-gray">Link Gray</Button>
            <Button variant="destructive-primary">Destructive Primary</Button>
            <Button variant="destructive-secondary">Destructive Secondary</Button>
            <Button variant="destructive-tertiary">Destructive Tertiary</Button>
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Disabled Button',
        disabled: true,
    },
};
