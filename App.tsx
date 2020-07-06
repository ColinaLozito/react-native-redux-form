import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import HomeScreen from './src/screens/HomeScreen';
import ErrorBoundary from './src/containers/ErrorBoundary'

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
        // @ts-ignore
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
          <ActionSheetProvider>
            <View style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <HomeScreen />
            </View>
          </ActionSheetProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
