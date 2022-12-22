import React, { useState } from 'react';

import Answer from './Answer';
import Question from './Question';
import Quotes from './Quotes';
import useFetch from './useFetch';

function App() {
	const [answer, setAnswer] = useState(0);
	const [quotes, setQuotes] = useState([]);
	const { data } = useFetch();
	const [isClicked, setIsClicked] = useState(false);
	const [count, setCount] = useState(0);
	const [isGenerated, setIsGenerated] = useState(false);

	const handleValue = (e) => {
		const path = e.currentTarget.dataset.type;
		setAnswer(parseInt(path));
		setIsClicked(true);
	};

	const generate = () => {
		setIsGenerated(true);
		setCount(count + 1);
		setQuotes(data);
	};

	const handleReset = () => {
		setAnswer(0);
		setCount(0);
		setIsClicked(false);
		setIsGenerated(false);
	};

	return (
		<>
			<Question
				handleValue={handleValue}
				answer={answer}></Question>
			{isClicked && (
				<Answer
					count={count}
					answer={answer}
					generate={generate}
					handleReset={handleReset}></Answer>
			)}
			{isGenerated && <Quotes quotes={quotes}></Quotes>}
		</>
	);
}

export default App;
