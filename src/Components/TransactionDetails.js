import axios from "axios"
import { useState, useEffect } from "react"
import { useParams , Link } from "react-router-dom";
import { Button, Stack } from "react-bootstrap"


export default function TransactionDetails() {
    const [transaction, setTransaction] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/transactions/${id}`)
            .then((response) => setTransaction(response.data));
    }, [id]);
    
    return (
        <div className="card">
            <div className="card-header"><span className="fw-bold">From: {transaction.from}</span></div>
            <div className="card-body">
                <h5 className="card-title mb-4">{transaction.name}</h5>
                <p className="card-text">Description: {transaction.description}</p>
                <p className="card-text">Amount: {transaction.amount}</p>
                <p className="card-text">Category({transaction.category})</p>
                <Stack className="mt-5" direction="horizontal" gap="3">
                    <Link to="/transactions">
                        <Button variant="primary">Back</Button>
                    </Link>
                    <div className="vr"></div>
                    <Link to ={`/transactions/edit/${id}`}>
                        <Button variant="outline-primary">Edit</Button>
                    </Link>
                </Stack>
            </div>
        </div>
    )
}