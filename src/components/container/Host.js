import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import CalendarIcon from '../../utils/CalendarIcon.svg';

const HostStyle = styled.section`
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
	.host-button {
		width: 304px;
		height: 68px;
		border-radius: 4px;
		border: none;
		background-color: #5e20a4;
		color: #ffffff;
		cursor: pointer;
		display: grid;
		place-items: center;
		grid-template-columns: 70px 1fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
			'calendar-icon button-text'
			'calendar-icon button-subtext';
	}
	.create-link {
		text-decoration: none;
	}
	.host-button span {
		color: #ffffff;
	}
	.calendar-icon {
		grid-area: calendar-icon;
		width: 32px;
		height: 32px;
	}
	.button-text {
		grid-area: button-text;
		font-size: 16px;
		line-height: 28px;
		font-weight: 400;
		justify-self: start;
		align-self: end;
		margin-top: 10px;
	}
	.button-subtext {
		grid-area: button-subtext;
		font-size: 12px;
		line-height: 16px;
		font-weight: 400;
		justify-self: start;
		align-self: start;
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
					<Link className='create-link' to='/login'>
						<div className='host-button'>
							<img
								className='calendar-icon'
								src={CalendarIcon}
								alt='Nanny Share Calendar Button'
							/>
							<span className='button-text'>
								Create your nanny share
							</span>
							<span className='button-subtext'>
								Takes less than 5 minutes
							</span>
						</div>
					</Link>
					<Link to='/browse'>
						<span>Or browse local nanny-shares</span>
					</Link>
				</div>
			</Router>
		</HostStyle>
	);
}
export default Host;
