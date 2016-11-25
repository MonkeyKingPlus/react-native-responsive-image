import React, {Component, PropTypes} from "react";
import {
	Image,
	Dimensions,
	PixelRatio,
	Platform
} from "react-native";

const deviceSize = Dimensions.get("window");

function rv(value: Number, designScreenWidth: Number) {
	let rate = deviceSize.width / designScreenWidth;
	return PixelRatio.roundToNearestPixel(value * rate);
}

export default class ResponsiveImage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// 1: show default image
			// 2: show target image
			status: 1
		};
	}

	componentDidMount() {
		if (this.isRemoteSource(this.props.source)) {
			this.preFetchImage(this.props.source.uri);
		}
	}

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

	get design() {
		return Object.assign({}, this.props.design, {
			density: 2,
			screen: {
				width: 375,
				height: 667
			}
		})
	}

	buildGeneralProps() {
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
			width: rv(this.design.size.width, this.design.screen.width),
			height: rv(this.design.size.height, this.design.screen.width)
		});
		return props;
	}

	get propsOfDefault() {
		let props = this.buildGeneralProps();
		if(this.isRemoteSource(props.source)){
			if (props.defaultSource) {
				props.source = props.defaultSource;
				delete props.defaultSource;
			}
		}
		return props;
	}

	get propsOfTarget() {
		let props = this.buildGeneralProps();
		delete props.defaultSource;
		return props;
	}

	isRemoteSource(source) {
		if (source instanceof Object) {
			return true;
		}
		return false;
	}

	isAvailableImage(uri){
		return /gif$|png$|jpg$|jpeg$|bmp$|tiff$|svg$/i.test(uri)
	}

	preFetchImage(url) {
		Image.prefetch(url).then(()=> {
			//success
			if(this.isAvailableImage(url)) {
				this.setState(Object.assign({}, this.state, {
					status: 2
				}));
			}
		}, err=> {
			//error
		})
	}

	render() {
		if (this.state.status === 1) {
			return (
				<Image {...this.propsOfDefault}>
					{this.props.children}
				</Image>
			);
		}
		return (
			<Image {...this.propsOfTarget}>
				{this.props.children}
			</Image>
		);
	}
}