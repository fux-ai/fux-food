'use client';

import { useNewsletterForm } from './useNewsletterForm';

import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';

export const NewsletterForm = () => {
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useNewsletterForm();

	return (
		<form onSubmit={handleFormSubmit} className="mt-6 flex gap-x-2">
			<Input
				type="email"
				placeholder="Enter your email address"
				error={errors.email?.message}
				{...register('email')}
			/>
			<Button type="submit">Submit</Button>
		</form>
	);
};
