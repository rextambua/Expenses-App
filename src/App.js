import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_Expenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2019, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
    {
        id: 'e5',
        title: 'Book',
        amount: 450,
        date: new Date(2020, 8, 12),
    },
];
function App() {
    const [expense, setExpense] = useState(DUMMY_Expenses);
    const addExpenseHandler = (expense)=>{
        setExpense((prevExpense)=>{
            return[expense, ...DUMMY_Expenses]
        })
    }

  return (
    <div>
       <NewExpense onAddExpense={addExpenseHandler}/>
       <Expenses items={expense}/>
    </div>
  );
}

export default App;
