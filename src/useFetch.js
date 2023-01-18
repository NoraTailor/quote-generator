import { useEffect, useState } from 'react';

const url = `https://type.fit/api/quotes`;

const useFetch = () => {
	const [data, setData] = useState([]);
	const [loaded, setLoaded] = useState(false);
	let random = Math.floor(Math.random() * 1641);

	const getQuote = async () => {
		const response = await fetch(url, {
			contentType: 'application/json',
		});
		const data = await response.json();

		setData(data.slice(random, random + 1));
		setLoaded(true);
	};

	useEffect(() => {
		getQuote();
	}, []);

	return { data, getQuote, loaded };
};

export default useFetch;
