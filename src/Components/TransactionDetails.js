import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


export default function TransactionDetails() {
    const [transaction, setTransaction] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/transactions/${id}`)
            .then((response) => setTransaction(response.data));
    }, []);
    
    return (
        <></>
    )
}