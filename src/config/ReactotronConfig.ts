import Reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-community/async-storage";

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: "Launch Base App 🚀",
    host: "192.168.15.6",
  })
  .useReactNative()
  .connect();
