import React from 'react';

import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const FrameworkStyle = styled.div`
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

	.framework-text{
		width:784px;
	}
`;

function Framework() {
	return (
		<FrameworkStyle>
			<Router>
				<span className='divider' />
				<h2>A framework built for the long term </h2>
				<p className='framework-text'>
					Childcare is for the long term. And you need a framework you
					can count on that gives your share long term viability and
					success. That’s why we’ve defined Hapu around our three
					tribal principles; clearly defined process, transparency
					over money and equality of participation.
				</p>
				<Link className='read-link' to='/bridget'>
					<span>
						Read how Bridget’s share (without Hapu) ended over $15
					</span>
				</Link>
			</Router>
		</FrameworkStyle>
	);
}

export default Framework;
