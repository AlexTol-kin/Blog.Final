import { useStore } from 'react-redux';
import { useEffect } from 'react';

export const useResetForm = (reset) => {
	const store = useStore();

	useEffect(() => {
		let currentWaslogout = store.getState().app.wasLogout;

		return store.subscribe(() => {
			let previosWasLogout = currentWaslogout;
			currentWaslogout = store.getState().app.wasLogout;

			if (currentWaslogout !== previosWasLogout) {
				reset();
			}
		});
	}, [reset, store]);
};
