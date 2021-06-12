import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import styled from 'styled-components';
import ImgSect1 from '../../images/ImageSection1.png';

const ShareStyle = styled.div`
	display: grid;
	place-items: center;
	height: 632px;
	background: #f2f2f2;

	.share-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		width: 1084px;
	}

	.share-text {
		display: grid;
		width: 450px;
		grid-template-rows: 64px 224px 24px;
	}

	.share-img {
		width: 584px;
		height: 392px;
	}
`;

function Share() {
	return (
		<ShareStyle>
			<Router>
				<div className='share-content'>
					<div className='share-text'>
						<h2>Share your home, nanny and costs</h2>
						<span>
							You have a fantastic home, a fantastic nanny and
							wouldn’t cutting your costs in half be, well,
							fantastic?! If only it was easy to connect with
							other parents to share your costs? Well now it is,
							with Hapu.
							<Link className='tribe-link' to='/tribe'>
								<span>Hapu means tribe </span>
							</Link>
							and it’s our foundational 3 tribal principles that
							empowers you to create and manage your own tribe. A
							tribe that together has the power to create new
							affordable solutions in childcare that work for you
							and your community.
						</span>

						<Link className='start-link' to='/start'>
							<span>Ready to get started?</span>
						</Link>
					</div>

					<img
						className='share-img'
						src={ImgSect1}
						alt="Hapu's App"
					/>
				</div>
			</Router>
		</ShareStyle>
	);
}

export default Share;
