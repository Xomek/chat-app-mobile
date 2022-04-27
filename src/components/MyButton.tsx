import { StyleProp, TextStyle, StyleSheet, Text, TouchableOpacity } from "react-native";

type MyButtonType = "bordered";

interface IMyButton {
   style?: StyleProp<TextStyle>;
   type?: MyButtonType;
   onPress: () => void;
   children: string;
}

const MyButton = ({ style, type = "bordered", onPress, children }: IMyButton) => {
   return (
      <TouchableOpacity onPress={onPress}>
         <Text style={[styles.button, styleTypes[type], style]}>{children}</Text>;
      </TouchableOpacity>
   );
};

export default MyButton;

const styles = StyleSheet.create({
   button: {
      fontSize: 18,
      fontWeight: "700",
      textAlign: "center",
      borderRadius: 4,
      color: "#fff",
   },
});

const styleTypes = StyleSheet.create({
   bordered: {
      borderWidth: 2,
      borderColor: "#fff",
      borderStyle: "solid",
   },
});
