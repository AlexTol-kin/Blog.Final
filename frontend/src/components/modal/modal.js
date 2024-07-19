import { useSelector } from 'react-redux';
import { Button } from '../button/button';
import {
	selectModaIsOpen,
	selectModaOnCancel,
	selectModaOnConfirm,
	selectModaText,
} from '../../selectors';
import styled from 'styled-components';

const ModalContaier = ({ className }) => {
	const isOpen = useSelector(selectModaIsOpen);
	const text = useSelector(selectModaText);
	const onConfirm = useSelector(selectModaOnConfirm);
	const onCancel = useSelector(selectModaOnCancel);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button width="120px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContaier)`
	position: fixed;
	z-index: 20;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	& .overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
	}

	& .box {
		position: relative;
		width: 400px;
		margin: auto;
		z-index: 30;
		padding: 0 20px 20px;
		top: 50%;
		text-align: center;
		transform: translate(0, -50%);
		border: 3px solid #000;
		background-color: #fff;
	}

	& .buttons {
		display: flex;
		justify-content: center;
	}

	& .buttons button {
		margin: 0 5px;
	}
`;
