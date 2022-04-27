import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { Colors } from "./src/styles/variables";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
   return (
      <Provider store={store}>
         <SafeAreaView style={styles.container}>
            <ExpoStatusBar style="auto" backgroundColor={Colors.BLUE} />
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
