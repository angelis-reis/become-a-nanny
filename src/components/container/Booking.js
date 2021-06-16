import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import ProfileImage from '../../utils/ProfileImage.svg';

const BookingStyle = styled.section`
	height: 112px;
	display: flex;
	justify-content: center;
	align-items: center;

	.profile-img {
		width: 56px;
		height: 56px;
		margin-right: 32px;
	}
	
`;

function Booking() {
	return (
		<BookingStyle>
			<Router>
				<img
					className='profile-img'
					src={ProfileImage}
					alt='User Profile'
				/>
				<Link className='action-link' to='/action'>
					<span>See hapu in action (27 seconds)</span>
				</Link>
				<h4>Wednesday, Thursday, Friday - 7:30 - 5:30</h4>
			</Router>
		</BookingStyle>
	);
}
export default Booking;
