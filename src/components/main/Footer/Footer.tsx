import { NewsletterForm } from './NewsletterForm/NewsletterForm';
import { SocialList } from './SocialList';

import { Container } from '@/components/ui/Container/Container';

const SECTION_STYLES = 'py-10 md:px-16';

export const Footer = () => (
	<Container
		as="footer"
		className="bg-gradient-to-r from-green-light to-blue-light py-6"
	>
		<div className="grid divide-y divide-zinc-400 md:grid-cols-2 md:divide-x md:divide-y-0 md:divide-black">
			<div className={SECTION_STYLES}>
				<h2 className="text-2xl font-semibold">Subscribe to Our Newsletter</h2>
				<NewsletterForm />
			</div>
			<div className={SECTION_STYLES}>
				<h2 className="hidden text-lg font-semibold md:block">Our Socials</h2>
				<SocialList />
			</div>
		</div>
		<p className="mt-10 text-center">&copy; 2023 All Rights Reserved</p>
	</Container>
);
