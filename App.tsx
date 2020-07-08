import React, { useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import HomeScreen from './src/screens/HomeScreen';
import ErrorBoundary from './src/containers/ErrorBoundary';

import CountriesRepository from './src/repositories/countries';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

interface Props {
  skipLoadingScreen?: boolean;
}

type Loading = boolean
type Async = () => Promise<void>
type ErrorHandle = (error: Error) => void
type Fnc = () => void

const App: React.FC<Props> = ({ skipLoadingScreen }: Props) => {
  const [loadingComplete, setLoadingComplate] = useState<Loading>(false);

  const loadResourcesAsync: Async = async () => {
    const countries = await SecureStore.getItemAsync('countries');
    if (!countries) {
      try {
        const countriesList = await CountriesRepository.countriesList();
        await SecureStore.setItemAsync('countries', countriesList);
      } catch (error) {
        console.log('error fetching countries', error);
      }
    }
    // here load resources at start of the app
  };

  const handleLoadingError: ErrorHandle = (error: Error) => {
    // handle errors
    console.warn(error);
  };

  const handleFinishLoading: Fnc = () => {
    // on finish loading resources
    setLoadingComplate(true);
  };

  if (!loadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );
  }
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={<View />} persistor={persistor}>
          <View style={styles.container}>
            <HomeScreen />
          </View>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
