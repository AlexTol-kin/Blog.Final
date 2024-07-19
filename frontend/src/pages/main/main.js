import { useEffect, useState } from 'react';
import { Pagination, PostCard, Search } from './components';
import { PAGINATION_LIMIT } from '../../constans';
import debounce from 'debounce';
import styled from 'styled-components';
import { request } from '../../utils/request';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');

	useEffect(() => {
		request(
			`/posts?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`,
		).then(({ data: { posts, lastPage } }) => {
			setPosts(posts);
			setLastPage(lastPage);
		});
	}, [page, shouldSearch]);

	const updateSearchPhrase = debounce((value) => {
		if (value.length > 0) {
			setShouldSearch(true);
		} else {
			setShouldSearch(false);
		}
	}, 2000);

	const handleChange = async (e) => {
		setSearchPhrase(e.target.value);
		updateSearchPhrase(e.target.value);
		if (shouldSearch) {
			const newMap = posts.filter((id) => {
				if (id.title.includes(searchPhrase)) {
					return id;
				}
			});
			setPosts(newMap);
			setLastPage(1);
		}
	};

	return (
		<div className={className}>
			<div className="post-and-search">
				<Search searchPhrase={searchPhrase} handleChange={handleChange} />
				{posts.length > 0 ? (
					<div className="post-list">
						{posts.map(({ id, title, imageUrl, publishedAt, comments }) => (
							<PostCard
								key={id}
								id={id}
								title={title}
								imageUrl={imageUrl}
								publishedAt={publishedAt}
								commentsCount={comments.length}
							/>
						))}
					</div>
				) : (
					<div className="no-posts-found">Статьи не найдены</div>
				)}
			</div>

			{lastPage > 1 && posts.length > 0 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 20px 80px;
	}

	& .no-posts-found {
		font-size: 18px;
		margin-top: 40px;
		text-align: center;
	}
`;
