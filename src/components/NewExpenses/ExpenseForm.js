import React,{useState} from "react";
import './ExpenseForm.css'


function ExpenseForm(props){
       const [eneteredTitle, seteneteredTitle] = useState('')
       const [eneteredAmount, seteneteredAmount] = useState('')
       const [eneteredDate, seteneteredDate] = useState('')
    // const [userInput, seUserInput]=useState({
    //     eneteredTitle:'',
    //     eneteredAmount:'',
    //     eneteredDate:''
    // })
    // const amountHandler = (event)=>{
    //     seUserInput((prevstate)=>{
    //         return{...prevstate, eneteredTitle: event.target.value}
    //     });
    // }
    const titleHandler = (event)=>{
        seteneteredTitle(event.target.value);
    }

    const amountHandler = (event)=>{
        seteneteredAmount(event.target.value);
    }
    const dateHandler = (event)=>{
        seteneteredDate(event.target.value);;
    }
    const submitHandler = (event)=>{
           event.preventDefault()
        const expenseData = {
               title: eneteredTitle,
               amount: eneteredAmount,
               date: new Date(eneteredDate)
        };

        props.onSaveExpenseData(expenseData)
        seteneteredTitle('')
        seteneteredAmount('')
        seteneteredDate('')
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={eneteredTitle} onChange={titleHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={eneteredAmount} onChange={amountHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2020-01-01' max='2023-01-12' value={eneteredDate} onChange={dateHandler}/>
                </div>

            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default ExpenseForm;