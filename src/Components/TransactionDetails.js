import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Button, Stack } from "react-bootstrap"


export default function TransactionDetails() {
    const [transaction, setTransaction] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/transactions/${id}`)
            .then((response) => setTransaction(response.data));
    }, []);
    
    return (
        <div class="card">
            <div class="card-header"><span class="fw-bold">From: {transaction.from}</span></div>
            <div class="card-body">
                <h5 class="card-title mb-4">{transaction.name}</h5>
                <p class="card-text">Description: {transaction.description}</p>
                <p class="card-text">Amount: {transaction.amount}</p>
                <p class="card-text">Category({transaction.category})</p>
                <Stack direction="horizontal" gap="3">
                    <Button>Back</Button>
                    <Button>Edit</Button>
                </Stack>
            </div>
        </div>
    )
}