import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Global } from "../styles/global";
import { Formik } from "formik";
import { asyncSetUserCreator } from "../redux/actions/user";
import FieldInput from "../components/FieldInput";
import MyButton from "../components/MyButton";
import { useDispatch } from "react-redux";

const Home: FC = () => {
   const dispatch = useDispatch();

   function chatEnter(data: any) {
      console.log(data);
      dispatch(asyncSetUserCreator(data));
   }

   return (
      <View style={Global.page}>
         <View style={styles.form}>
            <Formik initialValues={{ userName: "", theme: "", subTheme: "" }} onSubmit={(values) => chatEnter(values)}>
               {(props) => (
                  <>
                     <FieldInput
                        style={styles.input}
                        label="Введите имя:"
                        onChangeText={props.handleChange("userName")}
                        value={props.values.userName}
                     />
                     <FieldInput
                        style={styles.input}
                        label="Выберите тему обращения:"
                        onChangeText={props.handleChange("theme")}
                        value={props.values.theme}
                     />
                     <FieldInput
                        style={styles.input}
                        label="Выберите подтему:"
                        onChangeText={props.handleChange("subTheme")}
                        value={props.values.subTheme}
                     />
                     <MyButton style={styles.button} onPress={() => props.handleSubmit()}>
                        Войти в чат
                     </MyButton>
                  </>
               )}
            </Formik>
         </View>
      </View>
   );
};

export default Home;

const styles = StyleSheet.create({
   form: {
      width: "80%",
   },
   input: {
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 20,
   },
   button: {
      padding: 10,
      marginTop: 10,
   },
});
