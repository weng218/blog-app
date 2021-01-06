import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList
})

const addHomeList = (list, nextPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list,
	nextPage
})

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res)=>{
			const result = res.data.data;
			dispatch(changeHomeData(result));
		});
	}
}


export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/moreHomeList.json?page='+ page).then((res) => {
			const result = res.data.data.articleList;
			dispatch(addHomeList(result, page+1));
		})
	}
}

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP_SHOW,
	show
})