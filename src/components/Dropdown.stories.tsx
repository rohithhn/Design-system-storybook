import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from './Dropdown';

const meta = {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Dropdown trigger={<button className="px-4 py-2 bg-brand-600 text-white rounded-lg">Open Menu</button>}>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Logout</DropdownItem>
        </Dropdown>
    ),
};

export const WithHeaders: Story = {
    render: () => (
        <Dropdown trigger={<button className="px-4 py-2 bg-brand-600 text-white rounded-lg">Account</button>}>
            <DropdownHeader>Personal</DropdownHeader>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownDivider />
            <DropdownHeader>Actions</DropdownHeader>
            <DropdownItem>Logout</DropdownItem>
        </Dropdown>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <Dropdown trigger={<button className="px-4 py-2 bg-brand-600 text-white rounded-lg">Options</button>}>
            <DropdownItem>
                <span className="flex items-center gap-2">
                    <span>👤</span> Profile
                </span>
            </DropdownItem>
            <DropdownItem>
                <span className="flex items-center gap-2">
                    <span>⚙️</span> Settings
                </span>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem>
                <span className="flex items-center gap-2">
                    <span>🚪</span> Logout
                </span>
            </DropdownItem>
        </Dropdown>
    ),
};
