import React from 'react';

import styled from 'styled-components';

const DiaryStyle = styled.div`
	height: 508px;
	/* width: 1440px; */
	left: 0px;
	top: 0px;
	border-radius: 0px;
	border: 2px solid black;
	background: #f2f2f2;
`;

function Diary() {
	return (
		<DiaryStyle>
			<h1>Diary</h1>
		</DiaryStyle>
	);
}

export default Diary;
