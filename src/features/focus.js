import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../component/roundedButton';
import { spacing } from '../utils/sizes';
export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on ?"
          value={subject}
          onChangeText={(val) => {
            setSubject(val);
          }}
        />
        <View style={styles.button}>
          <RoundedButton title="+" onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: 5,
    marginLeft: 10,
  },
  inputContainer: {
    padding: spacing.large,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
