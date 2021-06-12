import React from 'react';

import styled from 'styled-components';

const FrameworkStyle = styled.div`
	height: 380px;
	/* width: 1440px; */
	left: 0px;
	top: 0px;
	border-radius: 0px;
	border: 2px solid black;
	background: #f2f2f2;
`;

function Framework() {
	return (
		<FrameworkStyle>
			<h1>Framework</h1>
		</FrameworkStyle>
	);
}

export default Framework;
