import React from 'react';

import styled from 'styled-components';

const PaymentStyle = styled.div`
	height: 528px;
	/* width: 1440px; */
	left: 0px;
	top: 0px;
	border-radius: 0px;
	border: 2px solid black;
	background: #f2f2f2;
`;

function Payment() {
	return (
		<PaymentStyle>
			<h1>Payment</h1>
		</PaymentStyle>
	);
}

export default Payment;
