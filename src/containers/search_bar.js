import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component{

	constructor(props){
		super(props)

		this.state = { term: ''}

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({term: event.target.value})
	}

	onFormSubmit(event){
		event.preventDefault();
		// TODO: go fetch weather data.

		this.props.fetchWeather(this.state.term); 

		// Clears the field after the submit has ran
		this.setState({term:''});
	}
	render(){
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather }, dispatch);
}
// The null means we don't need any state here hence the absence of mapStateToProps
export default connect(null, mapDispatchToProps)(SearchBar);