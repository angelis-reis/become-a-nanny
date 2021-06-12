import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import styled from 'styled-components';
import ImgHeader from '../../images/ImageHeader.png';
import PlayButton from '../../utils/PlayButton.svg';

const HeroStyle = styled.div`
	/* backdrop-filter: grayscale(1); */
	height: 616px;
	display: grid;
	place-content: center;

	background: linear-gradient(175deg, #5912ac, #7e49c3, #c86dd7),
		url(https://s3-alpha-sig.figma.com/img/17eb/3037/a8afc96eccb6f1885700ab5d6e2e58ef?Expires=1624233600&Signature=FHsxic-Bp1zNtfKlKuWor75XVzZqhkvNdXUNjI826IVsU~fK2bxHCYRxeun7u8t0xp6PoHNuZ7iJlEIE~HBJIX~wAvuGKAza59aZewFA1N5ZRuUHu7SwtggKYwKy~Kpdr1KIRoljcihlcxTUZIhSJ2xaEGoutQHJo2UkQRzkKafG~vityj8yLIEMuDHzOXZCV4a3CoEffgtPoQdWTVyyXzmaXPc0K7~XJseWBHwMZB~giCZD6irn0hr5ds9pMJb52UStdu9sMiSCO0e7a0EnpvSj3Vn52EhNcGz4sVdMiH0RwHeH-VgSmUB4cKhCfF79Ok9vJLE-aOh0ZI82k~DgbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);

	/* background-image: linear-gradient(175deg, #5912ac, #7e49c3, #c86dd7); */

	background-blend-mode: darken;
	object-fit: cover;

	/* width: 1440px; */
	/* background-blend-mode: overlay 20%; */

	background-size: cover;
	/* opacity: 90%; */
	/* mix-blend-mode: overlay; */
	left: 0px;
	top: 0px;
	border-radius: 0px;
	place-self: center stretch;

	.hero-content {
		display: grid;
		place-content: center;
		/* padding-top: 140px; */
		width: 1084px;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 360px;
		color: #ffffff;
	}

	.hero-text {
		place-self: center;
		width: 560px;
	}

	.hero-text h1 {
		margin-bottom: 24px;
	}

	.hero-text h2 {
		margin-bottom: 40px;
	}

	.img-header {
		place-self: center;
	}

	.play-button {
		display: flex;
		align-self: center;
		justify-content: flex-start;
		color: #ffffff;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
	}

	.play-button span {
		margin-left: 16px;
		align-self: center;
	}
`;

function Hero() {
	return (
		<HeroStyle>
			<Router>
				<div className='hero-content'>
					<div className='hero-text'>
						<h1>
							Easily create or join a local nanny share with Hapu
						</h1>
						<h2>
							Hapu is Airbnb for nanny share. Share your home,
							nanny and costs and create new flexible, affordable
							solutions in childcare.
						</h2>
						{/* <div className='video-play'> */}
						<Link className='play-button' to='/play'>
							<img src={PlayButton} alt='Play Button' />
							<span>See hapu in action (27 seconds)</span>
						</Link>
						{/* </div> */}
					</div>

					<img
						className='img-header'
						src={ImgHeader}
						alt="Hapu's Console"
					/>
				</div>
			</Router>
		</HeroStyle>
	);
}

export default Hero;
