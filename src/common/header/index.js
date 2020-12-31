import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	Addition,
	Button
} from './style'

class Header extends Component {
	constructor(props) {
		super(props);
		this.state ={
			focused: false
		}
		this.handleInputFocus = this.handleInputFocus.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
	}
	render() {
		return (
			<HeaderWrapper>
				<Logo href='/'/>
				<Nav>
					<NavItem className= 'left active'>Home</NavItem>
					<NavItem className= 'left'>Download App</NavItem>
					<NavItem className= 'right'>Login</NavItem>
					<NavItem className= 'right'>Aa</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={this.state.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.state.focused ? 'focused' : ''}
								onFocus = {this.handleInputFocus}
								onBlur = {this.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<span className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe6ad;</span>
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='compose'>
						<span class="iconfont">&#xe627;</span>
						Compose
					</Button>
					<Button className= 'register'>Register</Button>
				</Addition>
			</HeaderWrapper>
		);
	}
	handleInputFocus() {
		this.setState({
			focused: true
		})
	}
	handleInputBlur() {
		this.setState({
			focused: false
		})
	}

}

export default Header;