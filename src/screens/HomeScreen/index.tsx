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
    required: true,
  },
  {
    fieldType: 'input',
    label: 'Phone number',
    type: 'phone',
    required: true,
  },
  {
    fieldType: 'input',
    label: 'E-mail Address',
    type: 'email',
    required: true,
  },
  {
    fieldType: 'dropdown',
    label: 'Contry',
    type: 'country',
    required: true,
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

  useEffect((): any => {
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
        <Form
          inputItems={inputItems}
          selectItems={countriesList}
          form={[]} // will be overrided by redux connect
          onSubmit={() => null} // will be overrided by redux connect
          onSaveForm={(n: any) => n} // will be overrided by redux connect
        />
      </TouchableOpacity>
    </View>
  );
};
