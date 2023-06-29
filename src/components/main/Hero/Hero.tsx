import { CookingPan } from './CookingPan/CookingPan';

import Logo from '@/assets/svg/logo.svg';
import RoundedSide from '@/assets/svg/rounded_side.svg';
import { Button } from '@/components/ui/Button/Button';
import { Container } from '@/components/ui/Container/Container';

export const Hero = () => (
	<Container
		as="header"
		className="relative flex h-[780px] flex-col items-center gap-10 bg-gradient-to-r from-green-light to-blue-light pt-16 after:absolute after:bottom-0 after:h-[448px] after:w-[350px] after:bg-phone after:bg-fixed after:bg-[top_332px_center] after:bg-no-repeat md:h-[530px] md:flex-row md:justify-between md:pt-0 md:after:right-16 md:after:bg-[top_82px_right_4rem]"
	>
		<div className="flex w-full max-w-xs flex-col items-center md:max-w-sm md:items-start">
			<h2 className="text-xl font-semibold text-primary md:text-left">
				Spar Fuchs
			</h2>
			<hgroup className="mb-4 mt-0.5 space-y-4 text-center md:text-start">
				<h1 className="text-3xl font-bold md:text-5xl md:font-semibold">
					Coming Soon!
				</h1>
				<p className="text-lg font-medium text-black md:font-normal md:text-stone-600">
					Discover recipes, compare prices, save time and money with AI on our
					app. Stay tuned!
				</p>
			</hgroup>
			<Button fullRadius>Learn more</Button>
		</div>
		<CookingPan />
		<RoundedSide className="absolute -bottom-0.5 z-10 h-fit w-full md:hidden" />
		<Logo className="absolute left-1/2 top-full z-20 -translate-x-1/2 -translate-y-1/2 drop-shadow-md" />
	</Container>
);
