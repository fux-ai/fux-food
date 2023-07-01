import { z } from 'zod';

export const newsletterFormSchema = z.object({
	email: z
		.string()
		.nonempty('Please enter your email address')
		.email('Please enter a valid email address'),
});
