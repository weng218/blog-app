import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	title: 'Trump denies NYT story on Pence, Electoral College',
	content: '<img src="https://thehill.com/sites/default/files/styles/thumb_opinion/public/trumpdonald_01042020getty.jpg?itok=sEqEZnYR" /><p><b>President Trump on Tuesday night denied a story in The New York Times that Vice President Pence informed him he does not have the power to block the certification of Electoral College results.</b></p><p>President Trump on Tuesday night denied a story in The New York Times that Vice President Pence informed him he does not have the power to block the certification of Electoral College results.</p><p>President Trump on Tuesday night denied a story in The New York Times that Vice President Pence informed him he does not have the power to block the certification of Electoral College results.</p><p>President Trump on Tuesday night denied a story in The New York Times that Vice President Pence informed him he does not have the power to block the certification of Electoral College results.</p>'
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_DETAIL:
			return state.merge({
				title: action.title,
				content: action.content
			})
		default:
			return state;
	}	
}