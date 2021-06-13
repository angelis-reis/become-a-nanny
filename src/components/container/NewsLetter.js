import React from 'react';

import styled from 'styled-components';
import Button from '../Button';


const NewsLetterStyle = styled.div`
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
	}

	.form-fields {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

function NewsLetter() {
	return (
		<NewsLetterStyle>
			<span className='divider'/>
			<h3>Are you a parent without a nanny and looking to share?</h3>
			<span>
				Leave us your name and email and we’ll update you as soon as a
				share becomes available in your area!
			</span>
			<div className='form-fields'>
				<h4>Your name</h4>
				<h4>Your email</h4>
				<Button title='Send' />
			</div>
		</NewsLetterStyle>
	);
}

export default NewsLetter;
