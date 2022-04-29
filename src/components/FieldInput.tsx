import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View } from "react-native";
import { Colors } from "../styles/variables";

type FieldInputType = "main";

interface IFieldInput {
   onChangeText: any;
   value: string;
   style?: StyleProp<TextStyle>;
   label?: string;
   type?: FieldInputType;
}

const FieldInput = ({ onChangeText, value, style, label, type = "main", ...props }: IFieldInput) => {
   return (
      <View>
         {label && <Text style={styles.label}>{label}</Text>}
         <TextInput style={[styles.input, styleTypes[type], style]} onChangeText={onChangeText} {...props} value={value} />
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
      borderRadius: 4,
      backgroundColor: Colors.LIGHT_BLUE,
   },
});
