import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Input from '../../lib/components/Input';
import CustomPicker from '../../components/CustomPicker';

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


const programmingLanguages = [
  {
    label: 'Java',
    value: 'java',
  },
  {
    label: 'JavaScript',
    value: 'JavaScript',
  },
  {
    label: 'Python',
    value: 'python',
  },
  {
    label: 'Ruby',
    value: 'ruby',
  },
  {
    label: 'C#',
    value: 'csharp',
  },
  {
    label: 'C++',
    value: 'cpp',
  },
  {
    label: 'C',
    value: 'c',
  },
  {
    label: 'Go',
    value: 'go',
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
    return <CustomPicker
      key={pos}
      label={item.label}
      items={programmingLanguages}
      warn={false}
    />;
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
