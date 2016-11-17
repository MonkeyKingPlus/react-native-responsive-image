import React, {Component} from "react";
import {View, Image, Text, StyleSheet, Dimensions} from "react-native";
import ResponsiveImage from "./responsiveImage";

export default class APP extends Component {
	constructor(props) {
		super(props);
		this.state = {
			original: {
				width: 0,
				height: 0
			},
			real: {
				width: 0,
				height: 0
			}
		};
	}

	render() {
		return (
			<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
				<Text>Dimensions : {JSON.stringify(Dimensions.get("window"))}</Text>
				<Text>Original Image : {JSON.stringify(this.state.original)}</Text>
				<Image
					source={require("./images/fav.png")}
					onLayout={({nativeEvent})=>{
						this.setState(Object.assign({},this.state,{
							original:{
								width:nativeEvent.layout.width,
								height:nativeEvent.layout.height
							}
						}));
					}}/>
				<Text>Real Image : {JSON.stringify(this.state.real)}</Text>
				<ResponsiveImage
					source={require("./images/fav.png")}
					design={{
						size:{
							width:40,
							height:37
						}
					}}
					onLayout={({nativeEvent})=>{
						 this.setState(Object.assign({},this.state,{
								real:{
									width:nativeEvent.layout.width,
									height:nativeEvent.layout.height
								}
							}));
					}}/>
			</View>
		);
	}
}