import {
	BiLogoFacebookCircle,
	BiLogoTwitter,
	BiLogoInstagramAlt,
	BiLogoLinkedinSquare,
} from 'react-icons/bi';

const socials = [
	{ name: 'Facebook', href: '#', icon: BiLogoFacebookCircle },
	{ name: 'Twitter', href: '#', icon: BiLogoTwitter },
	{ name: 'Instagram', href: '#', icon: BiLogoInstagramAlt },
	{ name: 'Linkedin', href: '#', icon: BiLogoLinkedinSquare },
];

export const SocialList = () => (
	<>
		<ul className="mt-4 hidden grid-cols-2 gap-y-4 md:grid">
			{socials.map(({ name, href, icon: Icon }) => (
				<li key={name}>
					<a
						href={href}
						target="_blank"
						className="flex items-center gap-x-2 text-lg text-zinc-600"
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
						className="flex items-center gap-x-2 text-3xl text-zinc-600"
					>
						<Icon />
					</a>
				</li>
			))}
		</ul>
	</>
);
