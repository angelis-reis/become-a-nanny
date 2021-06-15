import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '../Button';

const NewsLetterStyle = styled.div`
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
		padding-left: 20px;
	}
`;

function NewsLetter() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

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
							<input type='submit'></input>
						</Button>
					</form>
				</div>
			</div>
		</NewsLetterStyle>
	);
}

export default NewsLetter;
