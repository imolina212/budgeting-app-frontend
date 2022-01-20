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
        </div>
    )
}
