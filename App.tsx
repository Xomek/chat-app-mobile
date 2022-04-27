import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";

export default function App() {
   return (
      <SafeAreaView style={styles.container}>
         <ExpoStatusBar style="auto" />
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
   },
});
      