import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Form from '../../components/Form';

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

export default (): JSX.Element => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.contentContainer}
      activeOpacity={1}
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.titleWrapper}>
        <Text style={styles.formTitle}>Get started</Text>
      </View>
      <Form inputItems={items} selectItems={programmingLanguages} />
    </TouchableOpacity>
  </View>
);
