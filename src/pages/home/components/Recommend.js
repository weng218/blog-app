import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends Component {
	render() {
		return (
			<RecommendWrapper>
				<RecommendItem color='#fb8500' >7 Day Top</RecommendItem>
				<RecommendItem color='#ffb703'>30 Day Top</RecommendItem>
				<RecommendItem color='#023047'>Editor's Choice</RecommendItem>
				<RecommendItem color='#219ebc'>Copyright</RecommendItem>
				<RecommendItem color='#8ecae6'>Tutorial</RecommendItem>
			</RecommendWrapper>
		)
	}
}

export default Recommend;