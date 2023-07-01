import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { newsletterFormSchema } from './NewsletterForm.schemas';

import type { TypeOf } from 'zod';

export const useNewsletterForm = () => {
	const { handleSubmit, reset, ...rest } = useForm<
		TypeOf<typeof newsletterFormSchema>
	>({
		resolver: zodResolver(newsletterFormSchema),
	});

	const handleFormSubmit = handleSubmit(() => {
		reset();
	});

	return { handleFormSubmit, ...rest };
};
