import {
	BiLogoFacebookCircle,
	BiLogoInstagramAlt,
	BiLogoLinkedinSquare,
	BiLogoTwitter,
} from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';

const socials = [
	{ name: 'Facebook', href: '#', icon: BiLogoFacebookCircle },
	{ name: 'Twitter', href: '#', icon: BiLogoTwitter },
	{ name: 'Instagram', href: '#', icon: BiLogoInstagramAlt },
	{ name: 'Linkedin', href: '#', icon: BiLogoLinkedinSquare },
];

const LINK_STYLES = 'flex items-center gap-x-2 text-lg text-zinc-600';

export const SocialList = () => (
	<>
		<ul className="mt-4 hidden grid-cols-2 gap-y-4 md:grid">
			{socials.map(({ name, href, icon: Icon }) => (
				<li key={name}>
					<a
						href={href}
						target="_blank"
						className={twMerge(LINK_STYLES, 'text-lg')}
					>
						<Icon className="text-xl" /> {name}
					</a>
				</li>
			))}
		</ul>
		<ul className="flex justify-around md:hidden">
			{socials.map(({ name, href, icon: Icon }) => (
				<li key={name}>
					<a
						href={href}
						aria-label={name}
						target="_blank"
						className={twMerge(LINK_STYLES, 'text-3xl')}
					>
						<Icon />
					</a>
				</li>
			))}
		</ul>
	</>
);
