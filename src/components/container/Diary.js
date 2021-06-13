import React from 'react';

import styled from 'styled-components';
import ImgSect5 from '../../images/ImageSection5.png';


const DiaryStyle = styled.div`
	height: 322px;
	left: 0px;
	top: 0px;
	background: #f2f2f2;

	display: grid;
	grid-template-rows: 35px 40px 50px;
	text-align: center;
	place-items: center;

	.divider {
		width: 784px;
		border-top: solid 2px #dfdfdf;
		/* padding-bottom: 64px; */
	}

	.Diary-text {
		width: 784px;
	}
`;

function Diary() {
	return (
		<DiaryStyle>

			<img src={ImgSect5} alt='Nanny Share Diary' />

			<h2>Coming soon: Nanny Share Daily Diary! </h2>
			<p className='Diary-text'>
				With the Hapu daily diary your nanny will be able to update you
				and your sharers with photos and commentary of the day. You and
				sharers will receive notifications and you’ll be able to login
				to view the daily adventures fo your little ones. We can’t wait!
			</p>
		</DiaryStyle>
	);
}

export default Diary;
