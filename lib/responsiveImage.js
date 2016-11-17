import React, {Component, PropTypes} from "react";
import {
	Image
} from "react-native";
import styleHelper from "mkp-react-native-style-helper";

export default class ResponsiveImage extends Component {
	static propTypes = {
		...Image.propTypes,
		design: PropTypes.shape({
			density: PropTypes.number,
			screen: PropTypes.shape({
				width: PropTypes.number,
				height: PropTypes.number
			}),
			size: PropTypes.shape({
				width: PropTypes.number.isRequired,
				height: PropTypes.number.isRequired
			}).isRequired
		})
	}
	static defaultProps = {
		...Image.defaultProps,
		design: {
			density: 2,
			screen: {
				width: 375,
				height: 667
			}
		}
	}

	get design(){
		return Object.assign({},this.props.design,{
			density:2,
			screen:{
				width:375,
				height:667
			}
		})
	}

	render() {
		let props = Object.assign({}, this.props);
		delete props.design;
		if (props.style) {
			if (!(props.style instanceof Array)) {
				props.style = [props.style];
			}
		}
		else {
			props.style = [];
		}
		props.style.push({
			width: styleHelper.getResponsiveValue(this.design.size.width, this.design.density, this.design.screen.width),
			height: styleHelper.getResponsiveValue(this.design.size.height, this.design.density, this.design.screen.width)
		})

		return (
			<Image {...props}/>
		);
	}
}