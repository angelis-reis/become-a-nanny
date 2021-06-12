import React from 'react';

import styled from 'styled-components';

const BookingStyle = styled.div`
	height: 112px;
	/* width: 1440px; */
	left: 0px;
	top: 0px;
	border-radius: 0px;
	border: 2px solid black;
`;

function Booking() {
	return (
		<BookingStyle>
			<h1>Booking</h1>
		</BookingStyle>
	);
}

export default Booking;
