import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PlayButton from '../utils/PlayButton.svg';

const VariantBStyle = styled.div`
	.play-button {
		display: flex;
		align-self: center;
		justify-content: flex-start;
		color: #ffffff;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
	}
	.play-button img {
		width: 48px;
		height: 48px;
	}
	.play-button span {
		margin-left: 16px;
		align-self: center;
	}
	h1 {
		margin-bottom: 24px;
	}
	h2 {
		margin-bottom: 40px;
	}
`;

function VariantB(props) {
	return (
		<VariantBStyle>
			<h1>Create the childcare you need at a price you can afford</h1>
			<h2>
				Connect with other local families to share a nanny from as low
				as $10.00/hr each. Create your family profile today to get
				started.
			</h2>
			<Link
				onClick={props.clickAction}
				className='play-button'
				to='/play'
			>
				<img src={PlayButton} alt='Play Button' />
				<span>See hapu in action (27 seconds)</span>
			</Link>
		</VariantBStyle>
	);
}
export default VariantB;
