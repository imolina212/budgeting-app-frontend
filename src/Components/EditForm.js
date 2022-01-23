import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams , Link } from "react-router-dom";
import { Stack, Button } from "react-bootstrap"

export default function NewForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    amount: 0,
    date: "",
    from: "",
    name: "",
    description: "",
  })

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions/${id}`)
      .then((response) => {
        setTransaction(response.data)
    })
    .catch((err) => console.log('catch', err))
  }, [id])

  const handleInput = (event) => {
    setTransaction({...transaction, [event.target.id]: event.target.value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/transactions/${id}`, transaction)
      .then(() => { navigate(`/transactions/${id}`)})
  }

  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/transactions/${id}`)
      .then((response) => {
        navigate("/transactions")
      })
  } 

  return(
    <form className="my-5">
      <Stack direction="vertical" gap="2">
          <label>Choose amount:</label>
          <input 
          id="amount"
          value={transaction.amount}
          onChange={handleInput}
          type="number"
          placeholder="Enter Amount Here"
          required
          />
          <input
            id="date"
            value={transaction.date}
            type="text"
            onChange={handleInput}
            placeholder="Enter Date Here"
            required
          />
          <input
            id="from"
            value={transaction.from}
            type="text"
            onChange={handleInput}
            placeholder="Input Sender Here"
            required
          />
          <input
            id="name"
            class="mb-2"
            value={transaction.name}
            type="text"
            onChange={handleInput}
            placeholder="Enter Transaction Name Here"
            required
          />
          <select className="form-select" name="category">
            <option selected>Select a Category</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Transportation">Transportation</option>
            <option value="Savings">Savings</option>
            <option value="Debt">Debt</option>
            <option value="Food">Food</option>
            <option value="Utilities">Utilities</option>
            <option value="Pet Care">Pet Care</option>
            <option value="Housing">Housing</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
          <textarea class="form-control rounded-0" id="" rows="3" placeholder="Description (optional)"></textarea>
      </Stack>
      <Stack direction="horizontal" className="my-5" gap="3">
        <Link to={`/transactions/${id}`}>
          <Button variant="primary" className="ms-2">Cancel</Button>
        </Link>
        <div className="vr"></div>
        <Button onClick={handleDelete} variant="outline-danger">Delete</Button>
        <div className="vr"></div>
        <Button onClick={handleSubmit} variant="outline-primary">Done</Button>
      </Stack>
    </form>
  )
}
