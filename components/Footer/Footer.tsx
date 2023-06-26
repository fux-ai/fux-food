import { Container } from '../Container';
import { NewsletterForm } from './NewsletterForm';
import { SocialList } from './SocialList';

const SECTION_STYLES = 'py-10 lg:px-16';

export const Footer = () => (
	<Container
		as="footer"
		className="bg-gradient-to-r from-[#e7f4e4] to-[#bbdeda] py-6"
	>
		<div className="grid divide-y divide-zinc-400 lg:grid-cols-2 lg:divide-x lg:divide-y-0 lg:divide-black">
			<div className={SECTION_STYLES}>
				<h2 className="text-2xl font-semibold">Subscribe to Our Newsletter</h2>
				<NewsletterForm />
			</div>
			<div className={SECTION_STYLES}>
				<h2 className="hidden text-lg font-semibold lg:block">Our Socials</h2>
				<SocialList />
			</div>
		</div>
		<p className="mt-10 text-center">&copy; 2023 All Rights Reserved</p>
	</Container>
);
