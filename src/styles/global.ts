import { ViewStyle } from "react-native";
import { Colors } from "./variables";

interface IGlobal {
   page: ViewStyle;
}

export const Global: IGlobal = {
   page: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.BLUE,
   },
};
