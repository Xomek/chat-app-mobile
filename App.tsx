import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { Colors } from "./src/styles/variables";

export default function App() {
   return (
      <SafeAreaView style={styles.container}>
         <ExpoStatusBar style="auto" backgroundColor={Colors.BLUE} />
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
   },
});
