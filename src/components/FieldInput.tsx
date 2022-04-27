import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View } from "react-native";
import { Colors } from "../styles/variables";

type FieldInputType = "main";

interface IFieldInput {
   style?: StyleProp<TextStyle>;
   label?: string;
   type?: FieldInputType;
}

const FieldInput = ({ style, label, type = "main" }: IFieldInput) => {
   return (
      <View>
         {label && <Text style={styles.label}>{label}</Text>}
         <TextInput style={[styles.input, styleTypes[type], style]} />
      </View>
   );
};

export default FieldInput;

const styles = StyleSheet.create({
   input: {
      fontSize: 18,
      color: "#fff",
   },
   label: {
      fontSize: 18,
      marginBottom: 14,
      color: "#fff",
   },
});

const styleTypes = StyleSheet.create({
   main: {
      backgroundColor: Colors.LIGHT_BLUE,
   },
});
