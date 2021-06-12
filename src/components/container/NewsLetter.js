import React from 'react';

import styled from 'styled-components';

const NewsLetterStyle = styled.div`
	height: 322px;
	/* width: 1440px; */
	left: 0px;
	top: 0px;
	border-radius: 0px;
	border: 2px solid black;
	background: #f2f2f2;
`;

function NewsLetter() {
	return (
		<NewsLetterStyle>
			<h1>NewsLetter</h1>
		</NewsLetterStyle>
	);
}

export default NewsLetter;
