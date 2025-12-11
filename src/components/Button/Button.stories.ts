import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './Button';

const meta = {
    title: 'React Component Library/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        label: 'Click me',
        disabled: false,
        onClick: fn(),
        className: 'button',
    },
    argTypes: {
        label: { control: 'text' },
        disabled: { control: 'boolean' },
        onClick: { action: 'onClick' },
        className: { control: 'text' },
    },
} satisfies Meta<typeof Button>;

    export default meta;
    type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Click me',
        disabled: false,
        onClick: fn(),
        className: '',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Click me',
        disabled: true,
        onClick: fn(),
        className: '',
    },
};

export const Large: Story = {
    args: {
        label: 'Click me large',
        disabled: false,
        onClick: fn(),
        className: 'button--large',
    },
};

export const Medium: Story = {
    args: {
        label: 'Click me medium',
        disabled: false,
        onClick: fn(),
        className: 'button--medium',
    },
};

