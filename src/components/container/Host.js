import React from 'react';

import styled from 'styled-components';

const HostStyle = styled.div`
	height: 368px;
	/* width: 1440px; */
	left: 0px;
	top: 0px;
	border-radius: 0px;
	border: 2px solid black;
	background: #ffffff;
`;

function Host() {
	return (
		<HostStyle>
			<h1>Host</h1>
		</HostStyle>
	);
}

export default Host;
