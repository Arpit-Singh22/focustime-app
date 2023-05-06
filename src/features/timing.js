import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { RoundedButton } from '../component/roundedButton';

export const Timing = ({ onChangeTime }) => {
  // const [customTime, setCustomTime] = useState(null);
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="25" onPress={() => onChangeTime(25)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="50" onPress={() => onChangeTime(50)} />
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
