'use client';

import { useRef } from 'react';

import { useWindowEvent } from '@/hooks/useWindowEvent';

import styles from './CookingPan.module.css';

export const CookingPan = () => {
	const ref = useRef<HTMLDivElement | null>(null);

	useWindowEvent('scroll', () => {
		const scroll =
			window.scrollY / (document.body.offsetHeight - window.innerHeight);

		ref.current?.style.setProperty('--scroll', scroll.toString());
	});

	return (
		<div
			ref={ref}
			className="relative -top-28 mx-auto h-96 w-full max-w-md overflow-hidden md:hidden"
		>
			<div className={styles.bubble} />
			<div className={styles.bubble} />
			<div className={styles.bubble} />
			<div className={styles.bubble} />
			<div className={styles.bubble} />
			<div className={styles.area}>
				<div className={styles.sides}>
					<div className={styles.pan} />
					<div className={styles.handle} />
				</div>
				<div className={styles.pancake}>
					<div className={styles.pastry} />
				</div>
			</div>
		</div>
	);
};
