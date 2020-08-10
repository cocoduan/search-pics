import React, { useState } from 'react';

const SearchBar = (props) => {
	const [term, setTerm] = useState('');
	const onInputChange = (event) => {
		setTerm(event.target.value);
	}
	const onFormSubmit = (event) => {
		// keep the browser from page refreshing when pressing enter
		event.preventDefault();
		props.onSubmit(term);
	}
	return (
		<div className="ui segment">
			<form className="ui form" onSubmit={onFormSubmit}>
				<div className="field">
					<label>Image Search</label>
					<input type="text" value={term} onChange={onInputChange}></input>
				</div>
			</form>
		</div>
	)
}

export default SearchBar;