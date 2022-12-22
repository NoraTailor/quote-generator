import React from 'react';
import {
	CiFaceFrown,
	CiFaceMeh,
	CiFaceSmile,
} from 'react-icons/ci';
import styled from 'styled-components';

export default function Question({ handleValue, answer }) {
	return (
		<Wrapper>
			<div className='question'>
				<h2>
					Hi, this app helps you to feel better today.
				</h2>
				<h1>How do you feel yourself today?</h1>
				<h3>Please select one</h3>
				<div className='btn-container'>
					<button
						data-type='3'
						onClick={handleValue}
						className={
							answer === 3 ? 'icon icon-active' : 'icon'
						}>
						<CiFaceFrown />
					</button>
					<button
						data-type='2'
						onClick={handleValue}
						className={
							answer === 2 ? 'icon icon-active' : 'icon'
						}>
						<CiFaceMeh />
					</button>
					<button
						data-type='1'
						onClick={handleValue}
						className={
							answer === 1 ? 'icon icon-active' : 'icon'
						}>
						<CiFaceSmile />
					</button>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: flex;
	align-items: center;
	margin-top: 8rem;

	.question {
		width: 60%;
		margin: auto;
		text-align: center;
		justify-content: center;
		border: 1px solid grey;
		border-radius: 24px;
		padding: 2rem;
		background-color: #154c79;
		padding-bottom: 2rem;
	}

	h1 {
		font-size: 1.5rem;
		font-style: italic;
		font-weight: bold;
	}

	h2 {
		font-size: 1.1rem;
	}

	h3 {
		font-size: 1rem;
	}

	.btn-container {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	button {
		border: none;
		background-color: white;
		border-radius: 6px;
		color: black;
		display: flex;
		align-items: center;
	}

	button:hover,
	.icon-active {
		background-color: #379683;
		color: #edf5e1;
	}

	.icon {
		font-size: 3rem;
	}
`;
