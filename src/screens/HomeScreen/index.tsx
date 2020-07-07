import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Form from '../../components/Form';

import styles from './styles';

const inputItems = [
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
    label: 'E-mail Address',
    type: 'email',
  },
  {
    fieldType: 'dropdown',
    label: 'Contry',
    type: 'country',
  },
];

export default (): JSX.Element => {
  const [countriesList, setCountriesList] = useState<Array<any>>([]);

  const onGetCountries = async () => {
    const countries = await SecureStore.getItemAsync('countries');
    if (countries) {
      setCountriesList(JSON.parse(countries));
    } else {
      setCountriesList([]);
    }
  };

  useEffect(() => {
    onGetCountries();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.contentContainer}
        activeOpacity={1}
        onPress={() => Keyboard.dismiss()}
      >
        <View style={styles.titleWrapper}>
          <Text style={styles.formTitle}>REDUX PERSIST FORM</Text>
        </View>
        <Form inputItems={inputItems} selectItems={countriesList} />
      </TouchableOpacity>
    </View>
  );
};
