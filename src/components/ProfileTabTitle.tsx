import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {horizontalScale, scaleFontSize} from '../helpers/scaling';

interface IProfileTabProps {
  title: string;
  isFocused: boolean;
}
export default function ProfileTabTitle(props: IProfileTabProps) {
  return (
    <Text style={props.isFocused ? styles.text : styles.textNotFocused}>
      {props.title}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#022150',
    fontFamily: 'InterTight',
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    padding: horizontalScale(12),
  },
  textNotFocused: {
    color: '#79869F',
    fontFamily: 'InterTight',
    fontWeight: '400',
    padding: horizontalScale(12),
  },
});
