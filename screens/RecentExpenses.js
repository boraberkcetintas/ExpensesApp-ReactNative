import ExpensesOutput from "../componenets/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";
import { getDateMinusDays } from "../util/date";
function RecentExpenses() {
  const expenses = useSelector((state) => state.expensesReducer.expenses);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expensePeriodName={"Last 7 Days"}
      expenses={recentExpenses}
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
