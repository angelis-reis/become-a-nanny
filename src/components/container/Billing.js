import React from 'react';
import styled from 'styled-components';
import ImgSect4 from '../../images/ImageSection4.png';

const BillingStyle = styled.section`
	height: 496px;
	background: #f2f2f2;
	display: grid;
	justify-items: center;

	.divider {
		width: 784px;
		border-top: solid 2px #dfdfdf;
		align-self: end;
	}
	img {
		width: 984px;
		height: 392px;
	}
`;

function Billing() {
	return (
		<BillingStyle>
			<img src={ImgSect4} alt='Billing Dashboard' />
			<span className='divider' />
		</BillingStyle>
	);
}
export default Billing;
