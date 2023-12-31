import { Input } from './Input';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Input',
	component: Input,
	args: {
		placeholder: 'Example input',
	},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Placeholder: Story = {
	args: {
		placeholder: 'Example placeholder',
	},
};

export const Error: Story = {
	args: {
		error: 'Example error!',
	},
};
