import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_BAR_FOCUS :
			//immutable object set function returns new object
			//it won't chnage the old state  
			return state.set('focused', true);
		case constants.SEARCH_BAR_BLUR :
			return state.set('focused', false);
		case constants.CHANGE_LIST : 
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
		case constants.MOUSE_ENTER : 
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE : 
			return state.set('mouseIn', false);
		case constants.PAGE_CHANGE : 
			return state.set('page', action.page);
		default:
			return state;
	}	
}