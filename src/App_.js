import { useState } from 'react';

import SearchInput from './components/SearchInput/SearchInput';

function App() {
	const [state, setState] = useState('');

	async function fetchNumbersApi(event) {
		const result = await fetch(`http://numbersapi.com/${event.target.value}`);
		const data = await result.text();
		setState(data);
	}

	return (
		<div style={{ display: 'grid', placeItems: 'center' }}>
			<h1>Exemplo Debounce</h1>
			<SearchInput onChange={fetchNumbersApi} />
			<h3>{Boolean(state) ? state : '...'}</h3>
		</div>
	);
}

export default App;
