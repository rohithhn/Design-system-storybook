import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from './Button';

const meta = {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ButtonGroup>
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
        </ButtonGroup>
    ),
};

export const TwoButtons: Story = {
    render: () => (
        <ButtonGroup>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Save</Button>
        </ButtonGroup>
    ),
};

export const FourButtons: Story = {
    render: () => (
        <ButtonGroup>
            <Button variant="secondary">1</Button>
            <Button variant="secondary">2</Button>
            <Button variant="secondary">3</Button>
            <Button variant="secondary">4</Button>
        </ButtonGroup>
    ),
};
