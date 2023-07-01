import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ChangeEventHandler, FocusEventHandler } from 'react';

type InputProps = Readonly<{
	type?: 'text' | 'email';
	name?: string;
	placeholder?: string;
	error?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
}>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ type = 'text', name, placeholder, error, onChange, onBlur }, ref) => (
		<div className="w-full space-y-1">
			<input
				ref={ref}
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				className={twMerge(
					'w-full rounded-md border border-black/10 bg-white px-6 py-3.5 focus:outline-none',
					error && 'border-red-600'
				)}
			/>
			{error && (
				<p role="alert" className="text-sm text-red-600">
					{error}
				</p>
			)}
		</div>
	)
);

Input.displayName = 'Input';
