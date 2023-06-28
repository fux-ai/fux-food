import { useEffect } from 'react';

export const useWindowEvent = <T extends keyof WindowEventMap>(
	event: T,
	handler: (event: WindowEventMap[T]) => unknown
) => {
	useEffect(() => {
		window.addEventListener(event, handler);

		return () => {
			window.removeEventListener(event, handler);
		};
	}, [event, handler]);
};
