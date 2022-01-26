import axios from "axios"
import { useState, useEffect } from "react"
import Transaction from "./Transaction"
import { currencyFormatter } from "../utils"
import { ProgressBar } from "react-bootstrap"

export default function Transactions() {
    const [transactions, setTransactions] = useState([])

    useEffect(()=> {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions`)
            .then((response) =>{
                setTransactions(response.data)
            }).catch((err) => {
                throw err
            })
    }, [])

    const getBalance = transactions
      .map((transaction) => {
        return transaction.amount;
      })
      .reduce(function (a, b) {
        return a + Number(b);
      }, 0);

    function getProgressBarVariant(getBalance) {
        if (getBalance > 0 && getBalance < 1000) {
            return "primary"
        } else {
            return "success"
        }
    }
    function getClassName(getBalance) {
        if (getBalance <= 0) {
            return "rounded-pill bg-danger opacity-10"
        } else {
            return "rounded-pill"
        }
    }
    console.log(getProgressBarVariant(getBalance))
    return(
        <div>
            <table className="table my-5">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => {
                        return <Transaction key={index} transaction={transaction} index={index} />
                    })}
                </tbody>
            </table>
            <div className="card">
                <h5 className="card-header text-end">Balance: {currencyFormatter.format(getBalance)}</h5>
                <div className="card-body">
                    <h6 className="card-title mb-3">Current Goal: +$1000</h6>
                    <ProgressBar
                        className={getClassName(getBalance)}
                        variant={getProgressBarVariant(getBalance)}
                        min={0}
                        max={1000}
                        now={getBalance}
                    />
                </div>
            </div>
        </div>
    )
}
