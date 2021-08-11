/**
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Triangle from '../components/Triangle';
import Rectangle from '../components/Rectangle';

/**
 * Full-width tooltip.
 * 
 * @param    {object} children Tooltip content
 * @param    {boolean} [display=true] Indicates whether the tooltip should be displayed 
 * @param    {object} [style=null] Custom style
 * @param    {string} [bgColor='rgba(0, 0, 0, 0.7)'] Background color
 */
export default function FullTooltip({ 
  children, 
  display=true, 
  style=null, 
  bgColor='rgba(0, 0, 0, 0.7)' 
}) {

  return (
    <View style={[styles.area, style, !display ? styles.hide : null]}>
      <Triangle bgColor={bgColor} />
      <Rectangle bgColor={bgColor}>
        {children}
      </Rectangle>
    </View>
  );
}
