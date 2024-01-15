import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

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
    fontSize: 24,
  },
});
