import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Button',
	component: Button,
	args: {
		children: 'Example',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FullRadius: Story = {
	args: {
		fullRadius: true,
	},
};
