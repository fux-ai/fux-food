import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { Container } from '../ui/Container/Container';

export const NotificationSection = () => (
	<Container as="section" className="py-16">
		<div className="space-y-6 md:max-w-lg">
			<hgroup className="space-y-1.5">
				<h2 className="text-xl font-semibold">Get Notified First</h2>
				<p className="text-justify text-stone-600">
					Be the first to experience it! Join the waitlist now and secure your
					spot for exclusive early access
				</p>
			</hgroup>
			<Link
				href="#"
				className="flex items-center justify-between rounded-lg bg-primary px-8 py-4 text-white md:bg-neutral-900"
			>
				Join the waitlist
				<AiOutlineArrowRight className="text-2xl" />
			</Link>
		</div>
	</Container>
);
