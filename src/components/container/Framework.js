import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const FrameworkStyle = styled.section`
	height: 380px;
	background: #f2f2f2;
	display: grid;
	justify-items: center;

	.divider {
		width: 784px;
		border-top: solid 2px #dfdfdf;
	}
	.framework-text {
		width: 784px;
	}
	.framework-content {
		text-align: center;
	}
	h2 {
		margin-top: 96px;
	}
	p {
		margin-top: 40px;
		margin-bottom: 40px;
	}
	.read-link span {
		color: #5e20a4;
		text-decoration: underline;
		text-decoration-color: #5e20a4;
	}
`;

function Framework() {
	return (
		<FrameworkStyle>
			<Router>

				<div className='framework-content'>

					<h2>A framework built for the long term </h2>
					<p className='framework-text'>
						Childcare is for the long term. And you need a framework
						you can count on that gives your share long term
						viability and success. That’s why we’ve defined Hapu
						around our three tribal principles; clearly defined
						process, transparency over money and equality of
						participation.
					</p>
					<Link className='read-link' to='/bridget'>
						<span>
							Read how Bridget’s share (without Hapu) ended over
							$15
						</span>
					</Link>
				</div>
			</Router>
		</FrameworkStyle>
	);
}
export default Framework;
