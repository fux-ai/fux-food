import RoundedSide from '@/assets/svg/rounded_side.svg';
import Logo from '@/assets/svg/logo.svg';

import { Container } from './Container';
import { Button } from './Button';

export const Hero = () => (
	<Container
		as="header"
		className="relative flex h-[780px] flex-col items-center gap-10 bg-gradient-to-r from-[#e7f4e4] to-[#bbdeda] pt-16 after:absolute after:bottom-0 after:h-[448px] after:w-[350px] after:bg-[url('/phone.png')] after:bg-fixed after:bg-[top_332px_center] after:bg-no-repeat lg:h-[530px] lg:flex-row lg:justify-between lg:pt-0 lg:after:right-16 lg:after:bg-[top_82px_right_4rem]"
	>
		<div className="flex w-full max-w-xs flex-col items-center lg:max-w-sm lg:items-start">
			<h2 className="text-xl font-semibold text-primary lg:text-left">
				Spar Fuchs
			</h2>
			<hgroup className="mb-4 mt-0.5 space-y-4 text-center lg:text-start">
				<h1 className="text-3xl font-bold lg:text-5xl lg:font-semibold">
					Coming Soon!
				</h1>
				<p className="text-lg font-medium text-black lg:font-normal lg:text-stone-600">
					Discover recipes, compare prices, save time and money with AI on our
					app. Stay tuned!
				</p>
			</hgroup>
			<Button fullRadius>Learn more</Button>
		</div>
		<RoundedSide className="absolute -bottom-0.5 z-10 h-fit w-full lg:hidden" />
		<Logo className="absolute left-1/2 top-full z-20 -translate-x-1/2 -translate-y-1/2 drop-shadow-md" />
	</Container>
);
