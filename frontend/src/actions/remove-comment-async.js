import { request } from '../utils/request';
import { removeCommnet } from './remove-comment';

export const removeCommentAsync = (postId, id) => (dispatch) => {
	request(`/posts/${postId}/comments/${id}`, 'DELETE').then(() => {
		return dispatch(removeCommnet(id));
	});
};
