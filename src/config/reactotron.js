import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({host: '192.168.1.103'})
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
