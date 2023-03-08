import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Update extends Component {
	constructor(props) {
		super(props);

		this.state = {
			serialno:'',
			animename: '',
			maincharacter: '',
			ratings: ''
		};
	}
	handleSnoChange = (event) => {
		this.setState({ serialno: event.target.value });
	  };
	
	  handleNameChange = (event) => {
		this.setState({ animename: event.target.value });
	  };
	
	  handleMcChange = (event) => {
		this.setState({ maincharacter: event.target.value });
	  };
	
	  handleRatingsChange = (event) => {
		this.setState({ ratings: event.target.value });
	  };
	
	  
	
	  handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			serialno: this.state.serialno,
			animename: this.state.animename,
			maincharacter: this.state.maincharacter,
			ratings: this.state.ratings,
			
		  };
		
		  axios.put('http://127.0.0.1:8080/u', data)
	  };


	render() {
		return (
			<div className="register">
				<form onSubmit={this.handleSubmit}>
					<h2 className='text'>Update Anime</h2>
					<div className="SerialNo">
						<input
							type="number"
							placeholder="SerialNo"
							name="SerialNo"
							value={this.state.serialno}
							onChange={this.handleSnoChange}
						/>
					</div>
					<div className="AnimeName">
						<input
							type="text"
							placeholder="AnimeName"
							name="AnimeName"
							value={this.state.animename}
							onChange={this.handleNameChange}
						/>
					</div>

					

					<div className="MainCharacter">
						<input
							type="text"
							placeholder="MainCharacter"
							name="MainCharacter"
							value={this.state.maincharacter}
							onChange={this.handleMcChange}
						/>
					</div>
					<div className="Ratings">
						<input
							type="number"
							placeholder="Ratings"
							name="Ratings"
							value={this.state.ratings}
							onChange={this.handleRatingsChange}
						/>
					</div>
					<input type="submit" value="Update" />
				</form>

				<Link to="/">Go back</Link>
			</div>
		);
	}
}

export default Update;
