import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList,
	NavSearch,
	Addition,
	Button
} from './style'

class Header extends Component {
	getListArea() {
		const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handlePageChange} = this.props;
		const jsList = list.toJS();
		const pageList = [];

		if (jsList.length) {
			for (let i = ((page - 1) * 10); i < page *10; i++) {
				if(jsList[i]){
					pageList.push(
						<SearchInfoItem key ={jsList[i]}>{jsList[i]}</SearchInfoItem>
					)
				}
				
			}

		}
		

		if (focused || mouseIn){
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						Trending
						<SearchInfoSwitch
						 onClick={ () => handlePageChange(page, totalPage, this.spinIcon)}
						>
							<span ref={(icon)=>{this.spinIcon = icon}}className="iconfont spin">&#xe851;</span>
							More </SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null;
		}
	}

	render () {
		const { focused, list, handleInputFocus, handleInputBlur } = this.props;
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
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus = {() => handleInputFocus(list)}
								onBlur = {handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<span className={focused ? 'focused iconfont search' : 'iconfont search'}>&#xe6ad;</span>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='compose'>
						<span className="iconfont">&#xe627;</span>
						Compose
					</Button>
					<Button className= 'register'>Register</Button>
				</Addition>
			</HeaderWrapper>
		);
	}
}


//state is passed from store
const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list : state.getIn(['header','list']),
		page: state.getIn(['header','page']),
		mouseIn: state.getIn(['header','mouseIn']),
		totalPage: state.getIn(['header','totalPage'])

	}

}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus (list) {
			if (list.size == 0) {
				dispatch(actionCreators.getList());
			}
			dispatch(actionCreators.searchBarFocus());
		},
		handleInputBlur () {
			dispatch(actionCreators.searchBarBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handlePageChange(page, totalPage, spin){
			let  originAngle = spin.style.transform.replace(/[^0-9]/ig, ''); 
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else{
				originAngle = 0;
			}
			spin.style.transform = 'rotate('+(originAngle + 360)+'deg)'
			if (page < totalPage) {
				dispatch(actionCreators.pageChange(page +1));
			}else{
				dispatch(actionCreators.pageChange(1));
			}
			
		}

	}
}





export default connect(mapStateToProps,mapDispatchToProps)(Header);