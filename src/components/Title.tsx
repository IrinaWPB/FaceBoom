import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {scaleFontSize} from '../helpers/scaling';

interface ITitleProps {
  title: string;
}
export default function Title(props: ITitleProps) {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: 'InterTight-Bold',
    fontSize: scaleFontSize(24),
  },
});
