import type { Meta, StoryObj } from '@storybook/react';
import { TextEditor } from './TextEditor';
import { useState } from 'react';

const meta = {
    title: 'Components/TextEditor',
    component: TextEditor,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['default', 'floating-toolbar'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md'],
        },
        toolbarType: {
            control: 'select',
            options: ['simple', 'advanced'],
        },
    },
} satisfies Meta<typeof TextEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'default',
        size: 'md',
        toolbarType: 'simple',
        placeholder: 'Start typing...',
    },
};

export const WithLabel: Story = {
    args: {
        type: 'default',
        size: 'md',
        toolbarType: 'simple',
        label: 'Description',
        placeholder: 'Enter your description...',
    },
};

export const AdvancedToolbar: Story = {
    args: {
        type: 'default',
        size: 'md',
        toolbarType: 'advanced',
        label: 'Content',
        placeholder: 'Write your content...',
    },
};

export const FloatingToolbar: Story = {
    args: {
        type: 'floating-toolbar',
        size: 'md',
        toolbarType: 'simple',
        placeholder: 'Select text to see the floating toolbar...',
    },
};

export const Small: Story = {
    args: {
        type: 'default',
        size: 'sm',
        toolbarType: 'simple',
        placeholder: 'Small editor...',
    },
};

export const WithError: Story = {
    args: {
        type: 'default',
        size: 'md',
        toolbarType: 'simple',
        label: 'Required field',
        placeholder: 'This field is required...',
        error: true,
        helperText: 'Please enter some content.',
    },
};

export const Interactive: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <div className="w-full max-w-2xl">
                <TextEditor
                    type="default"
                    size="md"
                    toolbarType="advanced"
                    label="Rich Text Editor"
                    placeholder="Try out all the formatting options..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    helperText={`${value.length} characters`}
                />
            </div>
        );
    },
};
