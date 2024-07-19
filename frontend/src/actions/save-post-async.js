import { request } from '../utils/request';
import { setPostdata } from './set-post-data';

export const savePostAsync = (id, newPostData) => (dispatch) => {
	const saveRequest = id
		? request(`/posts/${id}`, 'PATCH', newPostData)
		: request(`/posts`, 'POST', newPostData);
	return saveRequest.then((updatedPost) => {
		dispatch(setPostdata(updatedPost.data));

		return updatedPost.res;
	});
};
