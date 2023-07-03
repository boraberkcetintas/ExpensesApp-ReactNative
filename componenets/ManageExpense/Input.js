import { TextInput, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, textInputConfig, style }) {
  const inputStyle = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 10,
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    borderRadius: 4,
    padding: 6,
    fontSize: 18,
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    maxHeight: 200,
    textAlignVertical: "top",
  },
});
