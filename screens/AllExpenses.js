import ExpensesOutput from "../componenets/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";

function AllExpenses() {
  const expenses = useSelector((state) => state.expensesReducer.expenses);
  return <ExpensesOutput expensePeriodName={"Total"} expenses={expenses} />;
}

export default AllExpenses;
