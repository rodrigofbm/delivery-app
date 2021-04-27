import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { labels, SelectStoreItemSelected } from '../../commom/colors';

const StyledInput = ({
  placeholder,
  value,
  keyboardType = 'default',
  autoCapitalize = 'none',
  onChange,
  iconName,
  iconColor = '#f8f8ff',
  iconSize = 36,
  secureTextEntry = false,
}) => {
  return (
    <View
      style={{flexDirection: 'row', backgroundColor: SelectStoreItemSelected, marginTop: 12}}>
      <View
        style={{
          flex: 1,
          backgroundColor: labels,
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name={iconName} color={iconColor} size={iconSize} />
      </View>

      <View style={{flex: 5}}>
        <TextInput
          style={{color: '#FFF'}}
          keyboardType={keyboardType}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          placeholderTextColor="#FFF"
          value={value}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default StyledInput;
