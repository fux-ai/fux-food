import { twJoin } from 'tailwind-merge';

import type { ReactNode } from 'react';

type ContainerProps = Readonly<{
	as?: keyof JSX.IntrinsicElements;
	className?: string;
	children: ReactNode;
}>;

export const Container = ({
	as: As = 'div',
	className,
	children,
}: ContainerProps) => (
	<As className={twJoin('px-4 md:px-16', className)}>{children}</As>
);
