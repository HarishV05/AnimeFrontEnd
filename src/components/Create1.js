import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Create1 extends Component {
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
		
		  axios.post('http://127.0.0.1:8080/p', data)
	  };

	render() {
		return (
			<div className="register">
				<form onSubmit={this.handleSubmit}>
					<h2 className='text'>Create Your Favour Anime</h2>
					<div className="serialno">
						<input
							type="number"
							placeholder="ID"
							name="id"
							value={this.state.serialno}
							onChange={this.handleSnoChange }
						/>
					</div>
					<div className="animename">
						<input
							type="text"
							placeholder="animename"
							name="animename"
							value={this.state.animename}
							onChange={this.handleNameChange}
						/>
					</div>

					

					<div className="maincharacter">
						<input
							type="text"
							placeholder="maincharacter"
							name="maincharacter"
							value={this.state.maincharacter}
							onChange={this.handleMcChange}
						/>
					</div>
					<div className="ratings">
						<input
							type="number"
							placeholder="ratings"
							name="ratings"
							value={this.state.ratings}
							onChange={this.handleRatingsChange}
						/>
					</div>
					<button type="submit"> submit </button>
				</form>

				<Link to="/">Go back</Link>
			</div>
		);
	}
}

export default Create1;
