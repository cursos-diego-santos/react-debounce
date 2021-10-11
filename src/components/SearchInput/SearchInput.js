import { useState } from 'react';

import useDebounce from '../../hooks/useDebounce';

const defaultValue = 0;

const SearchInput = ({ onChange }) => {
	const [displayValue, setDisplayValue] = useState(defaultValue);

	const debouncedChange = useDebounce(onChange, 500);

	function handleChange(event) {
		setDisplayValue(event.target.value);
		debouncedChange(event);
	}

	return (
		<div>
			<input
				type="number"
				value={displayValue}
				defaultValue={defaultValue}
				onChange={handleChange}
			/>
		</div>
	);
};

export default SearchInput;
