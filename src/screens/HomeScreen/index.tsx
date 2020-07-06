import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Input from '../../components/Input';

import styles from './styles';

const items = [
  {
    fieldType: 'input',
    label: 'Social Secutiry Number',
    type: 'ssn',
  },
  {
    fieldType: 'input',
    label: 'Phone number',
    type: 'phone',
  },
  {
    fieldType: 'input',
    label: 'E-Mail',
    type: 'email',
  },
  {
    fieldType: 'dropdown',
    label: 'Contry',
    type: 'country',
  },
];

interface InputItem {
  fieldType: string,
  type: string,
  label: string
}

export default (): JSX.Element => {

  const InputList = (): any => items.map((item: InputItem, pos: number) => {
    if (item.fieldType === 'input') {
      return <Input key={pos} label={item.label} type={item.type} />;
    }
    return null;
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.contentContainer}
        activeOpacity={1}
        onPress={() => Keyboard.dismiss()}

      >
        <View style={styles.titleWrapper}>
          <Text style={styles.formTitle}>Get started</Text>
        </View>
        <View style={styles.formContainer}>
          <InputList />
        </View>
      </TouchableOpacity>
    </View>
  );
};
