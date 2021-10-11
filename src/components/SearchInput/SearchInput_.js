const SearchInput = ({ onChange }) => {
	return (
		<div>
			<input type="number" defaultValue={0} onChange={onChange} />
		</div>
	);
};

export default SearchInput;
