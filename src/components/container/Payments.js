import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import ImgSect3 from '../../images/ImageSection3.png';

const PaymentStyle = styled.section`
	display: grid;
	place-items: center;
	height: 632px;
	background: #f2f2f2;

	.Payment-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		width: 1084px;
	}
	.Payment-text {
		display: grid;
		width: 450px;
		grid-template-rows: 64px 224px 24px;
	}
	.Payment-img {
		width: 456px;
		height: 336px;
	}
	.divider {
		width: 784px;
		border-top: solid 2px #dfdfdf;
	}
`;

function Payment() {
	return (
		<PaymentStyle>
			<Router>
				<span className='divider' />
				<div className='Payment-content'>
					<img
						className='Payment-img'
						src={ImgSect3}
						alt='Payments share console'
					/>
					<div className='Payment-text'>
						<h2>Shared payments made simple</h2>
						<p>
							Sometimes it’s hard enough just sharing a restaurant
							bill. Try sharing that bill week in, week out and
							you might encounter more than a few snares. But not
							with Hapu. Simply set your rates and our automated
							payment system takes care of the rest. You need
							never talk money or who owes what.
						</p>
						<Link className='read-link' to='/bridget'>
							<span>
								Read how Bridget’s share (without Hapu) ended
								over $15
							</span>
						</Link>
					</div>
				</div>
			</Router>
		</PaymentStyle>
	);
}
export default Payment;
