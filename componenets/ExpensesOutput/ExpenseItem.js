import { StyleSheet, View, Text, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ id, description, date, amount }) {
  const navigation = useNavigation();
  function expensePressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={[styles.textBase]}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 16,
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOpacity: 0.5,
    shadowOffset: { height: 1, width: 1 },
    shadowRadius: 4,
  },
  amountContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textBase: {
    color: "white",
  },
  amountText: {
    color: GlobalStyles.colors.accent500,
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
