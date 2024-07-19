import PropTypes from 'prop-types';
import { Icon, Input } from '../../../../components';
import styled from 'styled-components';

const SearchContainer = ({ className, searchPhrase, handleChange }) => {
	return (
		<div className={className}>
			<Input value={searchPhrase} onChange={handleChange} />
			<Icon inactive={true} id="fa-search" size="20px" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	width: 340px;
	height: 46px;
	margin: 40px auto 0;
	position: relative;

	& > input {
		padding: 10px 35px 10px 10px;
	}

	& > div {
		position: absolute;
		top: 3px;
		right: 9px;
	}
`;

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};
