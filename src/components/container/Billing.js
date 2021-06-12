import React from 'react';

import styled from 'styled-components';
import ImgSect3 from '../../images/ImageSection4.png';

const BillingStyle = styled.div`
	height: 496px;
	/* width: 1440px; */
	left: 0px;
	top: 0px;
	border-radius: 0px;
	border: 2px solid black;
	background: #f2f2f2;
`;

function Billing() {
	return (
		<BillingStyle>
			<img src={ImgSect3} alt='Billing Dashboard' />
		</BillingStyle>
	);
}

export default Billing;
