import React from 'react';
import styled from 'styled-components';
import ImgSect5 from '../../images/ImageSection5.png';

const DiaryStyle = styled.section`
	height: 322px;
	left: 0px;
	top: 0px;
	background: #f2f2f2;

	.divider {
		width: 784px;
		border-top: solid 2px #dfdfdf;
	}
	.Diary-text {
		width: 784px;
	}
	.diary-content {
		display: grid;
		grid-template-rows: 100px 70px 130px;
		text-align: center;
		place-items: center;
	}
	img {
		width: 216px;
		height: 96px;
	}
`;

function Diary() {
	return (
		<DiaryStyle>
			<div className='diary-content'>
				<img src={ImgSect5} alt='Nanny Share Diary' />
				<h2>Coming soon: Nanny Share Daily Diary! </h2>
				<p className='Diary-text'>
					With the Hapu daily diary your nanny will be able to update
					you and your sharers with photos and commentary of the day.
					You and sharers will receive notifications and you’ll be
					able to login to view the daily adventures fo your little
					ones. We can’t wait!
				</p>
			</div>
		</DiaryStyle>
	);
}
export default Diary;
