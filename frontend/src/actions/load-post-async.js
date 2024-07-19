import { request } from '../utils/request';
import { setPostdata } from './set-post-data';

export const loadPostAsync = (postId) => (dispatch) =>
	request(`/posts/${postId}`).then((postData) => {
		if (postData.data) {
			dispatch(setPostdata(postData.data));
		}

		return postData;
	});
