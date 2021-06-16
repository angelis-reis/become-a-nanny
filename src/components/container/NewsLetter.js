import React, { useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '../Button';

const NewsLetterStyle = styled.section`
	height: 322px;
	left: 0px;
	top: 0px;
	background: #f2f2f2;

	.divider {
		width: 784px;
		border-top: solid 2px #dfdfdf;
	}
	.form-fields {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.newsletter-content {
		display: grid;
		grid-template-rows: 40px 100px 70px 130px;
		text-align: center;
		place-items: center;
	}
	.form-field {
		width: 232px;
		height: 48px;
		border-radius: 4px;
		border: 1px solid #dfdfdf;
		margin-right: 12px;
		padding-left: 20px;
	}
	.form-field::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		padding-left: 20px;
	}
	.form-field::-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		padding-left: 20px;
	}
	.form-field:-ms-input-placeholder {
		/* Microsoft Edge */
		padding-left: 20px;
	}
`;

function NewsLetter() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const newsLetterPost = async (data) => {
		try {
			const resp = await axios.post(
				'https://api.jungledevs.com/api/v1/challenge-newsletter/',
				data
			);
			console.log('Data post: ', data);
			console.log(resp.data);

			alert('Newsletter signed.');
		} catch (err) {
			console.error(err);
		}
	};

	const onSubmit = (data) => {
		console.log(errors);
		newsLetterPost(data);
	};

	return (
		<NewsLetterStyle>
			<div className='newsletter-content'>
				<span className='divider' />
				<h3>Are you a parent without a nanny and looking to share?</h3>
				<span>
					Leave us your name and email and we’ll update you as soon as
					a share becomes available in your area!
				</span>
				<div className='form-fields'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							className='form-field'
							type='text'
							placeholder='Your name'
							{...register('name', {
								required: true,
								max: 30,
								min: 3,
								maxLength: 80
							})}
						/>
						<input
							className='form-field'
							type='email'
							placeholder='Your email'
							{...register('email', {
								required: true,
								pattern: /^\S+@\S+$/i
							})}
						/>
						<Button title='Send'>
							<input type='submit' />
						</Button>
					</form>
				</div>
			</div>
		</NewsLetterStyle>
	);
}
export default NewsLetter;
