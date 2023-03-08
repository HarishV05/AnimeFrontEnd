import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Delete extends Component {
	constructor(props) {
		super(props);

		this.state = {
			serialno:'',
			animename: '',
			maincharacter: '',
			ratings: '',
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
			serialno:'',
			animename: '',
			maincharacter: '',
			ratings: ''
	
		});
	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2 className='text'>Delete Anime</h2>
					<div className="serialno">
						<input
							type="number"
							placeholder="serialno"
							name="serialno"
							value={this.state.SerialNo}
							onChange={this.update}
						/>
					</div>
					
					<input type="submit" value="Delete" />
				</form>

				<Link to="/">Go back</Link>
			</div>
		);
	}
}

export default Delete;