import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type ButtonProps = Readonly<{
	type?: 'button' | 'submit';
	fullRadius?: boolean;
	children: ReactNode;
}>;

export const Button = ({
	type = 'button',
	fullRadius,
	children,
}: ButtonProps) => (
	<button
		type={type}
		className={twMerge(
			'rounded-md bg-primary px-7 py-2.5 text-white',
			fullRadius && 'rounded-full'
		)}
	>
		{children}
	</button>
);
