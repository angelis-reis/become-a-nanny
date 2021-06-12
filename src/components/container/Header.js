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
		align-self: center;
		margin-left: 20px;
		margin-right: 20px;
	}

	.left-header {
		display: flex;
	}

	.right-header {
		display: flex;
		align-self: center;
		justify-content: flex-end;
		margin-right: 12px;
	}
`;
function Header() {
	return (
		<HeaderStyle>
			<Router>
				<div className='left-header'>
					<Link className='header-link' to='/'>
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
					<Button title='Become a Nanny Share Host' />
					<Link className='header-link' to='/login'>
						<h5>Sign In</h5>
					</Link>
				</div>
			</Router>
		</HeaderStyle>
	);
}

export default Header;
