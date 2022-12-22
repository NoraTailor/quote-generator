import React from 'react';
import styled from 'styled-components';

export default function Quotes({ quotes }) {
	return (
		<Wrapper>
			<div className='quotes'>
				{quotes.map((item, index) => {
					return (
						<div className='quote ' key={index}>
							<h2>{item.text}</h2>
							<p>{item.author}</p>
						</div>
					);
				})}
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: flex;
	align-items: center;
	margin-top: -2.2rem;
	.quotes {
		width: 60%;
		margin: auto;
		text-align: center;
		justify-content: center;
		border: 1px solid gray;
		border-top: none;
		border-radius: 0 0 24px 24px;
		padding: 2rem;
		background-color: #154c79;
		padding-bottom: 2rem;
	}
`;
