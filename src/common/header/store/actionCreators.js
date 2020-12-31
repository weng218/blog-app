import * as constants from './constants';
import { fromJS } from 'immutable'
import axios from 'axios';

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length /10)

});

export const searchBarFocus = () => ({
	type: constants.SEARCH_BAR_FOCUS
});

export const searchBarBlur = () => ({
	type: constants.SEARCH_BAR_BLUR
});

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const pageChange = (page) => ({
	type: constants.PAGE_CHANGE,
	page
});

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
			const data = res.data;
			dispatch(changeList(data.data));
		}).catch(() => {
			console.log('error')
		})
	}
}