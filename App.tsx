import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { Colors } from "./src/styles/variables";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Home from "./src/screens/Home";

export default function App() {
   return (
      <Provider store={store}>
         <SafeAreaView style={styles.container}>
            <ExpoStatusBar style="light" backgroundColor={Colors.BLUE} />
            <Home />
         </SafeAreaView>
      </Provider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
   },
});
