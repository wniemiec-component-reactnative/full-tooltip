![](https://github.com/wniemiec-component-reactnative/full-tooltip/blob/master/docs/img/logo/logo.jpg)

<h1 align='center'>Full Tooltip</h1>
<p align='center'>Full-width tooltip.</p>
<p align="center">
	<a href="https://github.com/wniemiec-component-reactnative/full-tooltip/actions/workflows/windows.yml"><img src="https://github.com/wniemiec-component-reactnative/full-tooltip/actions/workflows/windows.yml/badge.svg" alt=""></a>
	<a href="https://github.com/wniemiec-component-reactnative/full-tooltip/actions/workflows/macos.yml"><img src="https://github.com/wniemiec-component-reactnative/full-tooltip/actions/workflows/macos.yml/badge.svg" alt=""></a>
	<a href="https://github.com/wniemiec-component-reactnative/full-tooltip/actions/workflows/ubuntu.yml"><img src="https://github.com/wniemiec-component-reactnative/full-tooltip/actions/workflows/ubuntu.yml/badge.svg" alt=""></a>
	<a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/React Native-0.60+-D0008F.svg" alt="React Native compatibility"></a>
	<a href="https://www.npmjs.com/package/@wniemiec-component-reactnative/full-tooltip"><img src="https://img.shields.io/npm/v/@wniemiec-component-reactnative/full-tooltip" alt="Release"></a>
	<a href="https://github.com/wniemiec-component-reactnative/full-tooltip/blob/master/LICENSE"><img src="https://img.shields.io/github/license/wniemiec-component-reactnative/full-tooltip" alt="License"></a>
</p>
<hr />

## ❇ Introduction
React Native component that displays a full-width tooltip, being possible to be personalized.

## 🖼 Gallery

<div style="display: flex; flex-direction: row; justify-content: center; align-items: center; flex-wrap: wrap"
<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-reactnative/full-tooltip/master/docs/img/screens/img1.png" alt="image 1" />

<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-reactnative/full-tooltip/master/docs/img/screens/img2.png" alt="image 2" />

<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-reactnative/full-tooltip/master/docs/img/screens/img3.png" alt="image 3" />

<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-reactnative/full-tooltip/master/docs/img/screens/img4.png" alt="image 4" />
</div>

## ❓ How to use
1. Install the component
```
$ npm install --save @wniemiec-component-reactnative/full-tooltip
```

2. Import the component
```
import FullTooltip from '@wniemiec-component-reactnative/full-tooltip';
```

3. Use it
```
[...]

import React, { useState } from 'react';
import { View } from 'react-native;

[...]

const image = { uri: "https://reactjs.org/logo-og.png" };

[...]

<SafeAreaView style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <ImageBackground source={image} resizeMode="cover" style={{flex: 1, width: '100%',justifyContent: "center"}}>
  
  <FullTooltip style={{marginTop: 310}}>
	<Text style={{color: 'white'}}>Some text</Text>
  </FullTooltip>
  
  </ImageBackground>
</SafeAreaView>

[...]
```

## 📖 Documentation
|        Property        |Type|Description|Default|
|----------------|-------------------------------|-----------------------------|--------|
|display |`boolean`|Tooltip content | `true` |
|style |`bool`|Custom style | `null` |
|bgColor |`string`|Background color  |`"rgba(0, 0, 0, 0.7)"`|

## 🚩 Changelog
Details about each version are documented in the [releases section](https://github.com/wniemiec-component-reactnative/full-tooltip/releases).

## 🤝 Contribute!
See the documentation on how you can contribute to the project [here](https://github.com/wniemiec-component-reactnative/full-tooltip/blob/master/CONTRIBUTING.md).

## 📁 Files

### /
|        Name        |Type|Description|
|----------------|-------------------------------|-----------------------------|
|docs |`Directory`|Documentation files|
|src     |`Directory`| Source files|
