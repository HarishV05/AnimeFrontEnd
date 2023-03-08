import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Crud extends Component {

	render() {
		return (
			
			<div className="register">
			   {/* <h2>serialno</h2><br/><br/><br/><br/>
                        <h2>animename</h2><br/><br/><br/><br/>
                        <h2>maincharacter</h2><br/><br/><br/><br/>
                        <h2>ratings</h2><br/><br/><br/><br/>
                		*/}
                    
				<form className='box1' onSubmit={this.displayLogin}>
					<br></br>
					<h2 className='text'>ANIME</h2>
					<div>
				<Link to="/Create1">
					<input type="submit" value="Create New Anime" /></Link>
				<Link to="/Update">
				<input type="submit" value="Update Anime" />
				</Link>
				<Link to="/Delete">
				<input type="submit" value="Delete" />
				</Link>
				<Link to="/Show">
					<input type="submit" value="See All the DataStored" />
					</Link></div>
				</form>

			</div>
		);
	}
}

export default Crud;
