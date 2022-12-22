import React from 'react';
import styled from 'styled-components';

const Answer = ({
	count,
	answer,
	generate,
	handleReset,
}) => {
	let number = answer + 1;
	let result = number - count;

	return (
		<Wrapper>
			<div className='answer'>
				{count === 0 ? (
					<h2>You should generate {number} quotes</h2>
				) : result <= 0 ? (
					<h2>I hope this helped.</h2>
				) : (
					<h2>More {result} to go</h2>
				)}
				<button
					disabled={result <= 0}
					className={result ? 'btn' : 'btn-neg'}
					type='button'
					onClick={generate}>
					Generate
				</button>
				{result <= 0 ? (
					<button
						className='btn btn-reset'
						onClick={handleReset}
						type='button'>
						Reset
					</button>
				) : null}
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.section`
	display: flex;
	align-items: center;
	margin-top: -2.2rem;
	.answer {
		width: 60%;
		margin: auto;
		text-align: center;
		justify-content: center;
		border: 1px solid gray;
		border-top: none;
		border-radius: 0 0 24px 24px;
		padding: 2rem;
		background-color: #154c79;
		padding-bottom: 2.2rem;
	}
	.btn {
		padding: 0.5rem;
		border-radius: 6px;
		margin: 1rem;
		border: none;
		font-weight: bold;
	}

	.btn:hover {
		background-color: gray;
		color: white;
	}

	.btn-neg {
		opacity: 0.5;
		padding: 0.5rem;
		border-radius: 6px;
		margin: 1rem;
		border: none;
		font-weight: bold;
	}
`;

export default Answer;
