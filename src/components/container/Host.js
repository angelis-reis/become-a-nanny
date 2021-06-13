import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import styled from 'styled-components';
import ButtonHost from '../../images/Button.png';

const HostStyle = styled.div`
	height: 322px;
	left: 0px;
	top: 0px;
	background: #ffffff;

	display: grid;
	grid-template-rows: 35px 40px 50px;
	text-align: center;
	place-items: center;

	.divider {
		width: 784px;
		border-top: solid 2px #dfdfdf;
		/* padding-bottom: 64px; */
	}

	.Host-text {
		width: 784px;
	}
`;

function Host() {
	return (
		<HostStyle>
			<Router>
				<h2>Become a nanny share host </h2>
				<p className='Host-text'>
					Takes less than 5 minutes to get started
				</p>
				<Link className='start-link' to='/login'>
					<img src={ButtonHost} alt='Create a Nanny Share Button' />
				</Link>

				<Link className='start-link' to='/browse'>
					<span>Or browse local nanny-shares</span>
				</Link>
			</Router>
		</HostStyle>
	);
}

export default Host;
