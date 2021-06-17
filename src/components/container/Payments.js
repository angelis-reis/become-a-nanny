import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import ImgSect3 from '../../images/ImageSection3.png';

const PaymentStyle = styled.section`
	display: grid;
	/* place-items: center; */
	justify-items: center;
	height: 528px;
	background: #f2f2f2;

	.Payment-content {
		margin-top: 104px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 44px;
		width: 984px;
	}
	.Payment-text {
		width: 450px;
	}
	.Payment-text h2 {
		margin-bottom: 40px;
	}
	.Payment-text p {
		margin-bottom: 40px;
	}
	.Payment-img {
		width: 456px;
		height: 336px;
		justify-self: end;
	}
	.read-link span {
		color: #5e20a4;
		text-decoration: underline;
		text-decoration-color: #5e20a4;
	}
	.divider {
		width: 784px;
		border-top: solid 2px #dfdfdf;
		align-self: end;
	}
`;

function Payment() {
	return (
		<PaymentStyle>
			<Router>
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
				<span className='divider' />
			</Router>
		</PaymentStyle>
	);
}
export default Payment;
