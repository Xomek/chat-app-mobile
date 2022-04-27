import { StyleProp, TextStyle, StyleSheet, Text } from "react-native";

type MyButtonType = "bordered";

interface IMyButton {
   style?: StyleProp<TextStyle>;
   type?: MyButtonType;
   children: string;
}

const MyButton = ({ style, type = "bordered", children }: IMyButton) => {
   return <Text style={[styles.button, styleTypes[type], style]}>{children}</Text>;
};

export default MyButton;

const styles = StyleSheet.create({
   button: {
      fontSize: 18,
      textAlign: "center",
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
