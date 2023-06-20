import React, {useState} from "react";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpenses/ExpensesFilter";
import ExpensesLists from "./ExpensesLists";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2019')

    const saveSeleceteddateHandler = (selectedDate) => {
        setFilteredYear(selectedDate);
    }
    const filteredExpense = props.items.filter(item => item.date.getFullYear().toString() == filteredYear)



    return (
        <Card className='expenses'>
            <ExpensesFilter seleceted={ filteredYear } onSaveSelectedDate={ saveSeleceteddateHandler }/>
            <ExpensesChart expenses={filteredExpense}/>
            <ExpensesLists item={filteredExpense}/>
        </Card>
    )
}
export  default Expenses;