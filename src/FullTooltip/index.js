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
import Triangle from './components/Triangle';
import Rectangle from './components/Rectangle';

/**
 * Full-width tooltip.
 * 
 * @param    {object} children Tooltip content
 * @param    {boolean} [display=true] Indicates whether the tooltip should be displayed 
 * @param    {object} [style=null] Custom style
 * @param    {string} [fgColor='rgba(0, 0, 0, 0.7)'] Text color
 */
export default function FullTooltip({ 
  children, 
  display=true, 
  style=null, 
  fgColor='rgba(0, 0, 0, 0.7)' 
}) {

  return (
    <View style={[styles.area, style, {display: display}]}>
      <Triangle fgColor={fgColor} />
      <Rectangle fgColor={fgColor}>
        {children}
      </Rectangle>
    </View>
  );
}
