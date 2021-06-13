import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import HapuLogo from '../../utils/Logo.svg';
import FacebookIcon from '../../utils/Facebook.svg';
import TwitterIcon from '../../utils/Twitter.svg';
import InstagramIcon from '../../utils/Instagram.svg';

const FooterStyle = styled.div`
	background: #ffffff;
	height: 160px;
	width: 100%;
	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-areas:
		'hapu-logo footer-links social-media'
		'. copyright . ';

	.hapu-logo {
		grid-area: hapu-logo;
		margin-left: 128px;
		align-self: center;
	}
	.footer-links {
		grid-area: footer-links;
		display: flex;
	}
	.footer-link {
		text-align: center;
		text-decoration: none;
		align-self: center;
		margin-left: 15px;
		margin-right: 15px;
		color: #3d3d3d;
	}

	.social-media {
		grid-area: social-media;
		display: flex;
		align-self: center;
		justify-content: flex-end;
	}
	.copyright {
		grid-area: copyright;
		text-align: center;
		align-self: end;
		margin-bottom: 12px;
	}
`;
function Footer() {
	return (
		<FooterStyle>
			<Router>
				<Link className='hapu-logo' to='/'>
					<img src={HapuLogo} alt='Hapu Logo' />
				</Link>

				<div className='footer-links'>
					<Link className='footer-link' to='/share'>
						<h5>Share Your Nanny</h5>
					</Link>
					<Link className='footer-link' to='/story'>
						<h5>Our Story</h5>
					</Link>
					<Link className='footer-link' to='/blog'>
						<h5>Blog</h5>
					</Link>
					<Link className='footer-link' to='/terms'>
						<h5>Terms & Privacity</h5>
					</Link>
				</div>

				<div className='social-media'>
					<Link className='footer-link' to='/'>
						<img src={FacebookIcon} alt='Facebook' />
					</Link>
					<Link className='footer-link' to='/'>
						<img src={TwitterIcon} alt='Twitter' />
					</Link>
					<Link className='footer-link' to='/'>
						<img src={InstagramIcon} alt='Instagram' />
					</Link>
				</div>

				<h5 className='copyright'>
					Copyright © 2017 Hapu PTY Limited All rights reserved
				</h5>
			</Router>
		</FooterStyle>
	);
}

export default Footer;
