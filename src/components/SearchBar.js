import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };
	onInputChange = (event) => {
		const term = event.target.value;
		this.setState({ term });
	}
	onFormSubmit = (event) => {
		// keep the browser from page refreshing when pressing enter
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	}
	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Image Search</label>
						<input type="text" value={this.state.term} onChange={this.onInputChange}></input>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;