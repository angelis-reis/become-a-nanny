import React from 'react';

import styled from 'styled-components';

const ShareStyle = styled.div`
	height: 632px;
	/* width: 1440px; */
	left: 0px;
	top: 0px;
	border-radius: 0px;
	border: 2px solid black;
	background: #f2f2f2;
`;

function Share() {
	return (
		<ShareStyle>
			<h1>Share</h1>
		</ShareStyle>
	);
}

export default Share;
