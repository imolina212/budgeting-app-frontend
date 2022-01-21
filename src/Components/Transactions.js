import axios from "axios"
import { useState, useEffect } from "react"
import Transaction from "./Transaction"

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

    return(
        <div>
            <table className="table">
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
        </div>
    )
}
