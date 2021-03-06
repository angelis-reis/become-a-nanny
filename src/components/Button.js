import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
	height: 44px;
	border-radius: 4px;
	border: none;
	background-color: #00a870;
	color: #ffffff;
	/* text-align: center; */
	text-decoration: none;
	padding: 12px 21px;
	cursor: pointer;
`;

function Button(props) {
	return (
		<ButtonStyle>
			<h5>{props.title}</h5>
		</ButtonStyle>
	);
}
export default Button;
