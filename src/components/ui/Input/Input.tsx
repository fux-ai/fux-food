import { twMerge } from 'tailwind-merge';

type InputProps = Readonly<{
	type?: 'text' | 'email';
	placeholder?: string;
	fill?: boolean;
}>;

export const Input = ({ type = 'text', placeholder, fill }: InputProps) => (
	<input
		type={type}
		placeholder={placeholder}
		className={twMerge(
			'w-fit rounded-md border border-black/10 bg-white px-6 py-3.5 focus:outline-none',
			fill && 'w-full'
		)}
	/>
);
