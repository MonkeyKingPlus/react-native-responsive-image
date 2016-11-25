# react-native-responsive-image

<!-- badge -->
[![npm version](https://img.shields.io/npm/v/mkp-react-native-responsive-image.svg)](https://www.npmjs.com/package/mkp-react-native-responsive-image)
[![npm license](https://img.shields.io/npm/l/mkp-react-native-responsive-image.svg)](https://www.npmjs.com/package/mkp-react-native-responsive-image)
[![npm download](https://img.shields.io/npm/dm/mkp-react-native-responsive-image.svg)](https://www.npmjs.com/package/mkp-react-native-responsive-image)
[![npm download](https://img.shields.io/npm/dt/mkp-react-native-responsive-image.svg)](https://www.npmjs.com/package/mkp-react-native-responsive-image)
<!-- endbadge -->

React Native Responsive Image

<img style="width:320;height:480;display:inline-block;" src="https://raw.githubusercontent.com/MonkeyKingPlus/react-native-responsive-image/master/screencapture/responsive-image-screencapture-iphone4s.png"/>
<img style="width:320;height:480;display:inline-block;" src="https://raw.githubusercontent.com/MonkeyKingPlus/react-native-responsive-image/master/screencapture/responsive-image-screencapture-iphone5s.png"/>
<img style="width:320;height:480;display:inline-block;" src="https://raw.githubusercontent.com/MonkeyKingPlus/react-native-responsive-image/master/screencapture/responsive-image-screencapture-iphone6.png"/>
<img style="width:320;height:480;display:inline-block;" src="https://raw.githubusercontent.com/MonkeyKingPlus/react-native-responsive-image/master/screencapture/responsive-image-screencapture-iphone6splus.png"/>
<img style="width:320;height:480;display:inline-block;" src="https://raw.githubusercontent.com/MonkeyKingPlus/react-native-responsive-image/master/screencapture/responsive-image-screencapture-nex.png"/>

# Install
```bash
$ npm install mkp-react-native-responsive-image --save
```

# Support
ios/android

# Quick Start
```javascript
<ResponsiveImage
    //you best provide a 3x image or higher.
    source={require("./images/fav.png")}
    //default design size is 375 x 667 , density is 2
    design={{
        size:{
            width:40,
            height:37
        }
    }}/>
```
# Props
## image props
[...Image Props](https://facebook.github.io/react-native/docs/image.html)
* defaultSource is supported on IOS/Android
* image cache is supported
## design
```javascript
//define
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
//default
design: {
    density: 2,
    screen: {
        width: 375,
        height: 667
    }
}
```

