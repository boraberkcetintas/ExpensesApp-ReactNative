import { Text, View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import IconButton from "../componenets/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../componenets/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, deleteExpense, updateExpense } from "../store/expenses";

function ManageExpense() {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    navigation.goBack();
    dispatch(deleteExpense({ id: editedExpenseId }));
  }
  function cancelExpenseHandler() {
    navigation.goBack();
  }
  function confirmExpenseHandler() {
    navigation.goBack();
    if (isEditing) {
      dispatch(
        updateExpense({
          id: editedExpenseId,
          description: "Test",
          amount: 31.99,
          date: new Date("2023-7-2"),
        })
      );
    } else {
      dispatch(
        addExpense({
          description: "YeniTest",
          amount: 11.99,
          date: new Date(),
        })
      );
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button
          style={styles.button}
          mode={"flat"}
          onPress={cancelExpenseHandler}
        >
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmExpenseHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name={"trash"}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
