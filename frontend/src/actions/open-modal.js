import { ACTION_TYPE } from './action-type';

export const openModal = (modalParam) => ({
	type: ACTION_TYPE.OPEN_MODAL,
	payload: modalParam,
});
