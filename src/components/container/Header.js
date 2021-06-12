import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import Badge from '../../utils/Badge.svg';
import Button from '../Button';

const HeaderStyle = styled.div`
	/* background-color: red; */
	position: absolute;
	height: 64px;
	width: 100%;
	border-radius: 0px;
	/* border: 2px solid black; */
	z-index: 99;

	display: grid;
	grid-template-columns: 1fr 1fr;

	.header-link {
		color: #ffffff;
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
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

		/* align-content: flex-end; */
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
						Create Your Nanny Share
					</Link>
					<Link className='header-link' to='/shares'>
						Browse Shares
					</Link>
					<Link className='header-link' to='/story'>
						Our Story
					</Link>
				</div>

				<div className='right-header'>
					<Button title='Become a Nanny Share Host' />
					<Link className='header-link' to='/login'>
						Sign In
					</Link>
				</div>
			</Router>
		</HeaderStyle>
	);
}

export default Header;
