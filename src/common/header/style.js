import styled from 'styled-components';
import logoPic from '../../statics/blog-logo.svg'

export const HeaderWrapper = styled.div`
	position: relative;
	height: 50px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 50px;
	height: 50px;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	padding-right: 80px;
	box-sizing: border-box;
	margin: 0 auto;
`;

export const NavItem = styled.div`
	line-height: 50px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float:left;
	}
	&.right {
		float:right;
		color: #969696
	}
	&.active {
		color: #FFC107;
	}

`;

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.iconfont {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}

`;

export const NavSearch = styled.input.attrs({
	placeholder: 'Search'
})`
	width: 160px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-top: 6px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused{
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 50px;
`;

export const Button = styled.div`
	float: right;
	margin-top: 6px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #FFC107;
	font-size: 14px;
	&.register {
		color: #FFC107;
	}
	&.compose{
		color: #fff;
		background: #FFC107;
	}
`;












