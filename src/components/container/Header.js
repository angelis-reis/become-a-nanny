import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import Badge from '../../utils/Badge.svg';
import Button from '../Button';

const HeaderStyle = styled.div`
	position: absolute;
	height: 64px;
	width: 100%;
	border-radius: 0px;
	z-index: 99;
	display: grid;
	grid-template-columns: 1fr 1fr;

	.header-link {
		color: #ffffff;
		text-align: center;
		text-decoration: none;
		margin-right: 32px;
		margin-top: 28px;
	}
	.badge {
		width: 48px;
		height: 64px;
		margin-left: 20px;
		margin-right: 40px;
	}
	.left-header {
		display: flex;
	}
	.right-header {
		display: flex;
		justify-content: flex-end;
		margin-right: 32px;
	}
	.header-button {
		display: grid;
		place-items: center;
		margin-top: 16px;
		height: 44px;
		width: 234px;
		border-radius: 4px;
		border: none;
		background-color: #00a870;
		color: #ffffff;
		text-decoration: none;
		cursor: pointer;
	}
	.sign-in {
		margin-left: 23px;
		margin-top: 28px;
	}
`;
function Header() {
	return (
		<HeaderStyle>
			<Router>
				<div className='left-header'>
					<Link className='badge' to='/'>
						<img src={Badge} alt='Badge' />
					</Link>
					<Link className='header-link' to='/nanny'>
						<h5>Create Your Nanny Share</h5>
					</Link>
					<Link className='header-link' to='/shares'>
						<h5>Browse Shares</h5>
					</Link>
					<Link className='header-link' to='/story'>
						<h5>Our Story</h5>
					</Link>
				</div>
				<div className='right-header'>
					<button type='button' className='header-button'>
						<h5>Become a Nanny Share Host</h5>
					</button>
					<Link className='header-link sign-in' to='/login'>
						<h5>Sign In</h5>
					</Link>
				</div>
			</Router>
		</HeaderStyle>
	);
}
export default Header;
