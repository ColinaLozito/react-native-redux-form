import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import HomeScreen from './src/screens/HomeScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

interface Props {
  skipLoadingScreen?: boolean;
}

const App: React.FC<Props> = ({ skipLoadingScreen }: Props): JSX.Element => {
  const [loadingComplete, setLoadingComplate] = useState(false);

  const loadResourcesAsync = async () => {
    // here load resources at start of the app
  };

  const handleLoadingError = (error: Error) => {
    // handle errors
    console.warn(error);
  };

  const handleFinishLoading = () => {
    // on finish loading resources
    setLoadingComplate(true);
  };

  if (!loadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        // @ts-ignore
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );
  }
  return (
    <Provider store={store}>
      <PersistGate loading={<View />} persistor={persistor}>
        <ActionSheetProvider>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <HomeScreen />
          </View>
        </ActionSheetProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
