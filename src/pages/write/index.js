import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class Write extends Component {
	render() {
		const { loginStatus } = this.props;

		if(loginStatus) {
			return (
				<div>Write Article</div>
			)
		}else{
			return <Redirect to='/login'/>
		} 
		
	}

}
const mapState = (state) => ({ 
	loginStatus: state.getIn(['login','login'])
});




export default connect(mapState,null)(Write);