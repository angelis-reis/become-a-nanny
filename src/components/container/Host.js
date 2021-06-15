import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import styled from 'styled-components';
import ButtonHost from '../../images/Button.png';

const HostStyle = styled.div`
	height: 322px;
	left: 0px;
	top: 0px;
	background: #ffffff;



	.Host-text {
		width: 784px;
	}

	.host-content {
		margin-top: 50px;
		display: grid;
		grid-template-rows: 70px 20px 170px 30px;
		text-align: center;
		place-items: center;
	}
`;

function Host() {
	return (
		<HostStyle>
			<Router>
				<div className='host-content'>
					<h2>Become a nanny share host </h2>
					<p className='Host-text'>
						Takes less than 5 minutes to get started
					</p>
					<Link className='start-link' to='/login'>
						<img
							src={ButtonHost}
							alt='Create a Nanny Share Button'
						/>
					</Link>
					<Link className='start-link' to='/browse'>
						<span>Or browse local nanny-shares</span>
					</Link>
				</div>
			</Router>
		</HostStyle>
	);
}

export default Host;
