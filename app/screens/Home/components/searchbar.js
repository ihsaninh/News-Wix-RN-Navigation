import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from '../home.style';

const Searchbar = ({ title, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.searchWrap}>
        <Text style={styles.searchText}>{title}</Text>
        <Icon name="magnify" color="#aaa" size={22} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export { Searchbar };
