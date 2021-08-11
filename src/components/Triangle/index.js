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

export default function Triangle({ bgColor }) {
  return (
    <View style={[styles.triangle, { borderBottomColor: bgColor }]}>
    </View>
  );
}