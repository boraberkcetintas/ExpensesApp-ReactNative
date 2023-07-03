import { Text, View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import IconButton from "../componenets/UI/IconButton";
import { GlobalStyles } from "../constants/styles";

import { useDispatch, useSelector } from "react-redux";
import { addExpense, deleteExpense, updateExpense } from "../store/expenses";
import ExpenseForm from "../componenets/ManageExpense/ExpenseForm";

function ManageExpense() {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesReducer.expenses);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpenseData = expenses.find((expense)=> expense.id === editedExpenseId);

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
  function confirmExpenseHandler(expenseData) {
    navigation.goBack();
    if (isEditing) {
      dispatch(
        updateExpense({
          id: editedExpenseId,
          ...expenseData,
        })
      );
    } else {
      dispatch(
        addExpense({
          ...expenseData,
        })
      );
    }
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelExpenseHandler}
        onSubmit={confirmExpenseHandler}
        defaultValue={selectedExpenseData}
      />

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
});
